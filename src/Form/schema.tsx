import * as v from 'valibot'

export const baseSchema = v.object({
  username: v.pipe(
    v.string('username is required'),
    v.minLength(3, 'Needs to be at least 3 characters'),
    v.endsWith('cool', 'Needs to end with `cool`'),
  ),
  password: v.string('password is required'),
})
