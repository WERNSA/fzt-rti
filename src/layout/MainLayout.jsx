import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NavListDrawer from './components/NavListDrawer'
import axios from 'axios'

const drawerWidth = 240

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

function MainLayout() {
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://script.google.com/macros/s/AKfycbwjwOlaTaAq8E63UXYvoDpeY5Dqg5FFF4_9cmQZCSKyqvymphgCf8B9Jfp56xSiQ-8RHw/exec'
  //     )
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              RTI System
            </Typography>
          </Toolbar>
        </AppBar>
        <NavListDrawer open={open} setOpen={setOpen} />
      </Box>
    </>
  )
}

export default MainLayout
