import { HStack, Stack, VStack, Text, Button, Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaYoutube,FaInstagram,FaFacebook,FaRegPaperPlane} from 'react-icons/fa'

const Footer2 = () => {
    const [email,setEmail] = useState("");
  return (
    <>
    <hr style={{color: "black",height:"3px"}} />
    <Stack bgColor={'blue.300'} direction={['column','row']} p={10} justifyContent={'space-between'}>
        <VStack>
            <HStack>
                <Link to={'/'}>Home |</Link>
                <Link to={'/donate'}>Add Book |</Link>
                <Link to={'/about'}>About Us |</Link>
                <Link to={'/contact'}>Contact Us</Link>
                
            </HStack>
            <Text fontWeight={'semibold'} mt={['5px','20px']} alignSelf={['center','flex-start']}>© Copyright Ministry of Ayush. All Rights Reserved
In house product</Text>
        </VStack>
        <VStack >
        <HStack>
            <form>
            <Input bgColor={'white'} color={'black'} value={email} onChange={(e) => setEmail(e.target.value)} focusBorderColor='yellow' width={'230px'} placeholder='Subscribe for NewsLetter' />
            <Button mx={4} type='submit'><FaRegPaperPlane /></Button>
            </form>
        </HStack>
        <Text fontWeight={'semibold'} marginLeft={'-40px'}>Ministry Of Ayush</Text>
        </VStack>
        <VStack>
            <Text fontSize={'2xl'} fontWeight={'bold'}>Get Connected</Text>
            <HStack>
                <Button variant={'unstyled'}><FaYoutube size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaInstagram size={'30px'} /></Button>
                <Button variant={'unstyled'}><FaFacebook size={'30px'} /></Button>
            </HStack>
            
        </VStack>
    </Stack>
    </>
  )
}

export default Footer2

