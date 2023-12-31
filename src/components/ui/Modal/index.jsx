import { Card, CardActions, CardContent, CardHeader, Modal, Stack } from '@mui/material'
import React from 'react'

const AppModal = (props) => {
    return (
        <Modal open={props.open} onClose={props.onClose} component={Stack} justifyContent="center" alignItems="center" height="100%" sx={{ p: { xs: 2, sm: 0 } }}>
            <Card sx={{ minWidth: { xs: "100vw", sm: "24rem" } }}>
                <CardHeader {...props.header} />
                <CardContent>{props.Content}</CardContent>
                <CardActions>{props.Actions}</CardActions>
            </Card>
        </Modal>
    )
}

export default AppModal

AppModal.defaultProps = {
    header: { title: "header" },
    Content: "content",
    Actions: "actions",
}