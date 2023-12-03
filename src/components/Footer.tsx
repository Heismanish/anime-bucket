import Image from "next/image";

function Footer() {
  return (
    <footer className="fixed bottom-0  w-screen sm:px-16  px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        Made with ❤️ by
        <a
          href="https://github.com/Heismanish/"
          target="blank"
          className="ml-2 font-semibold"
        >
          @heismanish{" "}
        </a>{" "}
      </p>
      <Image
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
      </div>
    </footer>
  );
}

export default Footer;
