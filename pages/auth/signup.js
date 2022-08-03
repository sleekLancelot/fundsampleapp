import React from 'react'
import { useState } from 'react';
import NextLink from "next/link"
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { setAuthentication, setProfile } from '../../store/slices/user.slice';
import { register } from '../../actions';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [regDetails, setRegDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        company_name: '',
        phone: '',
        address: '',
        password: '',
        account_type_id: "89d105b4-513b-4e66-bd43-e7b9b947ef46",
        country_id: "6087ab0a-9ee0-4d4b-84d8-807be8eb0bfd",
        state_id: "033d99e8-765b-4dad-808b-6b458c47f6b4",
        city_id: "006e511a-4f9a-434a-889e-32b5b52b66b2",
    })

    const { 
        firstName,
        lastName,
        email,
        username,
        company_name,
        phone,
        address,
        password,
    } = regDetails

    const dispatch = useDispatch()
    const {push} = useRouter()

    const onChange = (e) => {
        setError('')
        setRegDetails(() => ({ ...regDetails, [e.target.id]: e.target.value }))
    }

    const submit = async () => {
        setError('')
        setLoading(true)
        try {
            const response = await register(regDetails)
    
            setLoading(false)
            dispatch( setProfile( response.data ) )
            dispatch( setAuthentication( true ) )
            // if (response?.data?.code >= 200) {
                push('/')
            // }   

            console.log(response)
            return response
        } catch (err) {
            setLoading(false)

            setError(err?.response?.data?.message || err?.message)
    
            console.log(err)
            return err
        }
    }

    const isValid = () => (
        firstName && lastName &&
        email && username &&
        company_name && phone &&
        address && password
    )


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {
                error &&
                <Text 
                color={'red.500'}
                fontStyle='italic'
                textAlign={'center'}
                textTransform='capitalize'
                >{error}</Text>
            }
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName}
                onChange={onChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName}
                onChange={onChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email}
                onChange={onChange} />
            </FormControl>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username}
                onChange={onChange} />
            </FormControl>
            <FormControl id="company_name" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input type="text" value={company_name}
                onChange={onChange} />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Mobile number</FormLabel>
              <Input type="number" value={phone}
                onChange={onChange} />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input type="text" value={address}
                onChange={onChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password}
                onChange={onChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={loading}
                colorScheme='teal'
                disabled={!isValid()}
                onClick={submit}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? 
                <NextLink href={'/auth/login'} passHref>
                    <Link ml={2} color={'blue.400'}>Login</Link>
                </NextLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUp