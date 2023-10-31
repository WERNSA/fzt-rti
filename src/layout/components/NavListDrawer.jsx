import { styled, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import { DrawerHeader } from '../MainLayout'
import { navLinks } from '../../routes/Routes'
import NestedList from './NestedList'
import { Container } from '@mui/material'
import PropTypes from 'prop-types'

const propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

function NavListDrawer({ open, setOpen }) {
  const theme = useTheme()
  const handleDrawerClose = () => {
    setOpen(!open)
  }

  return (
    <>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* NavBar Items */}
        <NestedList listData={navLinks} />
      </Drawer>
      ;
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container maxWidth={false} className='pv32'>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}

NavListDrawer.propTypes = propTypes

export default NavListDrawer
