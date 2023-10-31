import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HandymanIcon from '@mui/icons-material/Handyman'
import SchoolIcon from '@mui/icons-material/School'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import BuildIcon from '@mui/icons-material/Build'
import AddBeneficiary from '../beneficiaries/AddBeneficiary'

export const navLinks = [
  {
    name: 'Beneficiarios',
    icon: <SchoolIcon />,
    pl: 2,
    children: [
      {
        name: 'Crear',
        icon: <DirectionsCarIcon />,
        path: '/add-user',
        pl: 4
      },
      {
        name: 'Ver',
        icon: <AddCircleOutlineIcon />,
        pl: 4,
        children: [
          {
            name: 'Visita 1',
            path: '/pedagogy/visits/planning',
            icon: <AddCircleOutlineIcon />,
            pl: 6
          },
          {
            name: 'Visita 2',
            path: '/pedagogy/visits/planning',
            icon: <AddCircleOutlineIcon />,
            pl: 6
          },
          {
            name: 'Visita 3',
            path: '/pedagogy/visits/planning',
            icon: <AddCircleOutlineIcon />,
            pl: 6
          }
        ]
      }
    ]
  },
  {
    name: 'Cursos',
    icon: <HandymanIcon />,
    pl: 2,
    children: [
      {
        name: 'Crear',
        path: '/technology/visits',
        icon: <BuildIcon />,
        pl: 4
      },
      {
        name: 'Ver',
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
        path: '/add-user',
        element: <AddBeneficiary />
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
