import {
  Grid,
  GridItem,
  Box,
  Heading,
  Flex,
  ResponsiveValue,
} from "@chakra-ui/react";
import * as CSS from "csstype";
import { LayoutProps } from "framer-motion";
import { Fragment } from "react";
import { NextLink } from "..";
import { useIsMedium } from "../../hooks";
import { IMember } from "../../shared/types";
import { TTMonoBold } from "../../theme/utils/fonts";

interface ClientTeamProps {
  url: string;
  title: string;
  team: IMember[];
  d?: ResponsiveValue<CSS.Property.Display>;
}

export function ClientTeam({ url, title, team, d = "none" }: ClientTeamProps) {
  if (d === "none") {
    return null;
  }
  const myTeam = !team.length
    ? null
    : team.map((el, idx, a) => {
        if (idx === a.length - 1) {
          return (
            <NextLink href={el.url} key={el.url}>
              {el.name}
            </NextLink>
          );
        }
        return (
          <Fragment key={el.url}>
            <NextLink href={el.url}>{el.name}</NextLink>,{" "}
          </Fragment>
        );
      });

  return (
    <Box d={d}>
      <Flex
        flexDirection={{ base: "row", md: "column" }}
        mt={{ base: "6", md: "0" }}
        justify="space-between"
      >
        <Box>
          <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
            Client
          </Heading>
          <NextLink href={url}>{title}</NextLink>
        </Box>
        {myTeam && (
          <Box mt={{ md: "6" }}>
            <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
              Team
            </Heading>
            {myTeam}
          </Box>
        )}
      </Flex>
    </Box>
  );
  // const isMedium = useIsMedium();
  // const teamMembers = team.map((el, i, a) => {
  //   return (
  //     <NextLink key={el.url} href={el.url}>
  //       {el.name}
  //     </NextLink>
  //   );
  // });

  // const rows = team.length ? "auto auto 1fr" : "1fr";

  // const gridTemplate = isMedium
  //   ? { gridTemplateRows: rows, m: 0, rowGap: "6" }
  //   : { gridTemplateColumns: "1fr 1fr", mt: 6, mx: { xl: "7em" } };

  // return (
  //   <Grid {...gridTemplate}>
  //     <GridItem>
  //       <Box>
  //         <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
  //           Client
  //         </Heading>
  //         <NextLink href={url}>{title}</NextLink>
  //       </Box>
  //     </GridItem>
  //     {teamMembers.length ? (
  //       <GridItem>
  //         <Box>
  //           <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
  //             Team
  //           </Heading>
  //           {teamMembers}
  //         </Box>
  //       </GridItem>
  //     ) : null}
  //   </Grid>
  // );
}
