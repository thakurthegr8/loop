import React from 'react'
import ItemsList from './ItemsList'
import { Add, Home, Note, Person, RoomPreferences, Settings } from '@mui/icons-material'
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
            name: "New Note",
            Icon: () => <Add />,
            link: "/notes/add"
        }]
    },
    {
        name: "Settings",
        link: "/settings",
        children: [{
            name: "Account",
            link: "/settings/account",
            Icon: () => <Person />
        },
        {
            name: "Preferences",
            link: "/settings/preferences",
            Icon: () => <RoomPreferences />
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