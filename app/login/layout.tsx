'use client'

import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUser } from "@/app/utils/api/user.api";

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

  return (
    <main>
      {children}
    </main>
  )
}