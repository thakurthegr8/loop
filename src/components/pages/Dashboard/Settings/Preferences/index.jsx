import { Card, CardContent, CardHeader, Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import { useAppTheme } from '../../../../../providers/Theme'
import MetaDataProvider from '../../../../../providers/Meta';
import { BRAND_NAME } from '../../../../../constants';

const SettingsPreferencesPage = () => {
    // const themeCtx = useAppTheme();
    return (
        <>
            <MetaDataProvider title={`${BRAND_NAME} | Settings | Preferences`} />
            <Stack>
                <Typography variant='h6' fontWeight={400}>Your Preferences</Typography>
                <Card>
                    <CardHeader subheader="Toggle your theme to light/dark" title="Theme" />
                    {/* <CardContent>
                        <Switch checked={"dark" === themeCtx.theme} onChange={themeCtx.toggleTheme} title='mode' />
                    </CardContent> */}
                </Card>
            </Stack>
        </>
    )
}

export default SettingsPreferencesPage