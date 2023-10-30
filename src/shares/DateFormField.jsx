import { Grid } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
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

function DateFormField({ xs, sm, md, lg, ...props }) {
  const [field, meta, helpers] = useField(props)
  // console.log('DateFormField', field, meta, helpers)
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          variant='inline'
          slotProps={{ textField: { fullWidth: true } }}
          onChange={(value) => helpers.setValue(value)}
          value={field.value}
          format='dd/MM/yyyy'
          autoOk
          error={!!(meta.touched && meta.error)}
          helperText={meta.touched && meta.error}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          {...props}
        />
      </LocalizationProvider>
    </Grid>
  )
}

DateFormField.propTypes = propTypes
DateFormField.defaultProps = defaultProps

export default DateFormField
