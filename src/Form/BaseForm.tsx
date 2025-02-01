import { FormCheckbox } from '../Components/FormCheckbox'
import { FormInput } from '../Components/FormInput'
import { AdditionalForm } from './AdditionalForm'
import { BaseSchemaInputType, baseSchema } from './schema'
import { Button } from '@headlessui/react'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

export const BaseForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BaseSchemaInputType>({
    resolver: valibotResolver(baseSchema),
    defaultValues: {
      username: '',
      password: '',
      terms: false,
    },
    reValidateMode: 'onChange',
  })

  return (
    <form
      onSubmit={handleSubmit((baseSchema) => {
        console.log(baseSchema)
      })}
    >
      <FormInput label="username" {...register('username')} />
      {errors.username && <p>{String(errors.username.message)}</p>}
      <FormInput label="password" {...register('password')} />
      {errors.password && <p>{String(errors.password.message)}</p>}
      <FormCheckbox
        label="I agree to the terms and conditions"
        {...register('terms')}
        onValueChange={(v) => setValue('terms', v)}
      />
      {Boolean(watch('terms')) && <AdditionalForm />}
      <Button type="submit">Submit</Button>
    </form>
  )
}
