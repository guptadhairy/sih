import { Heading, VStack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import '../components/faq.css'
import {FaQuestion} from 'react-icons/fa'
const Faq = () => {
  return (
    <div className='fqa_font'>
        <VStack p={8}>
        <Heading className='outline-text'>Frequently Asked Questions</Heading>
        <Text color={'white'}>Quick answers to questions you may have.</Text>
        </VStack>
        <HStack mt={8} p={20} fontFamily="'Montserrat', sans-serif" className='fqa_font'  >
            <VStack width={'full'} justifyContent={'flex-start'} alignSelf={'flex-start'}>
            <HStack  >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>What is the purpose of the assessment scale for medical textbooks and reference books?</Heading>
                    <Text color={'white'}>The assessment scale's primary purpose is to evaluate the quality of medical textbooks and reference books. It aims to ensure that students have access to high-quality educational materials, promoting excellence in medical education.</Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Who established the assessment scale, and why was it created?</Heading>
                    <Text color={'white'}>The assessment scale was established by NCISM (National Commission for Indian Systems of Medicine) to address the issue of substandard medical textbooks. It was created to set standards and improve the quality of medical literature in Ayurveda, Unani, and Siddha systems </Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>How will the assessment scale benefit medical students?</Heading>
                    <Text color={'white'}>Medical students will benefit by having access to reliable and high-quality textbooks, which will enhance the quality of their education and help them become competent physicians. </Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Is the assessment scale applicable to all medical systems (Ayurveda, Unani, Siddha)?</Heading>
                    <Text color={'white'}>Yes, the assessment scale is designed to be applicable to textbooks and reference books in all Indian Systems of Medicine, including Ayurveda, Unani, and Siddha.</Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>What criteria does the assessment scale use to evaluate textbooks?</Heading>
                    <Text color={'white'}>The assessment scale employs various criteria, such as accuracy of content, adherence to syllabus guidelines, clarity of explanations, and overall educational value.</Text>
                </VStack>
            </HStack>
            </VStack>
            <VStack width={'full'} justifyContent={'flex-end'} alignSelf={'flex-end'}>
            <HStack >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>How can teachers use the assessment scale to select quality textbooks for their students?</Heading>
                    <Text color={'whiteAlpha.900'}>Teachers can use the assessment scale as a guide to choosing textbooks that meet the established quality standards, ensuring that their students receive the best educational materials.</Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Are textbook writers encouraged to refer to the assessment scale during their writing process?</Heading>
                    <Text color={'whiteAlpha.900'}>Yes, textbook writers are encouraged to consult the assessment scale to ensure that their books align with the recommended quality criteria. </Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Will the assessment scale be used to recommend textbooks to regulatory bodies?</Heading>
                    <Text color={'white'}>Yes, the assessment scale can serve as a reference for recommending textbooks to apex and regulatory bodies, helping them make informed decisions about textbook approvals. </Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Who are the reviewers responsible for assessing the books, and how are they selected?</Heading>
                    <Text color={'white'}>Subject-wise reviewers located across the country are responsible for book assessments. Three reviewers are typically assigned to evaluate each book.</Text>
                </VStack>
            </HStack>
            <HStack mt={8} >
                <Heading><FaQuestion /></Heading>
                <VStack>
                    <Heading  justifyContent={'flex-start'} alignSelf={'flex-start'} fontSize={'1rem'}>Where can I access the assessment scale and related information online?</Heading>
                    <Text color={'white'}>Information about the assessment scale and related resources can typically be found on the official website of NCISM or the relevant regulatory body overseeing medical education in your region. </Text>
                </VStack>
            </HStack>
            
            </VStack>
            </HStack>
    </div>
  )
}

export default Faq
