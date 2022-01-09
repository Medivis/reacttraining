import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MapListSlot({panel}) {
  return (
    <Link to={`/buchen/${panel._id}`}>
      <ListItem button>
        <ListItemText primary={panel.name} secondary={panel.address} />
      </ListItem>
    </Link>
  )
}
