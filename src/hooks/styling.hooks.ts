import { useMediaQuery } from "@chakra-ui/react";

export function useIsMedium() {
  const [isMedium] = useMediaQuery("(min-width: 768px)");
  return isMedium;
}
