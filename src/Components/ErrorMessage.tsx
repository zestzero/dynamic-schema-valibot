import { PropsWithChildren } from 'react'

export const ErrorMessage = (props: PropsWithChildren) => {
  const { children } = props
  return <p className="text-red-600">{children}</p>
}
