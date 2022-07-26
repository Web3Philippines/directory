import { useQuery } from "@tanstack/react-query";
import { DirectoryQuery } from "@/interface";
import { directories } from "@/mock";

//TODO: make this async await for actual data fetching
function getDirectories() {
  try {
    return directories;
  } catch (error: unknown) {
    console.error("getDirectories error", error);
  }
}

export function useGetDirectories({ page, size, name, tags }: DirectoryQuery) {
  return useQuery(["directories", page, size, name, tags], getDirectories);
}

export interface DirectoryInfo {
  id: string;
}

function getDirectoryInfo(id: string) {
  try {
    return directories.find((d) => d.id === id);
  } catch (error: unknown) {
    console.error("getDirectoryInfo error", error);
  }
}

export function useGetDirectoryInfo({ id }: DirectoryInfo) {
  return useQuery(["directory-info", id], () => getDirectoryInfo(id));
}
