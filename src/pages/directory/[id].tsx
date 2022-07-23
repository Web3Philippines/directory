/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPropsContext } from "next";
import Seo from "@/components/Seo";
import { Project } from "@/interface";
import { directory } from "@/mock";

interface ProjectProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div>
      <Seo title={project.name} />
      <h3>{`Project Information page for ${project.name}`}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = directory.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: false, // shows 404 page for paths not present in list
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const project = directory.find((p) => p.id === id);
  if (!!id && !!project) {
    return {
      props: {
        project,
      },
    };
  }

  return {
    notFound: true,
  };
}
