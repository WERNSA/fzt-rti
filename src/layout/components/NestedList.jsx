import { List, Collapse } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NestedList({ listData }) {
  const [open, setOpen] = useState({})

  const handleClick = (index) => {
    setOpen((prevState) => ({ ...prevState, [index]: !prevState[index] }))
  }

  return (
    <List>
      {listData.map((listItem, index) => (
        <div key={index}>
          <ListItemButton
            onClick={() => handleClick(index)}
            component={listItem.path && Link}
            to={listItem.path && listItem.path}
            sx={{ pl: listItem.pl }}
          >
            {listItem.icon && <ListItemIcon>{listItem.icon}</ListItemIcon>}
            <ListItemText primary={listItem.name} />
            {listItem.children &&
              (open[index] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {listItem.children && (
            <Collapse in={open[index]} timeout='auto' unmountOnExit>
              <NestedList listData={listItem.children} />
            </Collapse>
          )}
        </div>
      ))}
      <Divider />
    </List>
  )
}

export default NestedList
