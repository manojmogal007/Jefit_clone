import {Box,Text,Image,Heading, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'
import {useState} from 'react'
import {Navigate} from 'react-router-dom'
const initial={username:"",email:"",password:""}
export default function Signup(){
    const [userdata,setuserdata]=useState(initial)

    const handlechange=(e)=>{
        const {type,name,value}=e.target
        setuserdata({...userdata,[name]:value})
    }
    let arr=JSON.parse(localStorage.getItem('userdata'))|| [];
    const handleclick=()=>{
        if(userdata.password!==userdata.confirmpassword){
            alert('Reenter your password')
            return;
        }
        arr.push(userdata)
        localStorage.setItem('userdata',JSON.stringify(arr))
        alert('Signup Successful')
       return <Navigate to="/login"></Navigate>
        
    }
    console.log(userdata)
    const {username,email,password,confirmpassword}=userdata
    return(
      
        <Box w='full' bg='#E6E6FA' >
            <Box m='auto' w='7%' py={10}>
                <Image src='https://www.jefit.com/images/jefit_logo_website_signuplogin.svg'/>
            </Box>
            <Box bg='#E0FFFF' w='40%' m='auto' borderRadius={15} pt={20}  pb={70} >
                <Heading size='2xl'>CREATE ACCOUNT</Heading>
                <Text fontSize={20} pt={5}>Continue with</Text>
                <Box pt={16} w='40%' m='auto' sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box h={16} w={16}  sx={{display:'flex',justifyContent:'center',alignItems:'center',bg:'white',borderRadius:'10px'}}>
                        <Image h='50%' src='https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png'></Image>
                    </Box>
                    <Box h={16} w={16}  sx={{display:'flex',justifyContent:'center',alignItems:'center',bg:'white',borderRadius:'10px'}}>
                        <Image h='50%' src='https://tse1.mm.bing.net/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&pid=Api&P=0'></Image>
                    </Box>
                    <Box h={16} w={16}  sx={{display:'flex',justifyContent:'center',alignItems:'center',bg:'white',borderRadius:'10px'}}>
                        <Image h='50%' src='https://tse1.mm.bing.net/th?id=OIP.kHKjQTsIsIbI3ZRwFIxRfwHaHa&pid=Api&P=0'></Image>
                    </Box>
                </Box>
                <Text my={25}>Or</Text>
                <Box w='85%' m='auto'>
                <FormControl textAlign='left'>
                    <FormLabel mt={5}>Username</FormLabel>
                    <Input onChange={handlechange} name='username' value={username} h={12} type='text' placeholder='Enter your username' bg='white' />
                    <FormLabel mt={5}>Email address</FormLabel>
                    <Input onChange={handlechange} name='email' value={email} h={12} type='email' placeholder='Enter your email' bg='white' />
                    <FormLabel mt={5}>Password</FormLabel>
                    <Input onChange={handlechange} name='password' value={password} h={12} type='password' placeholder='Password' bg='white' />
                    <Input onChange={handlechange} name='confirmpassword' value={confirmpassword} h={12} mt={5} type='password' placeholder='Confirm password' bg='white' />
                   <Button onClick={handleclick} mt={5} w='full' borderRadius='full' color='white' bg='#0693e3'> CREATE ACCOUNT</Button>
                </FormControl>
                </Box>
                <Text>Already a member?</Text>
            </Box>
        </Box>
    )
}