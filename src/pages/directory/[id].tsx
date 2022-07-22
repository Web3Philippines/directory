import { Project as ProjectType, directory } from "@/mock";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div>
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

export async function getStaticProps({ params }: any) {
  const id = params.id;
  const project = directory.find((p) => p.id === id);
  return {
    props: {
      project,
    },
  };
}
