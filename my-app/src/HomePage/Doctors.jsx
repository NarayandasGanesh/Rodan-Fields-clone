import FirstImage from "../Images/firstimage.png"
import Clinically from "../Images/clinically.png"
import Results from "../Images/results.png"
import {Box, Image, Heading, Text} from "@chakra-ui/react"
import Consultant from "./Consultant"

const Doctors = () => {
    return (
        <>
    
            <Box
        w={"100%"}
        h={"450px"}
        padding={"30px"}
        pt={"40px"}
        display={"flex"}
        justifyContent={"space-between"}
        backgroundColor={"#fcfcfc"}
      >
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={FirstImage}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
            borderRadius={"5px"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Derm-Designed
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              Dr. Katie Rodan + Dr. Kathy Fields founded R+F to give everyone
              access to life- changing skincare.
            </Text>
          </Box>

          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Meet Our Doctors
          </Text>
        </Box>
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={Clinically}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Clinically Tested
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              Our innovative formulas are tested in our lab and designed to work
              together to deliver real results.
            </Text>
          </Box>

          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Discover Multi-Med Therapy
          </Text>
        </Box>
        <Box
          width={"350px"}
          height={"350px"}
          textAlign={"center"}
          backgroundColor={"white"}
        >
          <Image
            src={Results}
            alt={"image not available"}
            w={"100%"}
            h={"48%"}
            borderRadius={"10px"}
          ></Image>
          <Heading
            fontFamily={"'Nanum Myeongjo', serif"}
            fontSize={"22px"}
            fontWeight={"400"}
            colorScheme={"#727272"}
            lineHeight={"1.2"}
            mt={"10px"}
            letterSpacing={"1px"}
            maxWidth={"none"}
          >
            Results Guaranteed
          </Heading>
          <Box width={"90%"} ml={"20px"} mt={"12px"}>
            <Text fontSize={"15px"} fontWeight={"480"}>
              See and feel the best skin of your life within 60 days or your
              money back. Even on empty bottles.
            </Text>
          </Box>
          <Text
            fontSize={"15px"}
            mt={"15px"}
            fontWeight={"550"}
            textDecoration={"underline"}
          >
            Our Money-Back Guarantee
          </Text>
        </Box>
      </Box>
     
      </>

    )
}

export default Doctors