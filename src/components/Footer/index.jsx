import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Image,
  Wrap,
  IconButton,
} from "@chakra-ui/react";
import favicon from "../../favicon.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Container as={Stack} maxW={"6xl"} pt="24" pb="16" spacing="20">
      <Wrap spacingX={{ base: 2, lg: 24 }}>
        <Stack maxW={{ base: "auto", md: "325px" }}>
          <HStack spacing={1} alignItems="center">
            <Image src={favicon} alt="The Hike" boxSize="38px" />
            <Text fontSize="lg" fontWeight="bold">
              the hike
            </Text>
          </HStack>
          <Text>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself.
          </Text>
        </Stack>
        <Stack flex={1}>
          <ListHeader>About</ListHeader>
          <Link>Home</Link>
          <Link>Features</Link>
          <Link>FAQs</Link>
          <Link>Reviews</Link>
          <Link>Stories</Link>
        </Stack>
        <Stack flex={1}>
          <ListHeader>Privacy</ListHeader>
          <Link>Privacy</Link>
          <Link>Policy</Link>
          <Link>Payment</Link>
          <Link>Terms</Link>
        </Stack>
        <Stack flex={1}>
          <ListHeader>Contact Us</ListHeader>
          <Link>+01 234 567 8910 </Link>
          <Link>example@gmail.com</Link>
          <HStack pt="40px" spacing="3">
            <IconButton colorScheme="teal" size="sm" icon={<FaInstagram />} />
            <IconButton colorScheme="teal" size="sm" icon={<FaLinkedinIn />} />
            <IconButton colorScheme="teal" size="sm" icon={<FaFacebookF />} />
            <IconButton colorScheme="teal" size="sm" icon={<FaTwitter />} />
          </HStack>
        </Stack>
      </Wrap>
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        as={Stack}
        maxW={"6xl"}
        py={8}
        direction={{ base: "column", md: "row" }}
        justify={{ md: "space-between" }}
      >
        <Text>
          © Copyright 2022{" "}
          <Link
            href="https://github.com/nabilaba"
            target="_blank"
            fontWeight="bold"
          >
            nabilaba
          </Link>{" "}
          All rights reserved.
        </Text>
        <HStack spacing={6}>
          <Link>Contact Us</Link>
          <Link>Terms</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Footer;
