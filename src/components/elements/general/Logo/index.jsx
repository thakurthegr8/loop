import { Animation } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
    return (<>
        <Animation color='default' />
        <Typography variant='body1' color="default" fontWeight={600}>
            Loop
        </Typography>
    </>
    )
}

export default Logo