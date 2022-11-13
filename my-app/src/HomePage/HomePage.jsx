import React,{useRef, useEffect} from "react"
import { Box,Flex,Button,Grid,Spacer,Image,Text,Heading } from "@chakra-ui/react"
import Consultant from "./Consultant";
import Doctors from "./Doctors";
import Footer from "../Components/Footer";
// import Add from "./Add"
import Navbar from "../Components/Navbar";
import UpperNavbar from "../Components/UpperNavbar";
import NewSkin from "./NewSkin";
import Skin from "./Skin";
import SkinCare from "../Pages/SkinCare";
const HomePage = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
    return(
       <div className="video-sec">
        <UpperNavbar />
        <Navbar />
            <Flex  bg='#8a5080' justifyContent={"space-evenly"} alignItems={"center"}>
                <Box width={"30%"}  height={"450px"} color={"#ffffff"}  textAlign={"left"} lineHeight={"38.1px"}>
                    <Heading width={"180%"}>The best hair of your life <br /> starts at the root</Heading>
                    <br />
                    <Text>Rooted in skincare science, our Haircare Regimens, Smooth+ and Volume+ re-energize the scalp for healthier, stronger more beautiful hair, instantly and over time.</Text>
                    <Button bg={"#ffffff"} color="black">SHOP NEW R+F HAIRCARE</Button>
                </Box>
                <Box width="" >
              
                    <video
                        style={{  width: "600px", margin: "0 auto", height:"600px"}}
                        autoPlay
                        loop
                        muted
                        controls
                        alt="All the devices"
                        src="https://www.rodanandfields.com/en-us/_ui/videos/dynamicupload/comp_00171016-mobile-en-us-15820196249630-1666850649394.mp4"
                        ref={videoEl}
                     />
                </Box>
            </Flex>
            <Flex display={"flex"} justifyContent={"space-around"} marginTop={"40px"}>
                <Image src="https://www.rodanandfields.com/en-us/medias/HOL-Hair-Smooth-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTY2MjZ8aW1hZ2UvanBlZ3xoYzAvaDExLzE1ODg5Mzg4NjM0MTQyLmpwZ3w1ZTMxZWJjNWE4YmQ2ZmM0NjEzMWQzOGVmYzA5MmIyNGRkOTAwMmJmNzQ4Y2M0ZjNhN2MwYTU5NTY5MWU4ZDA2" 
                alt="first-image"
                boxSize={"300px"}
                height={"400px"}
                borderRadius={"20px"}
                />
                <Image src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-1-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTQ4ODR8aW1hZ2UvanBlZ3xoNWEvaGQwLzE1ODg5Mzg4Njk5Njc4LmpwZ3w1ZTNjODZhYzM0NTM1N2M4MGViYjYyMWRkZmYyNDU3MGU5MDdkZGQxZDIyZWI4ZmQwYmI4ZjVjOGRmOTg0NDdl" 
                alt="first-image"
                boxSize={"300px"}
                height={"400px"}
                borderRadius={"20px"}
                />
                <Image src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-2-HP-Module-US2.jpg?context=bWFzdGVyfHJvb3R8NjgyMzV8aW1hZ2UvanBlZ3xoNzcvaGEzLzE1ODg5Mzg4NzY1MjE0LmpwZ3xjMWM0YWNhZjIyMjg2OTgwODA5MzgyOWNlYzc5OTE5MDBhNjZiYWIzYTQ2NDI5ZTRmMTZjNmJhOTBjNTVmOGJm" 
                alt="first-image"
                boxSize={"300px"}
                height={"400px"}
                borderRadius={"20px"}
                />
            </Flex>
            <Flex display={"flex"} justifyContent={"space-around"} marginTop={"60px"}>
                <Image src="https://www.rodanandfields.com/en-us/medias/Skincare.jpg?context=bWFzdGVyfHJvb3R8MTQwMzU3fGltYWdlL2pwZWd8aDI3L2hkZS8xNTg4OTM4ODgzMDc1MC5qcGd8YTNiNTNmYTgzZmRjMzM5MzYwYjNhYjAwYTg3MDE1MzI3MTNhYzI4ZjUyZTBhM2VkNmUxMWFiOWY3NmQyNDgyZQ" 
                alt="first-image"
                boxSize={"300px"}
                height={"600px"}
                width={"400px"}
                borderRadius={"20px"}
                />
                <Image src="https://www.rodanandfields.com/en-us/medias/Haircare.jpg?context=bWFzdGVyfHJvb3R8MjAwMzMzfGltYWdlL2pwZWd8aDgzL2hlZC8xNTg4OTM4ODg5NjI4Ni5qcGd8NjdjMDBiNTU1MTgwMTg2Mzg5NWEwNGM2ZTc2ZTQyNDE5ODJjYWVkNGYyM2M4ZWYxM2ZhODcxMThlNDI4YjdkOA" 
                alt="first-image"
                boxSize={"300px"}
                height={"600px"}
                width={"400px"}
                borderRadius={"20px"}
                />
            </Flex>
        {/* <NewSkin /> */}
        <Skin />
      <Consultant />
      <Doctors />  
      <Footer/> 
      {/* <SkinCare /> */}
       </div>
    )
    
}

export default HomePage
