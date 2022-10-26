import Image from "next/image";
import { Directory } from "@/interface";
import check from "../../public/check.png";

interface CardProps {
  directory: Directory;
}

const Card = ({ directory }: CardProps) => {
  return (
    <div className="relative h-full w-full max-w-sm cursor-pointer rounded-xl bg-white bg-center p-8 pt-12 shadow duration-150 ease-in-out hover:scale-105 lg:min-w-[350px]">
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

export default Card;
