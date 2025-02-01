import { FormCheckbox } from '../Components/FormCheckbox'
import { FormInput } from '../Components/FormInput'
import { baseSchema } from './schema'
import { Button, Checkbox } from '@headlessui/react'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
    >
      {/* Checkmark icon */}
      <svg
        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Checkbox>
  )
}

export const BaseForm = () => {
  const [checked, setChecked] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(baseSchema),
  })

  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d)
      })}
    >
      <FormInput label="username" {...register('username')} />
      {errors.username && <p>{String(errors.username.message)}</p>}
      <FormInput label="password" {...register('password')} />
      {errors.password && <p>{String(errors.password.message)}</p>}
      <FormCheckbox
        label="I agree to the terms and conditions"
        checked={checked}
        onChange={setChecked}
      />
      <Example />
      <Button type="submit">Submit</Button>
    </form>
  )
}
