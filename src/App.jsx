import { Box, Image } from "@chakra-ui/react";
import Statistics from "./components/Statistics";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";
import Features from "./components/Features";
import img1 from "./assets/images/hero/image1.png";
import img2 from "./assets/images/hero/image2.png";
import img3 from "./assets/images/hero/image3.png";
import img4 from "./assets/images/hero/image4.png";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <Box>
      <Box position="relative">
        <Box
          position="absolute"
          zIndex="-1"
          height="90%"
          width="full"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          top="0"
          left="0"
          bgGradient="linear-gradient(to bottom, #2CB7BC 10%, #6EC2B91A 100%)"
        />
        <Image
          position="absolute"
          zIndex="-1"
          right="0"
          top="0"
          mt="50px"
          src={img2}
          alt="image2"
          display={{ base: "none", md: "block" }}
        />
        <Image
          position="absolute"
          zIndex="-1"
          left="0"
          top="0"
          mt="150px"
          src={img1}
          alt="image1"
          display={{ base: "none", md: "block" }}
        />
        <Image
          position="absolute"
          zIndex="-1"
          left="0"
          bottom="0"
          mb="400px"
          src={img3}
          alt="image3"
          display={{ base: "none", md: "block" }}
        />
         <Image
          position="absolute"
          zIndex="-1"
          right="0"
          bottom="0"
          mb="150px"
          src={img4}
          alt="image4"
          display={{ base: "none", md: "block" }}
        />
        <Navbar />
        <Hero />
      </Box>
      <Sponsors />
      <Statistics />
      <Features />
      <Map />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default App;
