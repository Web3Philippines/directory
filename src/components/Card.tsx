import Image from "next/image";
import { useRouter } from "next/router";
import { Directory } from "@/interface";
import check from "../../public/check.png";

interface CardProps {
  directory: Directory;
}

const Card = ({ directory }: CardProps) => {
  const onCardClick = () => {
    window.open(directory.links.website.url, "_blank");
  };

  return (
    <div
      className="relative h-full w-full max-w-sm cursor-pointer rounded-xl bg-white bg-center p-8 pt-12 shadow duration-150 ease-in-out hover:scale-105 lg:min-w-[350px]"
      onClick={onCardClick}
    >
      <div className="flex w-full items-center">
        <div>
          <img
            src={directory.image}
            alt="icon"
            width={50}
            height={50}
            className="absolute -top-4 left-8 self-end rounded-2xl"
          />
        </div>
        <h2 className="flex w-full items-center gap-2 text-left text-xl font-semibold leading-6 text-neutral-dark">
          {directory.name}{" "}
          {directory.verified ? (
            <Image src={check} alt="sample icon" height={14} width={14} />
          ) : null}
        </h2>
      </div>
      <p className="my-3 text-base font-normal leading-[20px] tracking-wide text-neutral-light line-clamp-3">
        {directory.description}
      </p>
      <ul className="flex flex-row flex-wrap gap-2 text-xs">
        {directory.tags.map((tag, idx) => (
          <li
            key={idx}
            className="rounded-sm px-2 py-1 text-sm font-bold lowercase leading-[18px] text-purple-heart"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export function SkeletonCard() {
  return (
    <div
      role="status"
      className="relative h-[230px] w-full max-w-sm animate-pulse cursor-pointer rounded-xl bg-white bg-center p-8 pt-12 shadow duration-150 ease-in-out hover:scale-105 lg:min-w-[350px]"
    >
      <div className="flex w-full items-center">
        <div>
          <svg
            className="absolute -top-4 left-8 h-[50px] w-[50px] self-end rounded-2xl text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h2 className="mb-4 flex w-full items-center gap-2 text-left text-xl font-semibold leading-6 text-neutral-dark">
          <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200" />
        </h2>
      </div>

      <div className="mb-2.5 h-2 rounded-full bg-gray-200" />
      <div className="mb-2.5 h-2 rounded-full bg-gray-200" />
      <div className="h-2 rounded-full bg-gray-200" />
      <ul className="absolute bottom-8 left-8 flex gap-2 text-xs">
        <div className="h-2 w-10 rounded-full bg-gray-200" />
        <div className="h-2 w-10 rounded-full bg-gray-200" />
        <div className="h-2 w-10 rounded-full bg-gray-200" />{" "}
        <div className="h-2 w-10 rounded-full bg-gray-200" />
      </ul>
    </div>
  );
}

export default Card;
