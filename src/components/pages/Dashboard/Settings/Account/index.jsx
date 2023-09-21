import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'
import ChangeAccountInfo from '../../../../blocks/Settings/Account/ChangeAccountInfo'
import ChangeAuthInfo from '../../../../blocks/Settings/Account/ChangeAuthInfo'
import MetaDataProvider from '../../../../../providers/Meta'
import { BRAND_NAME } from '../../../../../constants'

const SettingsAccountPage = () => {
    return (
        <><MetaDataProvider title={`${BRAND_NAME} | Settings | Account`} />
            <Stack spacing={2}>
                <Typography variant='h6' fontWeight={400}>Account</Typography>
                <Card variant='outlined'>
                    <CardHeader title={<Typography variant='h6' fontWeight={400}>Update user info</Typography>} />
                    <CardContent>
                        <ChangeAccountInfo />
                    </CardContent>
                </Card>
                <Card variant='outlined'>
                    <CardHeader title={<Typography variant='h6' fontWeight={400}>Update password</Typography>} />
                    <CardContent>
                        <ChangeAuthInfo />
                    </CardContent>
                </Card>
            </Stack>
        </>
    )
}

export default SettingsAccountPage