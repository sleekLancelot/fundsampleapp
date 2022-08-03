import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {
    Box,
    Flex,
    Stack,
    Text,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react'

const Home = () => {
    const { details } = useSelector((store) => store.user);

    useEffect(() => {
        console.log(details)
    },[details])

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
        <Stack 
            spacing={8}
            mx={'auto'}
            maxW={'lg'}
            py={12}
            px={6}
        >
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}
            >
                <Stack spacing={4}>
                    {
                        Object.keys(details)?.map((key,index) => (
                            <HStack key={index}>
                                <Text>{key} {' :'}</Text> 
                                <Text>{details[key]}</Text>
                            </HStack>
                        ))
                    }
                </Stack>
            </Box>
        </Stack>
    </Flex>
  )
}

export {Home}