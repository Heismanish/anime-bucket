import Image from "next/image";

function Footer() {
  return (
    <footer className="fixed bottom-0  w-screen sm:px-16  py-1 px-8 flex justify-center items-center gap-2 flex-wrap bg-[#0e1015]">
      <p className="text-base text-[#ababab]">
        Made with ❤️ by
        <a
          href="https://github.com/Heismanish/"
          target="blank"
          className="ml-2 font-semibold"
        >
          @heismanish{" "}
        </a>{" "}
      </p>
      {/* <Image
        src="./logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div> */}
    </footer>
  );
}

export default Footer;
