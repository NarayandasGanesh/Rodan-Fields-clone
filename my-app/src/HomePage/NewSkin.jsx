import React from 'react'
import {Box, Grid, Flex, Image,Heading, Text} from "@chakra-ui/react";
import {skin} from "./data"
const NewSkin = () => {
  return (
    <>
    <div style={{display:"flex"}}>
        {skin.map((e) => (
            <Box display={"flex"}>
                <Flex display={"flex"} justifyContent={"space-around"} marginTop={"40px"} border={"1px solid red"}>
                    <Image src={e.productimage} alt="img" width={"40px"} display={"flex"} />
                        <Heading>{e.title}</Heading>
                        <Text>{e.description}</Text>
                </Flex>
            </Box>
        ))}
    </div>
    </>
  )
}

export default NewSkin
