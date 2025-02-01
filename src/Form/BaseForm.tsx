import { ErrorMessage } from '../components/ErrorMessage'
import { FormCheckbox } from '../components/FormCheckbox'
import { FormInput } from '../components/FormInput'
import { SchemaInputType, conditionalSchema } from './schema'
import { Button } from '@headlessui/react'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'

export const BaseForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SchemaInputType<typeof conditionalSchema>>({
    resolver: valibotResolver(conditionalSchema),
    defaultValues: {
      username: '',
      password: '',
      terms: false,
      requireQuestion: false,
      optionalQuestion: false,
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
      {errors.username && (
        <ErrorMessage>{String(errors.username.message)}</ErrorMessage>
      )}
      <FormInput label="password" type="password" {...register('password')} />
      {errors.password && (
        <ErrorMessage>{String(errors.password.message)}</ErrorMessage>
      )}
      <FormCheckbox
        label="I agree to the terms and conditions"
        {...register('terms')}
        onValueChange={(v) => setValue('terms', v)}
      />
      {Boolean(watch('terms')) && (
        <>
          <FormCheckbox
            label="Require question"
            description="this field is mandatory"
            {...register('requireQuestion')}
            onValueChange={(v) => setValue('requireQuestion', v)}
          />
          <FormCheckbox
            label="Optional question"
            description="this field is optional"
            {...register('optionalQuestion')}
            onValueChange={(v) => setValue('optionalQuestion', v)}
          />
        </>
      )}
      {errors.terms && (
        <ErrorMessage>{String(errors.terms.message)}</ErrorMessage>
      )}
      {errors.requireQuestion && (
        <ErrorMessage>
          requireQuestion {String(errors.requireQuestion.message)}
        </ErrorMessage>
      )}
      {errors.optionalQuestion && (
        <ErrorMessage>
          optionalQuestion {String(errors.optionalQuestion.message)}
        </ErrorMessage>
      )}
      {isSubmitSuccessful && <p className="py-2 text-green-600">Success!</p>}
      <Button type="submit">Submit</Button>
    </form>
  )
}
