import Image from "next/image";
import { useRouter } from "next/router";
import { Directory } from "@/interface";
import check from "../../public/check.png";

interface CardProps {
  directory: Directory;
}

const Card = ({ directory }: CardProps) => {
  const router = useRouter();

  const onCardClick = () => {
    router.push(directory.links.website.url);
    // router.push({
    //   pathname: "/directory/[id]",
    //   query: { id: directory.id },
    // });
  };

  return (
    <div
      className="w-full max-w-sm cursor-pointer rounded-xl border-2 p-4 duration-150 ease-in-out hover:scale-105"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/placeholder.png"
          alt="icon"
          width={50}
          height={50}
          layout="fixed"
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold text-mine-shaft-400">
          {directory.name}
        </h2>
        {directory.verified ? (
          <div className="ml-auto flex items-center gap-2">
            <Image src={check} alt="sample icon" height={18} width={18} />
            <p className="text-xs tracking-wide text-purple-heart">Verified</p>
          </div>
        ) : null}
      </div>
      <p className="my-3 text-sm leading-4 tracking-wide opacity-80">
        {directory.description}
      </p>
      <ul className="flex gap-2 text-xs">
        {directory.tags.map((tag, idx) => (
          <li
            key={idx}
            className="rounded-sm bg-purple-heart px-2 py-1 lowercase text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
