import React from 'react'

export default function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="text-4xl text-center font-bold tracking-tight text-balance text-white sm:text-5xl">{children}</h2>
  )
}
