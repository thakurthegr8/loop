import { Animation } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
    return (<Stack direction="row">
        <Animation color='default' />
        <Typography variant='body1' color="default" fontWeight={600}>
            Loop
        </Typography>
    </Stack>
    )
}

export default Logo