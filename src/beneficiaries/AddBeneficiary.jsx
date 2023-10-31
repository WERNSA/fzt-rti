import { Formik, Form } from 'formik'
import { Grid, Card, CardHeader, Divider, Typography } from '@mui/material'
import * as Yup from 'yup'
import TextFormField from '../shares/TextFormField'

function AddBeneficiary() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
        postalCode: Yup.string().required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
    >
      {({ values, errors }) => (
        <Form>
          <Grid container spacing={2}>
            <Card>
              <CardHeader
                title={
                  <Typography variant='h6' align='center'>
                    Datos generales
                  </Typography>
                }
              />
              <Divider />
              <Grid container spacing={2}>
                <TextFormField name='name' label='Nombre' />
                <TextFormField name='email' label='Correo electrónico' />
                <TextFormField name='phone' label='Teléfono' />
                <TextFormField name='address' label='Dirección' />
                <TextFormField name='city' label='Ciudad' />
                <TextFormField name='state' label='Estado' />
                <TextFormField name='country' label='País' />
                <TextFormField name='postalCode' label='Código postal' />
              </Grid>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Card>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default AddBeneficiary
