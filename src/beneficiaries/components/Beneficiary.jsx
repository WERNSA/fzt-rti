import TextFormField from '../../shares/TextFormField'
import SelectFormField from '../../shares/SelectFormField'
import {
  genders,
  isInSchool,
  identificationTypes,
  categoryMostIdentify
} from '../../utils/Variables'
import DateFormField from '../../shares/DateFormField'

function Beneficiary() {
  return (
    <>
      <TextFormField label='Nombres' name='name' />

      <TextFormField label='Apellidos' name='lastName' />

      <SelectFormField
        label='Genero'
        name='gender'
        catalog={genders}
        optionValue='gender'
        menuItemValue='gender'
      />

      <DateFormField label='Fecha de nacimiento' name='birthDate' />

      <TextFormField label='Age' name='age' type='number' />

      <SelectFormField
        label='¿Estudia?'
        name='isInSchool'
        catalog={isInSchool}
        optionValue='isInSchool'
        menuItemValue='isInSchool'
      />

      <SelectFormField
        label='Tipo de identificación'
        name='identificationType'
        catalog={identificationTypes}
        optionValue='identificationType'
        menuItemValue='identificationType'
      />

      <TextFormField label='Número de identificación' name='identification' />

      <TextFormField label='Número de teléfono' name='phone' />

      <SelectFormField
        label='Categoría más identificada'
        name='categoryMostIdentify'
        catalog={categoryMostIdentify}
        optionValue='categoryMostIdentify'
        menuItemValue='categoryMostIdentify'
      />
    </>
  )
}

export default Beneficiary
