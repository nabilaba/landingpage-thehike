import { Heading, HStack, Image, Stack } from "@chakra-ui/react";
import statistics from "../../assets/images/statistics.png";

const dataFeat = [
  {
    amount: "9",
    title: "Years Experience",
  },
  {
    amount: "350",
    title: "Fancy Destinations",
  },
  {
    amount: "70K+",
    title: "Loyal Customers",
  },
];
const Statistics = () => {
  return (
    <Stack direction={{ base: "column-reverse", xl: "row" }} spacing={8} align="center" py="24" px="6">
      <Image src={statistics} alt="Statistics" />
      <Stack spacing={10}>
        <Heading fontSize={{ base: "5xl", lg: "6xl"}}>Check for Our Availability Here</Heading>
        <Heading fontSize="lg" color="gray.600">
          We will always have the sweetest rate
        </Heading>
        <HStack justifyContent={"space-between"} w="full">
          {dataFeat.map((item, index) => (
            <HStack key={index} spacing={2}>
              <Heading fontSize="3xl">{item.amount}</Heading>
              <Heading fontSize="sm" maxW="100px">{item.title}</Heading>
            </HStack>
          ))}
        </HStack>
      </Stack>
    </Stack>
  );
};

export default Statistics;
