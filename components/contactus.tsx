import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <div className="pb-10">
          <Image
            src={`/assets/no-trustedby.svg`}
            width={30}
            height={30}
            alt="logo"
          />
        </div>
        <h2 className="text-4xl font-bold">Contact Us</h2>

        <form
          action=""
          className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]"
        >
          <input
            id="companyName"
            name="companyName"
            required
            maxLength={128}
            type="text"
            placeholder="Company Name"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={128}
            placeholder="Your Email"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          />
          <textarea
            name="message"
            id="message"
            required
            maxLength={1048576}
            placeholder="Additional information"
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
          ></textarea>
          <div className="text-center mt-10"></div>
          <button
            type="submit"
            className="bg-white text-black rounded-3xl px-8 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
