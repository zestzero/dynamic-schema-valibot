import { FormCheckbox } from '../components/FormCheckbox'

export const AdditionalForm = () => {
  return (
    <div className="flex flex-col space-y-2 px-2 py-4 bg-white/10 rounded-md">
      <FormCheckbox
        label="Require question"
        description="this field is mandatory"
      />
      <FormCheckbox
        label="Optional question"
        description="this field is optional"
      />
    </div>
  )
}
