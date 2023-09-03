import { Button, HStack, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import signup from '../assets/images/sign.jpg'
import sign2 from '../assets/images/sign2.jpg'
import '../components/signup.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className='signup'>
            <HStack height={'85vh'}>
                <VStack color={'white'} width={'40%'}>
                    <Heading className='sign' color={'blue.400'} fontFamily="'Montserrat', sans-serif">WELCOME BACK</Heading>
                    <Input bgColor={'blackAlpha.900'} mt={2} width={'80%'} type='email' placeholder='Enter your email' />
                    <Input bgColor={'blackAlpha.900'} mt={2} width={'80%'} type='password' placeholder='Enter password' />
                    <Button _hover={{ color: 'black', backgroundColor: 'white' }} color={'white'} mt={2} width={'50%'} backgroundColor={'blue.400'}>Sign Up</Button>
                    <Text>New User ? <Link to={'/signup'} style={{ color: '#0088a9' }}>Sign Up</Link></Text>
                </VStack>
                <VStack width={'60%'} height={'100%'}>
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

export default Login

