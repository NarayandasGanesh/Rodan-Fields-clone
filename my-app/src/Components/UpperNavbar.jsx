import React, { useEffect, useState } from "react";
import { Box, Text, Icon, Link, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsPerson, BsBag } from "react-icons/bs";
import rodananlogo from "./Images/rodanan.png";
import usaicon from "./Images/usaflag.png";


import {Link as RouterLink} from "react-router-dom"
const UpperNavbar = () => {
  return (
    <Box
      h={"70px"}
      w={"100%"}
      borderBottom="1px solid black"
      display={"flex"}
      justifyContent={"space-between"}

      backgroundColor={"white"}
    >
      <Box w={"200px"} marginTop={"20px"} marginLeft={"30px"}>
        <Link fontSize={"14px"}>FIND A CONSULTANT</Link>
      </Box>
      <Box w={"170px"} marginTop={"25px"}>
        <Image src={rodananlogo} width={"160px"} h={"18px"} cursor={"pointer"}></Image>
      </Box>
      
      <Box
        display={"flex"}
        w={"260px"}
        justifyContent={"space-between"}
        marginTop={"20px"}
        marginRight={"20px"}
      >
      
        <Box display={"flex"}>
          <Text fontSize={"14px"}>
            <Link>Search</Link>
          </Text>
          <SearchIcon marginTop={"3px"} w={"15px"} h={"15px"}></SearchIcon>
        </Box>
        
        <Box display={"flex"}>

          <Text fontSize={"14px"}>

          </Text>
          <Icon as={BsPerson} w={"18px"} h={"18px"} marginTop={"2px"} />
        </Box>
        <RouterLink to={ "/bagReview"}><Box>
          <Icon as={BsBag} w={"20px"} h={"20px"}></Icon> 
        </Box>
        </RouterLink>
        <Box display={"flex"} w={"75px"} justifyContent={"space-between"}>
          <Image src={usaicon} w={"18px"} h={"18px"} marginTop={"4px"}></Image>
          <Text fontSize={"14px"}>
            <Link>England</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UpperNavbar;