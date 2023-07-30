'use client'
interface ErrorProps {
  message: string,
}
export function ErrorMessage({ message }: ErrorProps) {
  return (
    <h2>{message}</h2> 
  )
}
