import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import peta from "../../assets/images/map.png";

const Map = () => {
  return (
    <Stack pt="14" px="12" textAlign="center" spacing="4">
      <Heading fontSize={{ base: "4xl", md: "5xl" }}>Jump Ahead Through Global Maps</Heading>
      <Heading fontSize={{ base: "md", md: "2xl" }} color="gray.600">Discover your destinations around the world</Heading>
      <Image src={peta} />
    </Stack>
  );
};

export default Map;
