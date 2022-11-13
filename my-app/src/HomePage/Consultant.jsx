import React from "react"
import {Box, Text, Button } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Skin from "../HomePage/Skin"
import NewSkin from "./NewSkin"
// import Skin from "./Skin"


const Consultant = () => {

    return (
        <>
        {/* <NewSkin/> */}
          {/* <Skin /> */}
        <Box w={"100%"} h={"180px"} backgroundColor={"#d8e0e6a7"} pt={"5px"} mt={"20px"}>
        <Box
          w={"78%"}
          h={"63%"}
          m={"auto"}
          mt={"35px"}
          display={"flex"}
          backgroundColor={"white"}
        >
          <Box w={"35%"} h={"100px"} paddingLeft={"90px"}>
            <Text
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"30px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"0.3px"}
              mt={"20px"}
            >
              Personalized Skincare
            </Text>
            <Text
              fontFamily={"'Nanum Myeongjo', serif"}
              fontSize={"30px"}
              fontWeight={"400"}
              colorScheme={"#222"}
              lineHeight={"1.2"}
              letterSpacing={"0.3px"}
              ml={"55px"}
            >
              Services
            </Text>
          </Box>
          <Box w={"30%"} h={"100px"} paddingLeft={"25px"}>
            <Text mt={"20px"} fontSize={"15px"} fontWeight={"550"}>
              • Customized recommendations
            </Text>
            <Text fontSize={"15px"} fontWeight={"550"}>
              • Learn more about our products
            </Text>
            <Text fontSize={"15px"} fontWeight={"550"}>
              • Enjoy ongoing skincare advice
            </Text>
          </Box>
          <Box w={"35%"} h={"100px"} paddingTop={"25px"} paddingLeft={"100px"}>
           <Link to="/become-a-consultant"> <Button
              backgroundColor={"white"}
              padding={"10px 25px 10px 25px"}
              letterSpacing={"0.5px"}
              fontWeight={"400"}
              border={"1px solid black"}
            >
              FIND A CONSULTANT
            </Button></Link>
          </Box>
        </Box>
      </Box>
      </>
    )
}
export default Consultant