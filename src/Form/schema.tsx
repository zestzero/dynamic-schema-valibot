import * as v from 'valibot'

export const baseSchema = v.object({
  username: v.pipe(
    v.string('username is required'),
    v.minLength(3, 'Needs to be at least 3 characters'),
    v.endsWith('cool', 'Needs to end with `cool`'),
  ),
  password: v.string('password is required'),
  terms: v.boolean('You must agree to the terms and conditions'),
})

export const additionalSchema = v.object({
  requireQuestion: v.boolean('This field is required'),
  optionalQuestion: v.optional(v.boolean('This field is optional')),
})

export type BaseSchemaInputType = v.InferInput<typeof baseSchema>
export type AdditionalSchemaInputType = v.InferInput<typeof additionalSchema>
