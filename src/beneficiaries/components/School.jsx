import { useEffect } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SelectFormField from '../../shares/SelectFormField'
// import { url } from '../../utils/Variables'
// import axios from 'axios'
import { getData } from '../../utils/API'

const School = () => {
  // async function getData(spreadsheetName, sheetName) {
  //   const res = await axios.get(url, { params: { spreadsheetName, sheetName } })
  //   console.log(res.data)
  // }

  useEffect(() => {
    // axios
    //   .get(`${url}?spreadsheetName=settings&&sheetName=department`)
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    getData('settings', 'department')
  }, [])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
      >
        <Typography>Escuela</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {/* <SelectFormField
            label='¿Estudia?'
            name='isInSchool'
            catalog={}
            optionValue='isInSchool'
            menuItemValue='isInSchool'
          /> */}
          Testin
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default School
