import {Box,Text,Heading, Flex} from '@chakra-ui/react'


export default function Footer(){

    return(
        <Box pb={200} bg='#F8F8FF' pt={20}>
            {/* <p>footer</p> */}
            <Box w='70%' m='auto' sx={{display:'flex',justifyContent:'space-between'}}>
               
                    <Box sx={{textAlign:'left'}} >
                        <Text fontSize={20} fontWeight='500'>Products</Text>
                        <Text pt={4} color='gray'>Elite Membership</Text>
                        <Text color='gray'>Coach</Text>
                        <Text color='gray'>Signup</Text>
                        <Text color='gray'>Login</Text>
                    </Box>
                    <Box sx={{textAlign:'left'}}>
                        <Text fontSize={20} fontWeight='500'>Resource</Text>
                        <Text pt={4} color='gray'>Workout Plans</Text>
                        <Text color='gray'>Exercises Database</Text>
                        <Text color='gray'>Help Center</Text>
                    </Box>
                    <Box sx={{textAlign:'left'}}>
                        <Text fontSize={20} fontWeight='500'>Legal Press</Text>
                        <Text pt={4} color='gray'>Privacy Policy</Text>
                        <Text color='gray'>Terms of Use</Text>
                        <Text color='gray'>IP / DMCA Notices</Text>
                        <Text color='gray'>Press & Media</Text>
                    </Box>
                    <Box sx={{textAlign:'left'}}>
                        <Text fontSize={20} fontWeight='500'>Follow US</Text>
                        <Text pt={4} color='gray'>Blog</Text>
                        <Text color='gray'>Facebook</Text>
                        <Text color='gray'>Twitter</Text>
                        <Text color='gray'>Instagram</Text>
                    </Box>
               
            </Box>
        </Box>
    )
}