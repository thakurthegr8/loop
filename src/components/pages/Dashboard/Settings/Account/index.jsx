import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import ChangeAccountInfo from '../../../../blocks/Settings/Account/ChangeAccountInfo'
import ChangeAuthInfo from '../../../../blocks/Settings/Account/ChangeAuthInfo'

const SettingsAccountPage = () => {
    return (
        <Stack spacing={2}>
            <Typography variant='h6' fontWeight={400}>Account</Typography>
            <Card>
                <CardHeader title={<Typography variant='h6' fontWeight={400}>Update user info</Typography>} />
                <CardContent>
                    <ChangeAccountInfo />
                </CardContent>
            </Card>
            <Card>
                <CardHeader title={<Typography variant='h6' fontWeight={400}>Update password</Typography>} />
                <CardContent>
                    <ChangeAuthInfo />
                </CardContent>
            </Card>
        </Stack>
    )
}

export default SettingsAccountPage