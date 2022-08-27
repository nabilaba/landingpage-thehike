import { HStack, Image, Link } from "@chakra-ui/react";
import tiket from "../../assets/images/sponsor/tiket.png";
import tokopedia from "../../assets/images/sponsor/tokopedia.png";
import gojek from "../../assets/images/sponsor/gojek.png";
import traveloka from "../../assets/images/sponsor/traveloka.png";
import ovo from "../../assets/images/sponsor/ovo.png";
import blibli from "../../assets/images/sponsor/blibli.png";
import dana from "../../assets/images/sponsor/dana.png";

const companiesImages = [tiket, tokopedia, gojek, traveloka, ovo, blibli, dana];

const Sponsors = () => {
  return (
    <HStack
      px={{ base: 2, lg: 12 }}
      py="6"
      justifyContent={{ base: "center", md: "center", xl: "space-between" }}
      flexWrap="wrap"
      spacing="5"
    >
      {companiesImages.map((img, index) => (
        <Link>
          <Image
            filter={"grayscale(100%)"}
            rounded={"full"}
            key={index}
            src={img}
            alt="company logo"
            w={{ base: "100px", md: "140px" }}
            _hover={{ filter: "grayscale(0%)" }}
          />
        </Link>
      ))}
    </HStack>
  );
};

export default Sponsors;
