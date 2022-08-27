import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <Box textAlign="center" pt="32">
      <VStack spacing={6}>
        <Heading
          maxW={{ base: "sm", md: "xl" }}
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          Enjoy Wonderfull Experience On Winter
        </Heading>
        <Heading
          maxW={{ base: "sm", md: "md" }}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.600"
        >
          Find popular destination and staycation around the world
        </Heading>

        <HStack spacing={4}>
          <Button colorScheme="teal" px="8" py="6">
            Be Our Guests
          </Button>
          <Link px="8" py="6" textDecor="underline" color="gray.600">
            Need a help?
          </Link>
        </HStack>
      </VStack>

      <Box px="6">
        <Image src={hero} alt="The Hike" />
      </Box>
    </Box>
  );
};

export default Hero;
