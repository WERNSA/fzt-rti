import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Grid } from '@mui/material'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

const defaultProps = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 3
}

function TimeFormField({ xs = 12, sm = 12, md = 6, lg = 3, ...props }) {
  const [field, meta, helpers] = useField(props)
  // console.log('TimeFormField', field, meta, helpers)
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          slotProps={{ textField: { fullWidth: true } }}
          onChange={(value) => helpers.setValue(value)}
          value={field.value}
          autoOk
          error={!!(meta.touched && meta.error)}
          helperText={meta.touched && meta.error}
          {...props}
        />
      </LocalizationProvider>
    </Grid>
  )
}

TimeFormField.propTypes = propTypes
TimeFormField.defaultProps = defaultProps

export default TimeFormField
