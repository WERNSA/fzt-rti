import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HandymanIcon from '@mui/icons-material/Handyman'
import SchoolIcon from '@mui/icons-material/School'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import BuildIcon from '@mui/icons-material/Build'

export const navLinks = [
  {
    name: 'Agregar Usuario',
    icon: <SchoolIcon />,
    path: '/add-user',
    pl: 2
  },
  {
    name: 'Tecnología',
    icon: <HandymanIcon />,
    pl: 2,
    children: [
      {
        name: 'Visitas',
        path: '/technology/visits',
        icon: <BuildIcon />,
        pl: 4
      },
      {
        name: 'Planificación',
        path: '/technology/visits/planning',
        icon: <AddCircleOutlineIcon />,
        pl: 4
      }
    ]
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        path: '/pedagogy/visits',
        element: <MainLayout />
      },
      {
        path: '/technology/visits',
        element: <MainLayout />
      },
      {
        path: '/pedagogy/visits/planning',
        element: <MainLayout />
      },
      {
        path: '/technology/visits/planning',
        element: <MainLayout />
      }
    ]
  }
])

export default router
