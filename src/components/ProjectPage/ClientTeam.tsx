import { Grid, GridItem, Box, Heading } from "@chakra-ui/react";
import { NextLink } from "..";
import { useIsMedium } from "../../hooks";
import { IMember } from "../../shared/types";
import { TTMonoBold } from "../../theme/utils/fonts";

interface ClientTeamProps {
  url: string;
  title: string;
  team: IMember[];
}

export function ClientTeam({ url, title, team }: ClientTeamProps) {
  const isMedium = useIsMedium();
  const teamMembers = team.map((el, i, a) => {
    if (i === a.length - 1) {
      return (
        <>
          {" "}
          <NextLink href={el.url}>{el.name}</NextLink>
        </>
      );
    }
    return (
      <>
        {" "}
        <NextLink href={el.url} isExternal>
          {el.name}
        </NextLink>
        ,{" "}
      </>
    );
  });

  const rows = team.length ? "auto auto 1fr" : "1fr";

  const gridTemplate = isMedium
    ? { gridTemplateRows: rows, m: 0, rowGap: "6" }
    : { gridTemplateColumns: "1fr 1fr", mt: 6, mx: { xl: "7em" } };

  return (
    <Grid {...gridTemplate}>
      <GridItem>
        <Box>
          <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
            Client
          </Heading>
          <NextLink href={url}>{title}</NextLink>
        </Box>
      </GridItem>
      {teamMembers.length ? (
        <GridItem>
          <Box>
            <Heading as="h6" mb="1" fontSize="sm" fontFamily={TTMonoBold}>
              Team
            </Heading>
            {teamMembers}
          </Box>
        </GridItem>
      ) : null}
    </Grid>
  );
}
