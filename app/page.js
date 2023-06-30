import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-8 bg-[#44B69C]">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        href="//db.onlinewebfonts.com/c/961a181da27e7cbc072ec2fb5bbfe2a9?family=Circular+Std+Bold"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="//db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book"
        rel="stylesheet"
        type="text/css"
      />
      <div className="flex flex-col justify-center h-full 2xl:w-1/4 xl:w-1/3 gap-6">
        <img src="/wheelbarrow.jpg" className="w-60 mx-auto"></img>
        <p className="font-white mx-auto font-circularstdbold text-xl text-center">
          Website Under Maintenance
        </p>
        <p className="text-white mx-auto font-circularstd text-base text-center">
          We&apos;re currently undergoing some very exciting changes, and we
          can&apos;t wait for you to see.
        </p>
        <div className="flex sm:flex-row flex-col text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-white gap-4 justify-center">
          <Link
            href="mailto:hello@ernie.london"
            className="font-circularstdbold text-xl text-white hover:text-[#F8A740]"
          >
            hello@ernie.london
          </Link>
          <Link
            href="tel:0203 8838659"
            className="font-circularstdbold text-xl text-white hover:text-[#F8A740] sm:pl-4 pt-4 pl-0 sm:pt-0"
          >
            0203 8838659
          </Link>
        </div>
      </div>
    </main>
  );
}
