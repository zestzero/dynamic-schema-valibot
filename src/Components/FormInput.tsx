import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type FormInputProps = UseFormRegisterReturn & {
    label?: string
    description?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    (props, ref) => {
        const { label, description } = props
        return (
            <div className="w-full max-w-md px-4">
                <Field>
                    <Label className="text-sm/6 font-medium text-white">
                        {label}
                    </Label>
                    {description && (
                        <Description className="text-sm/6 text-white/50">
                            {description}
                        </Description>
                    )}
                    <Input
                        ref={ref}
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                        )}
                    />
                </Field>
            </div>
        )
    },
)
