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
      className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4"
      onClick={onCardClick}
    >
      <div className="flex flex-row justify-center md:justify-end">
        <img src={directory.image || "/placeholder.png"} className="w-20 h-20 object-cover rounded-full border-4 border-indigo-800" alt="icon" />
      </div>
      <h2 className="text-xl font-semibold text-mine-shaft-400">
        {directory.name}
      </h2>
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
      <div className="flex justify-end mb-4">
        {directory.verified ? (
          <div className="ml-auto flex items-center gap-2">
            <Image src={check} alt="sample icon" height={18} width={18} />
            <p className="text-xs tracking-wide text-purple-heart">Verified</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
