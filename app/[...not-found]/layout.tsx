'use client'

import React from "react";

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main style={{ minHeight: '100vh', marginTop: '20%' }}>
      {children}
    </main>
  )
}