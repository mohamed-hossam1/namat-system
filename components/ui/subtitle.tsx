import React from 'react'

export default function SubTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="text-sm font-medium text-secondary sm:text-[18px] whitespace-pre-line">{children}</p>
  )
}
