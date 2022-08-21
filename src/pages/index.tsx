import type { NextPage } from "next";
import { useState } from "react";
import Card, { SkeletonCard } from "@/components/Card";
import Seo from "@/components/Seo";
import { Directory } from "@/interface";
import { useGetDirectories } from "@/queries";

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const { data: directories, isLoading } = useGetDirectories({
    page,
    size,
  });

  const skeletonItems: JSX.Element[] = [];
  for (let i = 1; i <= 9; i++) {
    skeletonItems.push(<SkeletonCard />);
  }

  return (
    <div className="m-0 bg-[#F2F2F2] p-0">
      <Seo templateTitle="Home" />
      <header className="min-w-screen w-full bg-header-pattern bg-cover bg-bottom md:h-[160px] md:rounded-bl-[100px]">
        <div className="mx-auto flex h-[200px] max-w-screen-2xl flex-col items-center justify-between px-6 md:h-[160px] md:flex-row md:items-center md:rounded-bl-[100px] md:px-10 lg:px-[165px] xl:px-[100px]">
          <h3 className="mt-6 text-3xl font-bold capitalize text-white md:mt-0">
            Web3 Philippines Directory 📃
          </h3>
          <a
            href="https://forms.gle/8BUfE2A7NRtqYbm66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-hearts mb-6 self-end rounded-2xl border-2 px-5 py-3 font-bold text-white hover:opacity-75 md:mb-0 md:self-center"
          >
            Submit project
          </a>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-screen-2xl flex-1 flex-col justify-center px-6 pb-[70px] pt-10 md:px-10 lg:px-[165px] xl:px-[100px]">
        <p className="mb-[50px] text-center text-base leading-6 text-neutral-light md:mb-[70px] md:text-left">
          Web3 Philippines Directory is an open-source web application digital
          local directory of awesome Web3 things curated by the community.
          <br />
          Actively maintained by the first and official Web3 community in the
          Philippines. 📚💜💻{" "}
        </p>

        <div className="grid gap-y-[50px] md:grid-cols-2 md:gap-x-[10px] md:gap-y-[65px] lg:gap-x-[30px] xl:grid-cols-3 ">
          {!!directories && directories.length > 0
            ? directories.map((directory: Directory) => (
                <Card directory={directory} key={directory.id} />
              ))
            : null}
          {isLoading ? skeletonItems : null}
        </div>
      </main>
    </div>
  );
};

export default Home;
