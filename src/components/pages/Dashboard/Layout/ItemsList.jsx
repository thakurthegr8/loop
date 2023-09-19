import { ExpandLess, ExpandMore, Home, Person, Settings } from '@mui/icons-material'
import { Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CustomListItemCollapsible = (props) => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prev => !prev);
    }
    return <>
        <ListItemButton onClick={toggle} LinkComponent={Link} to={props.linkItem.link}>
            <ListItemIcon><props.linkItem.Icon /></ListItemIcon>
            <ListItemText primary={props.linkItem.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse component="div" in={open} timeout="auto" unmountOnExit>
            <ItemsList itemsList={props.linkItem.children} />
        </Collapse>
    </>
}

const ItemsList = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <List disablePadding>
            {props.itemsList.map((item, index) => {
                if (!item?.children)
                    return (<ListItemButton key={index} LinkComponent={Link} to={item.link} selected={selectedIndex === index} onClick={() => setSelectedIndex(index)}>
                        {item.Icon && <ListItemIcon>
                            <item.Icon />
                        </ListItemIcon>}
                        <ListItemText primary={<Typography>{item.name}</Typography>} />
                    </ListItemButton>)
                return <CustomListItemCollapsible linkItem={item} />
            })}
        </List>
    )
}

export default ItemsList