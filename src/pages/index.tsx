import type { NextPage } from "next";
import { useState } from "react";
import Card from "@/components/Card";
import Seo from "@/components/Seo";
import { Project } from "@/interface";
import { useGetDirectoryList } from "@/queries";

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const { data: directory } = useGetDirectoryList({
    page,
    size,
  });

  return (
    <div className="px-0 py-8">
      <Seo templateTitle="Home" />

      <main className="flex min-h-screen flex-1 flex-col justify-center py-16 px-6 lg:px-0">
        <h1 className="m-0 text-center text-5xl leading-[1.15] md:text-[4rem]">
          Welcome to{" "}
          <a
            href="https://web3philippines.org"
            className="text-[#0070f3] hover:underline focus:underline active:underline"
          >
            Web3 Philippines Directory!
          </a>
        </h1>
        <p className="my-[2rem] mx-0 text-center text-2xl leading-[1.5]">
          Currently, under development! 🙏
        </p>
        <p className="mx-0 mb-4 text-center text-2xl leading-[1.5]">
          Example Preview
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Uncomment below to show card or Comment below to hide card: [ <Card /> ]*/}
          {!!directory && directory.length > 0
            ? directory.map((project: Project) => (
                <Card project={project} key={project.id} />
              ))
            : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
