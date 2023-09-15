import React from 'react'
import ItemsList from './ItemsList'
import { Home, Settings } from '@mui/icons-material'
const listItems = [
    {
        name: "Dashboard",
        link: "/",
        Icon: () => <Home />
    },
    {
        name: "Settings",
        link: "/settings",
        children: [{
            name: "Account",
            link: "/settings/account"
        },
        {
            name: "Preferences",
            link: "/settings/preferences"
        }
        ],
        Icon: () => <Settings />
    }
]
const Sidebar = () => {
    return (
        <ItemsList itemsList={listItems} />
    )
}

export default Sidebar