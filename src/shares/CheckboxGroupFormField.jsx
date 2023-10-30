import { useEffect } from 'react'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { useField } from 'formik'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

const propTypes = {
  catalog: PropTypes.array.isRequired,
  menuValue: PropTypes.string.isRequired,
  optionValue: PropTypes.string.isRequired,
  fatherValue: PropTypes.string,
  values: PropTypes.array,
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

function CheckboxGroupFormField({
  catalog,
  optionValue,
  menuValue,
  fatherValue,
  xs,
  sm,
  md,
  lg,
  values,
  ...props
}) {
  const [field, meta, helpers] = useField(props)

  useEffect(() => {
    if (
      !values?.every((item) =>
        catalog.some((item2) => item2[menuValue] === item)
      )
    ) {
      helpers.setValue([])
    }
  }, [fatherValue])

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <FormControl
        required
        error={!!(meta.touched && meta.error)}
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
      >
        <FormGroup>
          {catalog.map((value) => (
            <FormControlLabel
              key={value[optionValue]}
              control={
                <Checkbox {...field} {...props} value={value[optionValue]} />
              }
              label={value[menuValue]}
            />
          ))}
        </FormGroup>
        {meta.touched && meta.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  )
}

CheckboxGroupFormField.propTypes = propTypes
CheckboxGroupFormField.defaultProps = defaultProps

export default CheckboxGroupFormField
