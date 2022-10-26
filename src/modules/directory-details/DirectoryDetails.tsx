import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import SkeletonCard from "@/components/SkeletonCard";
import { Directory } from "@/interface";
import Layout from "@/layout";
import { useIsDesktopScreen, useIsTabletScreen } from "@/lib/hooks/useScreens";
import { useGetDirectories } from "@/queries";
import check from "../../../public/check.png";

interface DirectoryDetailsProps {
  directoryId: string;
  isOnModal: boolean;
}

export default function DirectoryDetails({
  directoryId,
  isOnModal,
}: DirectoryDetailsProps) {
  const isDesktop = useIsDesktopScreen();
  const isTablet = useIsTabletScreen();
  const router = useRouter();
  const { id } = router.query;
  const { data: directories, isLoading } = useGetDirectories({
    page: 1,
    size: 12,
  });
  const currentDirectoryId = id ?? directoryId;

  const directory = useMemo(() => {
    if (directories?.data?.length > 0) {
      return directories.data.find(
        (currentDirectory: Directory) =>
          currentDirectory.id === currentDirectoryId,
      );
    }
    return undefined;
  }, [directories, currentDirectoryId]);

  if (isLoading) return <SkeletonCard />;

  const directoryLinks = directory?.links;

  return (
    <Layout title={directory?.name} isOnModal={isOnModal}>
      <div
        className={cx(`w-full`, {
          ["h-full bg-white p-2 md:p-6"]: isOnModal,
          ["bg-transparent p-6 md:mx-auto md:py-10"]: !isOnModal,
        })}
        style={{
          height:
            !isOnModal && (isDesktop || isTablet)
              ? "calc(100vh - 288px)"
              : "100%",
        }}
      >
        <div
          className={cx(
            "flex w-full flex-col items-center p-0  md:items-start",
            {
              ["md:mx-[80px] md:w-[60%]"]: !isOnModal,
            },
          )}
        >
          <div className="mb-4">
            <img
              src={directory?.image}
              alt="icon"
              className="h-[75px] w-[75px] rounded-2xl md:h-[50px] md:w-[50px]"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row md:gap-6">
            <h2 className="flex w-full items-center gap-2 text-center text-base font-semibold leading-6 text-neutral-dark md:text-left md:text-xl">
              {directory?.name}{" "}
              {directory?.verified ? (
                <Image src={check} alt="sample icon" height={14} width={14} />
              ) : null}
            </h2>
            <div className="flex  gap-2 text-xs md:text-sm">
              {!!directoryLinks &&
                Object.keys(directoryLinks).map((link: string, idx: number) => {
                  return (
                    <Link key={idx} href={directoryLinks[link].url}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm px-2 py-1 text-sm font-bold lowercase leading-[18px] text-purple-heart"
                      >
                        {link}
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="my-3 text-base font-normal leading-[20px] tracking-wide text-neutral-light">
              {directory?.description}
            </p>
          </div>
          <div>
            <ul className="flex flex-row flex-wrap gap-2 text-xs md:text-sm">
              {directory?.tags.map((tag: string, idx: number) => (
                <li
                  key={idx}
                  className="rounded-sm px-2 py-1 text-sm font-bold lowercase leading-[18px] text-purple-heart"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
