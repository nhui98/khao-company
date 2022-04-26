import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  commits: number;
};

const ghAccounts: { readonly [username: string]: number } = { mrousavy: 1 };

async function getNumOfCommits() {
  try {
    const baseUrl = "";
    let num = 0;

    await Promise.all(
      Object.keys(ghAccounts).map(async (username) => {
        const perPage = 100;
        const startPage = ghAccounts[username];
        num += (startPage - 1) * perPage;
        for (let page = startPage; page < 100; ++page) {
          const { data: commits } = await axios.get(baseUrl, {
            params: {
              author: username,
              since: "2000-01-01",
              per_page: perPage,
              page,
            },
            auth: {
              username: process.env[""] || "",
              password: process.env[""] || "",
            },
          });
          num += commits.length;
          if (commits.length < perPage) break;
        }
      })
    );

    return num;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const commits = await getNumOfCommits()
  //cache for a day
  res.setHeader("Cache-Control", "s-maxage=86400");

  res.status(200).json({
    commits: 0,
  });
}
