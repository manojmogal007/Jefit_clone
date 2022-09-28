import Navbar from "../Component/Navbar";
import {Image,Box,Spacer,Text,Flex, Select, Center,Button,VStack, Heading, background} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
export default function Home(){

return(
    <div>
        <Box>
            <Box>
                <Navbar/>
            </Box>

            <Box>
                <Box bgColor='#00008B' pb={50}>
            <Flex>
                <Box w='50%' ml={160}  mt='130px' >
                    {/* <VStack> */}
                        <Heading sx={{textAlign:'left',color:'white'}} size='3xl'>
                            MANAGE & TRACK
                            ALL YOUR WORKOUTS
                            IN ONE PLACE
                        </Heading>
                        <Heading pt={10} size='lg'sx={{textAlign:'left',color:'white'}}>
                        #1 Popular Workout Tracking Platform
                            Stay Strong Together
                        </Heading>
                        <Box>
                        <Flex>
                            <Box mr={4} >
                                <a href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"><Image my={6} src='https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp'></Image></a>
                                <a href="https://apps.apple.com/app/apple-store/id449810000"><Image src='https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp'></Image></a>
                            </Box>
                            <Box>
                                <Image mt={5} src='https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp'></Image>
                            </Box>
                        </Flex>
                        </Box>
                        <Box mt={14}>
                            <Flex>
                                <Box w={9} mx={5}>
                                    <a href='https://www.instagram.com/jefitapp/'>
                                <Image w='120%' borderRadius='full' src="https://tse2.mm.bing.net/th?id=OIP.dsWfftaewmVq_Jtw5SazXwHaHa&pid=Api&P=0"></Image>
                                </a>
                                </Box>
                                <Box w={9} mx={5}>
                                <a href="https://www.facebook.com/jefitapp/">
                                <Image borderRadius='full' src="https://tse2.mm.bing.net/th?id=OIP.3Oxbr3EA4nOuu7tutl7ZQwHaHO&pid=Api&P=0"></Image>
                                </a>
                                </Box>
                                <Box w={9} mx={5}>
                                <a href="https://twitter.com/jefitinc">
                                <Image borderRadius='full' src="https://tse1.mm.bing.net/th?id=OIP.h1oBSgoUjutWCHi0HgluKQHaHa&pid=Api&P=0"></Image>
                                </a>
                                </Box>
                                
                            </Flex>
                        </Box>
                    {/* </VStack> */}
                </Box>
                <Box w='50%'  mt='130px' mr={10}>
                    <Image src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.webp"></Image>
                </Box>
            </Flex>
            </Box>
            </Box>
        </Box>
        
    </div>
)
}