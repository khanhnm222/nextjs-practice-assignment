'use client'

import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { getUser } from  "@/app/utils/api/user.api";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useLayoutEffect(() => {
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
      { !isSuccess ?
        <Spinner /> : (
          <>{children}</>
        )
      }
    </main>
  )
}