import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { CalendarIcon, StarIcon } from "@chakra-ui/icons";

const CardFeatures = ({ image, location, name, rate, star, date }) => {
  return (
    <Box bg="white" textAlign="start" rounded="lg">
      <Image
        src={image}
        alt="preview"
        roundedTopLeft="lg"
        roundedTopRight="lg"
        w="full"
      />
      <Stack p="5" spacing="4">
        <Box>
          <Text>{location}</Text>
          <Heading fontSize="xl">{name}</Heading>
        </Box>
        <HStack>
          <Box bg="teal" rounded="lg" p="2" textAlign="center" color="white">
            {rate}
          </Box>
          {Array(parseInt(star))
            .fill(0)
            .map((item, index) => (
              <Icon key={index} as={StarIcon} color="yellow.500" />
            ))}
        </HStack>
        <HStack
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          p="2"
          w="max-content"
        >
          <Icon as={CalendarIcon} />
          <Text>{date}</Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default CardFeatures;
