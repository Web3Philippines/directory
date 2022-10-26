import { useEffect, useState } from "react";

function useMediaQuery(mediaQuery: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(mediaQuery));

  function handleChange() {
    setMatches(getMatches(mediaQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQuery);

    // Triggered at the first client-side load and if query changes
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return matches;
}

export default useMediaQuery;
