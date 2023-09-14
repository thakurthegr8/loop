import {  List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const listItems = [
    {
        name: "item1",
    },
    {
        name: "item2",
    },
    {
        name: "item3",
    }
]

const ItemsList = () => {
    return (
        <List>
            {listItems.map((item, index) => <ListItemButton key={index}>
                <ListItemText>
                    {item.name}
                </ListItemText>
            </ListItemButton>)}
        </List>
    )
}

export default ItemsList