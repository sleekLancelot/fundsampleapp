import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import {Box} from '@chakra-ui/react'

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useSelector((store) => store.user);
    const {push} = useRouter()

    useEffect(() => {
        if (!isAuthenticated) {
            push('/auth/login')
        }
    },[isAuthenticated])


    return isAuthenticated && (
        <Box>
            {children}
        </Box>
    )
}

export {PrivateRoute}