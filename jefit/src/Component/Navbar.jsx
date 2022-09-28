import {Image,Box,Spacer,Text,Flex, Select, Center,Button,VStack, Heading} from '@chakra-ui/react'
import Dropdown from './Dropdown'
import {Link} from 'react-router-dom'



const app=['Workout App (iOS)','Workout App (Android)']
const plan=['Pro-designd Plans','Create My Plane']
const section=[]
export default function Navbar(){

    return(
        <Center>
        
        <Box w='100%' bg='#0693e3' p={5} h={20}>
            <Center>
            <Flex>
                <Box w={130}  my={2}>
                    <Image w='100%' src='https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-150x40.webp'/>
                </Box>
                <Box  my={2}>
                   <Dropdown value={app} title='Get Jefit App'/>
                </Box>
                <Box  my={2}>
                    <Dropdown value={plan} title='Workout Plans'/>
                </Box>
                <Box mx={10}  my={2}>
                    {/* <Link to='/'> */}
                        <Text fontSize='19' color='white'>Exercise Guide</Text>
                    {/* </Link> */}
                </Box>
                <Box mx={10}  my={2}>
                    {/* <Link to='/'> */}
                        <Text fontSize='19' color='white'>Blog</Text>
                    {/* </Link> */}
                </Box>
                <Box mx={10} my={2}>
                    {/* <Link to='/'> */}
                        <Text fontSize='19' color='white'>Coach</Text>
                    {/* </Link> */}
                </Box>
                <Box mx={10}  my={2}>
                    {/* <Link to='/'> */}
                        <Text fontSize='19' color='white'>Elite</Text>
                    {/* </Link> */}
                </Box>    
                <Box mx={10} >
                    {/* <Link to='/'> */}
                        <Button colorScheme='none' fontSize='19' color='white'>Login</Button>
                    {/* </Link> */}
                </Box>    
            </Flex>
            </Center>
        </Box >
        
        
        </Center>
    )
    
}