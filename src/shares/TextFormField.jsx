import { TextField, Grid } from '@mui/material'
import { useField } from 'formik'

const TextFormField = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <TextField
        fullWidth
        helperText={meta.touched && meta.error}
        error={!!(meta.touched && meta.error)}
        {...field}
        {...props}
      />
    </Grid>
  )
}

export default TextFormField
