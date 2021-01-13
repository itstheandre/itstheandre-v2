import { useMediaQuery } from "@solx/use-media-query";

/**
 * This hook is just going to check if we are above the medium size that chakra uses internally
 */
export function useIsMedium() {
  const [isMedium] = useMediaQuery("(min-width: 768px)");
  return isMedium;
}

/**
 * This hook is just going to check if we are above the large size that chakra uses internally
 */
export function useIsLarge() {
  const [isLarge] = useMediaQuery("(min-width: 1024px)");
  return isLarge;
}
