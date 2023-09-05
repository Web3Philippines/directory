import { useQuery } from "@tanstack/react-query";
import { DirectoryQuery } from "@/interface";

//TODO: make this async await for actual data fetching
async function getDirectories({ page, size, name, tags }: DirectoryQuery) {
  try {
    // temporary patch
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://directory-api.web3philippines.org/api/directory?page=${
        page - 1
      }&size=${size}`,
      options,
    );

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

export interface DirectoryInfo {
  id: string;
}

// function getDirectoryInfo(id: string) {
//   try {
//     return directories.find((d) => d.id === id);
//   } catch (error: unknown) {
//     console.error("getDirectoryInfo error", error);
//   }
// }

// export function useGetDirectoryInfo({ id }: DirectoryInfo) {
//   return useQuery(["directory-info", id], () => getDirectoryInfo(id));
// }
