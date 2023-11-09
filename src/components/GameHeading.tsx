import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const head = `${gameQuery.genre ? gameQuery.genre.name : ""} ${
    gameQuery.platform ? gameQuery.platform.name : ""
  } ${
    gameQuery.searchText ? "Search results for " + gameQuery.searchText : ""
  }`;
  return <Heading as="h1">{head}</Heading>;
};

export default GameHeading;
