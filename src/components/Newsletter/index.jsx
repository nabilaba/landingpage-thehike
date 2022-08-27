import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import newsletter from "../../assets/images/newsletter.png";
import img1 from "../../assets/images/newsletter/image1.png";
import img2 from "../../assets/images/newsletter/image2.png";

const Newsletter = () => {
  return (
    <Stack
      px={{ base: "6", lg: "10" }}
      py="24"
      direction={{ base: "column", lg: "row" }}
      spacing={4}
      align="center"
      pos="relative"
    >
      <HStack
        spacing="0"
        zIndex="-1"
        pos="absolute"
        w="full"
        bg="#BEF1F3"
        top={{ base: 12, lg: 200 }}
        left="0"
        bottom="0"
        right="0"
        justifyContent="space-between"
      >
        <Image pos="absolute" left="0" bottom="0" src={img1} alt="image1" />
        <Image
          pos="absolute"
          top="0"
          right="0"
          src={img2}
          alt="image2"
          h="full"
        />
      </HStack>
      <Stack pt={{ base: 0, lg: 200 }} spacing="8">
        <Heading fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}>
          We don’t do conventional. We do fun with our guests
        </Heading>
        <Heading
          fontSize={{ base: "lg", md: "3xl", xl: "4xl" }}
          color="gray.600"
        >
          Don’t miss out our newsletter, folks
        </Heading>
        <InputGroup size="lg">
          <Input
            pr="14.5rem"
            type="text"
            placeholder="Your email address"
            bg="white"
          />
          <InputRightElement width="14.5rem">
            <Button
              size="lg"
              colorScheme="teal"
              roundedTopLeft="none"
              roundedBottomLeft="none"
            >
              Subscribe Newsletter
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Image src={newsletter} alt="newsletter" />
    </Stack>
  );
};

export default Newsletter;
