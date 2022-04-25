import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ name, socialId, link }) => {
  return (
    <div>
      <Image src={`/assets/avatar.svg`} width={1366} height={1555} alt={name} />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target="_blank">{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
