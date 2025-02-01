import * as v from 'valibot'

export const baseSchema = v.object({
  username: v.pipe(
    v.string('username is required'),
    v.minLength(3, 'Needs to be at least 3 characters'),
    v.endsWith('cool', 'Needs to end with `cool`'),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your password.'),
    v.minLength(8, 'Your password must have 8 characters or more.'),
  ),
  terms: v.boolean('You must agree to the terms and conditions'),
})

export const additionalSchema = v.object({
  requireQuestion: v.pipe(v.boolean('This field is required'), v.value(true)),
  optionalQuestion: v.boolean('This field is optional'),
})

const variantSchema = v.variant('terms', [
  v.object({
    terms: v.pipe(v.boolean(), v.value(true)),
    requireQuestion: v.pipe(
      v.boolean('This field must be checked'),
      v.value(true, 'This field must be checked'),
    ),
    optionalQuestion: v.optional(v.boolean('This field is optional'), false),
  }),
  v.object({
    terms: v.pipe(v.boolean(), v.value(false)),
    requireQuestion: v.optional(v.boolean()),
    optionalQuestion: v.optional(v.boolean()),
  }),
])

export const conditionalSchema = v.pipe(
  v.intersect([baseSchema, variantSchema]),
  // baseSchema,
  // v.forward(
  //   v.partialCheck(
  //     [['terms']],
  //     (input) => input.terms,
  //     'Terms must be checked to require question',
  //   ),
  //   ['terms'],
  // ),
  // v.intersect([baseSchema, additionalSchema]),
)

export type SchemaInputType<
  TItem extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
> = v.InferInput<TItem>
