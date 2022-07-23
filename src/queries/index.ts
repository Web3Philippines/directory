import { useQuery } from "@tanstack/react-query";
import { DirectoryInfo, DirectoryQuery } from "@/interface";
import { directory } from "@/mock";

//TODO: make this async await for actual data fetching
function getDirectoryList() {
  try {
    return directory;
  } catch (error: unknown) {
    console.error("getDirectoryList error", error);
  }
}

export function useGetDirectoryList({
  page,
  size,
  name,
  tags,
}: DirectoryQuery) {
  return useQuery(["directory-list", page, size, name, tags], getDirectoryList);
}

function getDirectoryInfo(id: string) {
  try {
    return directory.find((d) => d.id === id);
  } catch (error: unknown) {
    console.error("getDirectoryInfo error", error);
  }
}

export function useGetDirectoryInfo({ id }: DirectoryInfo) {
  return useQuery(["directory-info", id], () => getDirectoryInfo(id));
}
