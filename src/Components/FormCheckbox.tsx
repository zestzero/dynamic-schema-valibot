import { Checkbox, Description, Field, Label } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { forwardRef } from 'react'

export type FormCheckboxProps = {
  label: string
  description?: string
  checked?: boolean
  onValueChange?: (checked: boolean) => void
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  (props, ref) => {
    const { label, description, checked, onValueChange } = props

    return (
      <Field className="flex items-center space-x-2 px-1 py-2">
        <Checkbox
          ref={ref}
          checked={checked}
          onChange={onValueChange}
          className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
        >
          <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
        </Checkbox>
        <Label>{label}</Label>
        {description && <Description>{description}</Description>}
      </Field>
    )
  },
)
