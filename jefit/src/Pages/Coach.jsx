import {Box,Text,Heading,Image, Button, Flex} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


export  default function Coach(){
    return(
        <Box>
        <Box bg='#F0FFF0' pb={100}>
            <Box><Navbar/></Box>
            {/* background box */}
            <Box w='80%' bg='white' m='auto' mt={100} pt={1}>
            <Box w='80%' m='auto'  pb={100}>
                <Box w='100%' m='auto' mt={130}>
                    <Heading size='3xl' >Personal Coach Mode</Heading>
                    <Text fontSize={20} fontFamily='500' mt={10} lineHeight={10}>Expand your personal training business with Personal Coach Mode. Reduce your average time spent per client by connecting with fitness savvy clients remotely to provide personal workout plans, track their workout progress, and provide feedback.</Text>
                    <Link to='/login'>
                        <Button mt={16} w={300} p={5} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START 14-DAY FREE TRIAL</Button>
                    </Link>
                </Box>
                <Box w='100%' m='auto' mt={120}>
                    <Flex>
                        <Box w='50%' textAlign='left' lineHeight='46px'>
                            <Text fontSize={23} fontWeight='500'>Lower Your Time Spent On Each Client</Text>
                            <Text fontSize={23} fontWeight='400' color='gray'>Quickly and efficiently coach clients via JEFIT allowing you to expand your client base without increasing your time invested.</Text>
                            <Text fontSize={23} fontWeight='500'>Easily Build and Sell Workout Plans</Text>
                            <Text fontSize={23} fontWeight='400' color='gray'>Develop and distribute your premium workout plan with JEFIT’s robust exercise and workout plan libraries</Text>
                            <Text fontSize={23} fontWeight='500'>Build Your Brand</Text>
                            <Text fontSize={23} fontWeight='400' color='gray'>Build a profile that highlights your experience, client results, or certifications and attracts future clients.</Text>
                            <Link to='/login'>
                            <Button mt={16} w={170} p={6} borderRadius='none' fontSize={16} _hover={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} sx={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START HERE</Button>
                            </Link>
                        </Box>
                        <Box w='50%' sx={{display:'flex',alignItems:'center'}}>
                            <video autoplay="autoplay" controls loop w='100%'>
                                <source  src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov" type="video/mp4"/>
                            </video>
                        </Box>
                    </Flex>
                </Box>
                <Box m='auto' mt={170}>
                    <Flex>
                        <Box w='50%' textAlign='left'>
                            <Heading size='3xl' color='#39B7FF'>Client Management</Heading>
                            <Text mt={10} fontSize='38px' fontWeight={500}>Coach More Clients in Less Time</Text>
                            <Box lineHeight={10} mt={10}>
                                <Text fontSize={20}>· Easily onboard new clients with JEFIT's robust online routine building and distribution system.</Text>
                                <Text fontSize={20}>· JEFIT's premium exercise library coaches clients during their workout with exercise instructions and HD video demonstrations.</Text>
                                <Text fontSize={20}>· Limit time spent coaching with advanced analytics, insights, and automated notifications from clients logging their workouts.</Text>
                                <Text fontSize={20}>· JEFIT's feature-rich in-app messenger makes form reviews or workout plan updates quick and simple.</Text>
                                <Text fontSize={20}>· Avoid conflicting with geographic based non-compete clauses by expanding your business online.</Text>
                                <Link to='/login'>
                                <Button mt={16} w={200} p={6} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START EXPLORING</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box w='50%'>
                            <video autoplay="autoplay" controls loop w='100%'>
                                    <source  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/2remind.mov" type="video/mp4"/>
                            </video>
                        </Box>
                    </Flex>
                </Box>
                <Box m='auto' mt={170}>
                    <Flex>
                        <Box w='50%'>
                            <video autoplay="autoplay" controls loop width='80%'>
                                    <source  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/1.mov" type="video/mp4"/>
                            </video>
                        </Box>
                        <Box w='50%' textAlign='left'>
                            <Heading size='3xl' color='#39B7FF'>Premium Workout Plans</Heading>
                            <Text mt={10} fontSize='38px' fontWeight={500}>Easily personalize your workout plans</Text>
                            <Box lineHeight={10} mt={10}>
                                <Text color='gray' fontSize={20}>JEFIT's extensive exercise library makes updating or personalizing workout plans a breeze.</Text>
                                <Text color='gray' fontSize={20}>JEFIT teaches your clients how to perform each exercise with detailed instructions and an HD video mid-workout.</Text>
                                <Text color='gray' fontSize={20}>Sell your services as a coach or just sell your premium workout plan - diversify your types of clients.</Text>
                                <Link to='/login'>
                                <Button mt={16} w={200} p={6} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START EXPLORING</Button>
                                </Link>
                            </Box>
                        </Box>    
                    </Flex>
                </Box>
                <Box m='auto' mt={170}>
                    <Flex>
                        <Box w='50%' textAlign='left'>
                            <Heading size='3xl' color='#39B7FF'>Coach Branding</Heading>
                            <Text mt={10} fontSize='38px' fontWeight={500}>Build a reputation & let new clients come to you.</Text>
                            <Box lineHeight={10} mt={10}>
                                <Text fontSize={20}>· Be one of the first Coaches on JEFIT and start building your reputation first</Text>
                                <Text fontSize={20}>· Find time efficient clients as JEFIT users require less coaching than your average client.</Text>
                                <Text fontSize={20}>· Display your client successes and your certifications on your profile.</Text>
                                <Link to='/login'>
                                <Button mt={16} w={200} p={6} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START EXPLORING</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box w='50%'>
                            <video autoplay="autoplay" controls loop w='100%'>
                                    <source  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/3profile.mov" type="video/mp4"/>
                            </video>
                        </Box>
                    </Flex>
                </Box>
                <Box w='100%' mt={180}>
                        <Flex>
                            <Box w='35%' display='flex' alignItems='center'>
                                <Image w='100%' borderRadius='full' src='https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex-2048x2048.png'></Image>
                            </Box>
                            <Box ml={5} w='65%' textAlign='left'>
                                <Heading size='4xl'>Start Your Free Trial</Heading>
                                <Text mt={10} fontSize={35}>After the free trial,</Text>
                                <Box lineHeight={10}>
                                    <Text color='gray' fontSize={20}>$19.99/month</Text>
                                    <Text color='gray' fontSize={20}>You decide what to charge your clients and keep the rest!</Text>
                                    <Text color='gray' fontSize={20}>For gym or studio, please contact us for bulk pricing at product@jefit.com ​</Text>
                                    <Link to='/login'>
                                    <Button mt={16} w={200} p={6} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START EXPLORING</Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>
                </Box>
                <Box w='100%' mt={100} h={400} sx={{display:'flex',alignItems:'center'}} bg='#E0FFFF'>
                    <Box w='60%' m='auto'>
                        <Heading size='2xl'>Our Goal Is To Help You Succeed</Heading>
                        <Text mt={10}>Contact us at product@jefit.com for any questions or feedback</Text>
                        <Link to='/login'>
                        <Button mt={10} w={300} p={6} borderRadius='none' fontSize={16} sx={{ bg: '#39B7FF',color:'white',border:'1px solid #39B7FF',fontWeight:'bold' }} _hover={{ bg: 'white',color:'#39B7FF',border:'1px solid #39B7FF' }}>START 14-DAY FREE TRIAL</Button>
                        </Link>
                    </Box>
                </Box>
                
            </Box>
            
            </Box>
            
        </Box>
        <Box >
        <Footer/>
    </Box>
    </Box>
    )
}