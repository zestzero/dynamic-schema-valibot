import { FormCheckbox } from '../Components/FormCheckbox'
import { FormInput } from '../Components/FormInput'
import { baseSchema } from './schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

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
            <input type="submit" />
        </form>
    )
}
