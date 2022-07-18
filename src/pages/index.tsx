import type { NextPage } from "next";
import Card from "@/components/Card";
import Seo from "@/components/Seo";


const Home: NextPage = () => {
  return (
    <div className="px-0 py-8">
      <Seo templateTitle="Home" />

      <main className="flex min-h-screen flex-1 flex-col justify-center py-16 px-6 lg:px-0">
        <h1 className="m-0 text-5xl leading-[1.15] md:text-[4rem] text-center">
          Welcome to{" "}
          <a
            href="https://web3philippines.org"
            className="text-[#0070f3] hover:underline focus:underline active:underline"
          >
            Web3 Philippines Directory!
          </a>
        </h1>
        <p className="my-[4rem] mx-0 text-center text-2xl leading-[1.5]">
          Currently, under development! 🙏
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Uncomment below to show card or Comment below to hide card: [ <Card /> ]*/}
          {<Card /> }
        </div>
      </main>
    </div>
  );
};

export default Home;
