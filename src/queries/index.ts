import { useQuery } from "@tanstack/react-query";
import { DirectoryQuery } from "@/interface";

async function getDirectories({ page, size }: DirectoryQuery) {
  try {
    const response = await fetch(`/api/directory?page=${page}&size=${size}`);
    const directories = await response.json();
    return directories;
  } catch (error: unknown) {
    console.error("getDirectories error", error);
  }
}

export function useGetDirectories({ page, size, name, tags }: DirectoryQuery) {
  return useQuery(["directories", page, size, name, tags], () =>
    getDirectories({ page, size, name, tags }),
  );
}
