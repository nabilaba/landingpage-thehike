import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import favicon from "../../favicon.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const dataNav = [
  {
    title: "Place to stay",
  },
  {
    title: "Experience",
  },
  {
    title: "Contact",
  },
  {
    title: "Blog",
  },
  {
    title: "Pricing",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavLink = ({ children }) => (
    <Link
      as={Box}
      w="full"
      p="4"
      rounded="lg"
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );

  return (
    <>
      <Box py="4" pos="fixed" top="0" left="0" zIndex="3" bg="#2CB7BC" w="full">
        <Container maxW="7xl">
          <HStack spacing={4} justifyContent="space-between">
            <HStack alignItems="center">
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                variant="ghost"
                _hover={{
                  bg: "transparent",
                }}
                _active={{
                  bg: "transparent",
                }}
              />
              <Image src={favicon} alt="The Hike" boxSize="38px" />
              <Text fontSize="lg" fontWeight="bold">
                the hike
              </Text>
            </HStack>

            <HStack
              spacing={6}
              alignItems="center"
              display={{ base: "none", md: "flex" }}
            >
              {dataNav.map((item, index) => (
                <Link
                  key={index}
                  fontSize="lg"
                  fontWeight="bold"
                  color={index === 0 ? "black" : "gray.600"}
                  _hover={{
                    color: "black",
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </HStack>

            <Button colorScheme="teal" w="125px">
              Sign Up
            </Button>
          </HStack>
        </Container>
      </Box>

      {isOpen && (
        <Stack
          spacing="0"
          display={{ md: "none" }}
          pos="fixed"
          top="16"
          left="5"
          right="5"
          zIndex="3"
          bg="white"
          rounded="lg"
        >
          {dataNav.map((item, index) => (
            <NavLink key={index}>{item.title}</NavLink>
          ))}
        </Stack>
      )}
    </>
  );
};

export default Navbar;
