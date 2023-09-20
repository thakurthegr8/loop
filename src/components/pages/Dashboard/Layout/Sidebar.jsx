import React from 'react'
import ItemsList from './ItemsList'
import { Home, Note, Settings } from '@mui/icons-material'
export const sidebarLinksList = [
    {
        name: "Dashboard",
        link: "/",
        Icon: () => <Home />
    },
    {
        name: "Notes",
        link: "/notes",
        Icon: () => <Note />,
        children: [{
            name: "Add New Note",
            link: "/notes/add"
        }]
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
        <ItemsList itemsList={sidebarLinksList} />
    )
}

export default Sidebar