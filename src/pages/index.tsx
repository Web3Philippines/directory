import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import SkeletonCard from "@/components/SkeletonCard";
import { Directory } from "@/interface";
import Layout from "@/layout";
import { useIsMobileScreen, useIsTabletScreen } from "@/lib/hooks/useScreens";
import DirectoryDetails from "@/modules/directory-details";
import { useGetDirectories } from "@/queries";

Modal.setAppElement("#__next");

const Home: NextPage = () => {
  const isMobile = useIsMobileScreen();
  const isTablet = useIsTabletScreen();
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(12);
  const { data: directories, isLoading } = useGetDirectories({
    page,
    size,
  });
  const [isModalExist, setIsModalExist] = useState<boolean>(false);

  const skeletonItems: JSX.Element[] = [];
  for (let i = 1; i <= 9; i++) {
    skeletonItems.push(<SkeletonCard key={i} />);
  }

  const handleOnAfterOpen = () => {
    setIsModalExist((old) => !old);
  };

  const handleOnRequestClose = () => {
    setIsModalExist((old) => !old);
    router.push("/");
  };

  return (
    <Layout title="Home">
      <div className=" flex w-full flex-1 flex-col justify-center px-6 pb-[70px] pt-10 md:px-10 lg:px-[165px] xl:px-[100px]">
        <p className="mb-[50px] text-center text-base leading-6 text-neutral-light md:mb-[70px] md:text-left">
          Web3 Philippines Directory is an open-source web application digital
          local directory of awesome Web3 things curated by the community.
          <br />
          Actively maintained by the first and official Web3 community in the
          Philippines.{" "}
        </p>

        {!!directories && (
          <p className="mb-[20px] text-center text-base leading-6 text-neutral-lightest md:mb-[50px] md:text-left">
            {`Last Updated: ${new Date(
              directories.lastUpdated * 1000,
            ).toLocaleString()}`}
          </p>
        )}

        <div className="grid gap-y-[50px] md:grid-cols-2 md:gap-x-[10px] md:gap-y-[65px] lg:gap-x-[30px] xl:grid-cols-3 ">
          {!!directories && directories.data.length > 0
            ? directories.data.map((directory: Directory) => (
                <Link
                  key={directory.id}
                  href={`/?directoryId=${directory.id}`}
                  as={`/directory/${directory.id}`}
                >
                  <a>
                    {" "}
                    <Card directory={directory} />
                  </a>
                </Link>
              ))
            : null}
          {isLoading ? skeletonItems : null}
        </div>
        <Pagination
          setPage={setPage}
          page={page}
          length={directories?.length}
          hasNextPage={directories?.hasNextPage}
          size={size}
        />
      </div>
      <Modal
        isOpen={!!router.query.directoryId}
        onAfterOpen={handleOnAfterOpen}
        onRequestClose={handleOnRequestClose}
        style={{
          content: {
            width: isMobile ? "initial" : isTablet ? "75%" : "50%",
            margin: "auto",
          },
        }}
      >
        <div className=" flex w-full justify-end">
          <button onClick={handleOnRequestClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <DirectoryDetails
          directoryId={router.query.directoryId as string}
          isOnModal={isModalExist}
        />
      </Modal>
    </Layout>
  );
};

export default Home;
