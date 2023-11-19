import axios from 'axios'
import { url } from './Variables'

export async function getData(spreadsheetName, sheetName) {
  const res = await axios.get(url, { params: { spreadsheetName, sheetName } })
  console.log(res.data)
}
