'use client'

import Spinner from "@/components/spinner/page";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUser } from "../utils/user.api";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser()

      if (error) {
        router.push('/login')
        return
      }

      if (user) {
        setIsSuccess(true)
      }
    }) ()
  }, [router])

  if (!isSuccess) {
    return <Spinner />
  }

  return (
    <main>
      {children}
    </main>
  )
}