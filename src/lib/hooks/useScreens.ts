import useMediaQuery from "./useMediaQuery";

export function useIsMobileScreen() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return isMobile;
}

export function useIsTabletScreen() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return isTablet;
}

export function useIsDesktopScreen() {
  const isTablet = useMediaQuery("(min-width: 1280px)");
  return isTablet;
}
