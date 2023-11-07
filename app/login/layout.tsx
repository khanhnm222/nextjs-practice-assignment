'use client'

import Spinner from "@/components/spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUser } from "@/app/utils/api/user.api";
import { toast } from "sonner";

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
        toast.info('Must be logged in to create a new post!');
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