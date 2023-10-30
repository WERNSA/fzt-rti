import SelectFormField from '../shares/SelectFormField'
import { programs, countries, advisors } from '../utils/Variables'
import DateFormField from './DateFormField'
import TimeFormField from './TimeFormField'
import CheckboxFormField from './CheckboxFormField'
import PropTypes from 'prop-types'

const propTypes = {
  values: PropTypes.object.isRequired,
  visitType: PropTypes.array
}

const defaultProps = {
  visitType: null
}

function GeneralData({ values, visitType }) {
  return (
    <>
      <SelectFormField
        name='country'
        label='País'
        catalog={countries}
        optionValue='country'
        menuItemValue='country'
      />

      <SelectFormField
        name='program'
        label='Programa'
        catalog={values.country ? programs[values.country] : []}
        optionValue='program'
        menuItemValue='program'
        fatherValue={values.country}
      />

      <SelectFormField
        name='advisor'
        label='Asesor'
        catalog={advisors}
        optionValue='id'
        menuItemValue='advisor_name'
      />

      <DateFormField name='date' label='Fecha de la visita' />

      <TimeFormField name='entryTime' label='Hora de entrada' />

      <TimeFormField name='exitTime' label='Hora de salida' />

      {visitType && (
        <SelectFormField
          name='visitType'
          label='Tipo de visita'
          catalog={visitType}
          optionValue='type'
          menuItemValue='type'
        />
      )}

      <CheckboxFormField name='planned' label='Visita planificada' />
    </>
  )
}

GeneralData.propTypes = propTypes
GeneralData.defaultProps = defaultProps

export default GeneralData
