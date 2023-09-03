import { Button, HStack, Heading, Input, VStack, Text, Select } from '@chakra-ui/react'
import React from 'react'
import signup from '../assets/images/sign.jpg'
import sign2 from '../assets/images/sign2.jpg'
import '../components/signup.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <div className='signup'>
            <HStack height={'85vh'}>
                <VStack color={'white'} width={'40%'}>
                    <Heading className='sign' color={'blue.400'} fontFamily="'Montserrat', sans-serif">CREATE ACCOUNT</Heading>
                    <Input color={'white'} bgColor={'blackAlpha.900'} mt={8} width={'80%'} type='text' placeholder='Enter your name' />
                    <Input bgColor={'blackAlpha.900'} mt={2} width={'80%'} type='number' placeholder='Enter your age' />
                    <Input bgColor={'blackAlpha.900'} mt={2} width={'80%'} type='email' placeholder='Enter your email' />
                    <Input bgColor={'blackAlpha.900'} mt={2} width={'80%'} type='password' placeholder='Enter password' />
                    <Select bgColor={'blackAlpha.900'} color={'white'} width={'80%'} mt={2} placeholder='Select Role'>
                        <option style={{color: 'black'}} value="option1">Option 1</option>
                        <option style={{color: 'black'}}  value="option2">Option 2</option>
                        <option style={{color: 'black'}}  value="option3">Option 3</option>
                    </Select>
                    <Button _hover={{ color: 'black', backgroundColor: 'white' }} color={'white'} mt={2} width={'50%'} backgroundColor={'blue.400'}>Sign Up</Button>
                    <Text>Already Signed In ? <Link to={'/login'} style={{ color: '#0088a9' }}>Log In</Link></Text>
                </VStack>
                <VStack width={'60%'} height={'100%'}>
                    {/* <img src={signup} alt='Signup Please' /> */}
                    <Carousel autoPlay
                        infiniteLoop
                        interval={2000}
                        showStatus={false}
                        showThumbs={false}
                        showArrows={false}>
                        <div>
                            <img src={signup} alt='kuch bhi' />

                        </div>
                        <div>
                            <img src={sign2} alt='kuch' />

                        </div>
                        <div>
                            <img src={signup} alt='kuch' />

                        </div>
                    </Carousel>
                </VStack>
            </HStack>
        </div>
    )
}

export default SignUp
