import {Box,Text,Image,Heading, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'
import { Navigate ,Link} from 'react-router-dom'
const  ldata ={username:'',password:''}
export default function Login(){
    const [login,setlogin]=useState(ldata)

    const handlechange=(e)=>{
        const {type,value,name}=e.target;

        // const val=type==='password'?Number(value):value;
        setlogin({...login,[name]:value})
    }
    const handleclick=()=>{
        let data=JSON.parse(localStorage.getItem('userdata'))
        console.log(data)
        for(let i=0;i<data.length;i++){
            if(login.username===data[i].username&&login.password===data[i].password||login.username===data[i].email&&login.password===data[i].password){
                alert('Login Successful')
                return <Navigate to='/'></Navigate>
            }
        }
        alert ('Wrong credential')
    }

    console.log(login)
    const {username,password}=login
    return (
        <Box h='1000px' w='1500px' bgSize='100%' backgroundImage="url('https://www.jefit.com/images/loginbg.jpg')">
             <Box m='auto' w='7%' py={10}>
                <Image src='https://www.jefit.com/images/jefit_logo_website_signuplogin.svg'/>
            </Box>
            
            <Box bg='#E0FFFF' w='40%' m='auto' borderRadius={15} pt={20}  pb={70} >
            <Heading size='2xl'>LOG IN</Heading>
                <Box w='85%' m='auto'>
                    <FormControl textAlign='left'>
                        <FormLabel mt={5}>Username or email</FormLabel>
                        <Input onChange={handlechange} name='username' value={username} h={12} type='text' placeholder='Username or email' bg='white' />
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input onChange={handlechange} name='password' value={password} h={12} type='password' placeholder='Password' bg='white' />
                        <Button onClick={handleclick} mt={5} w='full' borderRadius='full' color='white' bg='#0693e3'> CREATE ACCOUNT</Button>
                    </FormControl>
                </Box>
                <Text fontSize={20} py={10}>Or continue with</Text>
                <Box pt={10} w='40%' m='auto' sx={{display:'flex',justifyContent:'space-between'}}>
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
                <Text mt={10} >New to JEFIT?
                <Link to='/signup'>Create an account</Link></Text>
            </Box>
        </Box>
    )
}