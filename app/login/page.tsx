'use client'

import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'
import { login } from '../utils/authentication.api'

const Login = () => {

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value
    }

    await login(payload, (data: any) => {
      // redirect
      router.back()
    })
  }

  return (
    <>
      <main className={styles.main} >
        <div className="flex w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-neutral-500">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-md font-medium leading-6 text-neutral-500">
                  User name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="border-[1px] border-slate-400 block w-full px-[10px] rounded-md py-1.5 text-neutral-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-neutral-500">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="border-[1px] border-slate-400 block w-full px-[10px] rounded-md py-1.5 text-neutral-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              You do not have an account ?{' '}
              <a href="#" className="font-semibold leading-6 text-amber-950 hover:text-indigo-500">
                Register
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;