import { Heading, HStack, Image, Stack } from "@chakra-ui/react";
import ski_resort from "../../assets/images/cardfeatures/ski_resort.png";
import mount_everest from "../../assets/images/cardfeatures/mount_everest.png";
import charming_village from "../../assets/images/cardfeatures/charming_village.png";
import CardFeatures from "../CardFeatures";
import img1 from "../../assets/images/features/image1.png";
import img2 from "../../assets/images/features/image2.png";

const dataCardFeatures = [
  {
    image: ski_resort,
    location: "Switzerland",
    name: "Ski Resort",
    rate: "4.8",
    star: "5",
    date: "12 April 2022",
  },
  {
    image: mount_everest,
    location: "Alaska",
    name: "Mount Everest",
    rate: "4.6",
    star: "5",
    date: "12 April 2022",
  },
  {
    image: charming_village,
    location: "Austria",
    name: "Charming Village",
    rate: "4.3",
    star: "5",
    date: "12 April 2022",
  },
];

const Features = () => {
  return (
    <Stack
      bg="#BEF1F3"
      pt="14"
      pb="48"
      px="6"
      align="center"
      textAlign="center"
      spacing="4"
      position="relative"
    >
      <Image
        position="absolute"
        zIndex="1"
        left="0"
        top="0"
        src={img1}
        alt="image1"
      />
      <Image
        position="absolute"
        zIndex="1"
        right="0"
        bottom="0"
        src={img2}
        alt="image2"
      />
      <Heading fontSize={{ base: "4xl", md: "5xl" }} zIndex="2">
        Let's Travelling and Hit The Trip
      </Heading>
      <Heading fontSize={{ base: "md", md: "2xl" }} color="gray.600">
        Discover and book the trip virtually
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
        w="full"
      >
        {dataCardFeatures.map((item, index) => (
          <CardFeatures key={index} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Features;
