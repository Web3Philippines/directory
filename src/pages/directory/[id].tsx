/* eslint-disable @typescript-eslint/require-await */
import { GetStaticPropsContext } from "next";
import Seo from "@/components/Seo";
import { Directory } from "@/interface";
import { directories } from "@/mock";

interface DirectoryProps {
  directory: Directory;
}

export default function DirectoryPage({ directory }: DirectoryProps) {
  return (
    <div>
      <Seo title={directory.name} />
      <h3>{`directory Information page for ${directory.name}`}</h3>
      <p>{directory.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = directories.map((d) => ({
    params: { id: d.id },
  }));
  return {
    paths,
    fallback: false, // shows 404 page for paths not present in list
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const directory = directories.find((p) => p.id === id);
  if (!!id && !!directory) {
    return {
      props: {
        directory,
      },
    };
  }

  return {
    notFound: true,
  };
}
