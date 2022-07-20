import { Project } from "@/mock";
import Image from "next/image";
import { useRouter } from "next/router";
import check from "../../public/check.png";
import sampleIcon from "../../public/favicon/favicon-32x32.png";

// TODO
// dynamic routing on card click
interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  const router = useRouter();
  const onCardClick = () => {
    router.push({
      pathname: "/project/[id]",
      query: { id: project.id },
    });
  };
  return (
    <div
      className="w-full max-w-sm cursor-pointer rounded-xl border-2 p-4 duration-150 ease-in-out hover:scale-105"
      onClick={onCardClick}
    >
      <div className="flex items-center gap-3">
        <Image
          src={sampleIcon}
          alt="sample icon"
          layout="fixed"
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold text-mine-shaft-400">
          {project.name}
        </h2>
        {project.verified ? (
          <div className="ml-auto flex items-center gap-2">
            <Image src={check} alt="sample icon" height={18} width={18} />
            <p className="text-xs tracking-wide text-purple-heart">Verified</p>
          </div>
        ) : null}
      </div>
      <p className="my-3 text-sm leading-4 tracking-wide opacity-80">
        {project.description}
      </p>
      <ul className="flex gap-2 text-xs">
        {project.tags.map((tag) => (
          <li className="rounded-sm bg-purple-heart px-2 py-1 lowercase text-white">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
