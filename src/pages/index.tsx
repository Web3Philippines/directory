import type { NextPage } from "next";
import { useState } from "react";
import Card from "@/components/Card";
import Seo from "@/components/Seo";
import { Directory } from "@/interface";
import { useGetDirectories } from "@/queries";

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const { data: directories } = useGetDirectories({
    page,
    size,
  });

  return (
    <div className="px-0 py-8">
      <Seo templateTitle="Home" />

      <main className="flex min-h-screen flex-1 flex-col justify-center py-16 px-6 lg:px-0">
        <h1 className="my-[1rem] m-0 text-center text-5xl leading-[1.15] md:text-[4rem]">
          Welcome to{" "}
          <a
            href="https://web3philippines.org"
            className="text-[#0070f3] hover:underline focus:underline active:underline"
          >
            Web3 Philippines Directory!
          </a>
          <p className="my-[1rem] mx-60 text-justify text-lg leading-1 about">
            Web3 Philippines Directory is an open-source web application digital local directory of awesome Web3 things curated by the community. Actively maintained by the first and official Web3 community in the Philippines. 📚💜💻 <a href="https://forms.gle/8BUfE2A7NRtqYbm66" className="text-[#0070f3] hover:underline focus:underline active:underline">Submit your Web3 project.</a>
          </p>
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Uncomment below to show card or Comment below to hide card: [ <Card /> ]*/}
          {!!directories && directories.length > 0
            ? directories.map((directory: Directory) => (
                <Card directory={directory} key={directory.id} />
              ))
            : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
