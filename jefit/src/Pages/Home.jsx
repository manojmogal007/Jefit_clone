import Navbar from "../Component/Navbar";
import {Image,Box,Spacer,Text,Flex, Select, Center,Button,VStack, Heading, background, Stack,Container} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import Footer from "../Component/Footer";
import AllRoutes from '../Component/AllRoutes';

const nohover={color:'white', bg:'#39B7FF'}
const hstyle={color:'#39B7FF', bg:'white',border:'1px solid #39B7FF'}
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
            <Box  mt={100}><Heading size='2xl'>JEFIT COVERS ALL OF YOUR WORKOUT NEEDS</Heading></Box>
            <Box w='full' mt={100} >
                <Flex>
                <Center>
                <Box w='40%' >
                    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png'></Image>
                </Box>
                <Box w='40%' sx={{textAlign:'left'}}>
                    <Text fontSize='20px' sx={{fontWeight:'bold',color:'gray'}}>WORKOUT TRACKING</Text>
                    <Heading size='2xl' mt={10}>PERSONALIZE YOUR WORKOUT PLANS</Heading>
                    <Stack spacing={3}>
                    <Text fontSize='xl' mt={65} sx={{fontWeight:'500'}}>1400+ exercises with instructions</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Pro-designed workout plans</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Support custom exercises</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Flexible workout planning tool</Text>
                    </Stack>
                    <Link to='/signup'>
                    <Button mt={7} w={220} p={6} borderRadius='full' sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>JOIN NOW</Button>                
                    </Link>
                    </Box>
                </Center>
                </Flex> 
            </Box>
            <Box w='full' mt={100} >
                <Flex>
                <Center>
                <Box w='40%' sx={{textAlign:'left'}}>
                    <Text fontSize='20px' sx={{fontWeight:'bold',color:'gray'}}>SMART WATCH INTEGRATION</Text>
                    <Heading size='2xl' mt={10}>TRAIN & LOG SEAMLESSLY IN GYM AND HOME</Heading>
                    <Stack spacing={3}>
                    <Text fontSize='xl' mt={65} sx={{fontWeight:'500'}}>Log training with one-click</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Control rest time easily</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Available on mobile and watch</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Audio and video instructions</Text>
                    </Stack>
                    <Link to='/signup'>
                    <Button mt={7} w={220} p={6} borderRadius='full' sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>JOIN NOW</Button>                
                    </Link>                    </Box>
                <Box w='40%' >
                    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png'></Image>
                </Box>
                
                </Center>
                </Flex>
            </Box>
            <Box w='full' mt={100} >
                <Flex>
                <Center>
                <Box w='40%' >
                    <Image src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web3.png'></Image>
                </Box>
                <Box w='40%' sx={{textAlign:'left'}}>
                    <Text fontSize='20px' sx={{fontWeight:'bold',color:'gray'}}>PROGRESS TRACKING</Text>
                    <Heading size='2xl' mt={10}>VIEW PROGRESS & REACH NEW LIMITS</Heading>
                    <Stack spacing={3}>
                    <Text fontSize='xl' mt={65} sx={{fontWeight:'500'}}>Track workout time and weightlifting</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Set target muscles and body measurements</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Understand muscle recovery rate</Text>
                    <Text fontSize='xl' sx={{fontWeight:'500'}}>Set 1RM goals and refresh records</Text>
                    </Stack>
                    <Link to='/signup'>
                    <Button mt={7} w={220} p={6} borderRadius='full' sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>JOIN NOW</Button>                
                    </Link>                
                    </Box>
                </Center>
                </Flex>
            </Box>
            <Box  mt={100}><Heading size='2xl'>PLANS THAT SUIT YOU BEST</Heading></Box>
            <Box mt={20} pb={40} w='full' sx={{display:'flex',justifyContent:'center'}}>
                    <Box mx={2} pb={100} w='24%' bg='#696969' borderRadius={5}>
                        <Box ml={10} >
                            {/* <Box mt={40} w={16} h={16} borderRadius='full' bg='white' sx={{border:'1pxsolid red',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Image w={7} src='https://purepng.com/public/uploads/large/purepng.com-black-starstargeometricallydecagonconcavestardomclipartblack-1421526502766dkgv4.png'></Image>
                            </Box> */}
                            <Box mt={40}  w='80%' sx={{textAlign:'left',color:'white'}}>
                                <Heading size='2xl'>FREE</Heading>
                                <Stack spacing={3} mt={5}>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Basic</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Ads supported</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Flexible workout planner</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Top-notch log tracker</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>1400+ exercises library</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Body stats tracking tools</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Support interval training</Text>
                                </Stack>
                                <Button mt={7} w={200} p={4} borderRadius='full' sx={{ bg: '#696969',color:'white',border:'1px solid white' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid white' }}>JOIN NOW</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box mx={2} pb={100} w='24%' bg='#696969' borderRadius={5}>
                        <Box ml={10}>
                            <Box mt={40} w='80%' sx={{textAlign:'left',color:'white'}}>
                                <Heading size='2xl'>Elite Monthly</Heading>
                                <Stack spacing={3} mt={5}>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>$12.99/month</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>All BASIC plan features</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>No ads</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Comprehensive training reports</Text>   
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Advanced tracking features</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Compare records with friends</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Exercise tips from JEFIT experts</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Premium workout plans</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>More...</Text>
                                </Stack>
                                <Button mt={7} w={180} p={4} borderRadius='full' sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>LEARN MORE</Button>
                                <Text mt={10} fontSize='20px' sx={{fontWeight:'bold',color:'gray'}}>$12.99 billed / month</Text>
                            </Box>
                        </Box>
                    </Box> 
                    <Box mx={2} pb={100} w='24%' bg='#696969' borderRadius={5}>
                        <Box ml={10}>
                            <Box mt={40} w='80%' sx={{textAlign:'left',color:'white'}}>
                                <Heading size='2xl'>Elite Monthly</Heading>
                                <Stack spacing={3} mt={5}>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>$5.83/month</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>All BASIC plan features</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>No ads</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Comprehensive training reports</Text>   
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Advanced tracking features</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Compare records with friends</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Exercise tips from JEFIT experts</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>Premium workout plans</Text>
                                <Text fontSize='xl' sx={{fontWeight:'500'}}>More...</Text>
                                </Stack>
                                <Button mt={7} w={180} p={4} borderRadius='full' sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>LEARN MORE</Button>
                                <Text mt={10} fontSize='20px' sx={{fontWeight:'bold',color:'gray'}}>Save 55%, $69.99 billed / year</Text>
                            </Box>
                        </Box>
                    </Box>   
            </Box>
            <Box w='full' pt={150} pb={20} bg='#F5FFFA'>
                <Box w='80%' m='auto'>
                <Heading size='2xl'>WANT TO BUILD YOUR OWN WORKOUT PLAN?</Heading>
                <Text fontSize='24px' mt={10} sx={{fontWeight:'400'}}>Customize your workout plan with over 3000 free exercises in Jefit Workout Plan Builder. And easily share with friends.</Text>
                <Button mt={11} w={400} p={6} borderRadius='full' fontSize={25} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>CREATE WORKOUT PLAN</Button>
                </Box>
            </Box>
            <Box>
                <Footer/>
            </Box>
           
        </Box>
        {/* <Box> <AllRoutes/></Box> */}
        
        
        
    </div>
)
}