'use client'
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { logout } from "@/app/utils/api/authentication.api";
import { getUser } from "@/app/utils/api/user.api";
import { toast } from "sonner";

const NavigationBar = () => {
  const router = useRouter()
  const currentPathName = usePathname()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOpen = () => {
    setIsMenuOpen(false);
  };

  const isLoginPage = useCallback(() => {
    return currentPathName &&  currentPathName === '/login';
  }, [currentPathName])

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser()

      if (error) {
        setIsSuccess(false)
      }
      if (user) {
        setIsSuccess(true)
      }
    }) ()
  }, [])

  const handleLoginAndLogout = async () => {
    if (isSuccess) {
      const payload = {
        username: 'admin'
      }
      const response = await logout(payload)
      if (response) {
        if (!isLoginPage()) {
          toast.success('Logout sucessful!');
          router.refresh()
          router.push('/login')
        }
      }
    } else {
      if (!isLoginPage()) {
        router.refresh()
        router.push('/login')
      }
    }
  }

  return (
    <>
      <nav className={`border-gray-200 dark:border-gray-700 relative z-10 ${isLoginPage() ? 'bg-gray-500' : 'transparent'}`} >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 text-gray-900">
          <Link href="/" className="flex items-center text-white no-underline">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Clean Blog</span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="bg-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={handleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg enableBackground="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="#121313" id="Close" /><g /><g /><g /><g /><g /><g /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium items-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 rounded md:p-0 text-[16px]">
                <Link href="/" className="no-underline text-gray-50 hover:text-brand-grey-500" >
                  HOME
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]" >
                <Link href="/about" className="no-underline text-gray-50 hover:text-brand-grey-500" >
                  ABOUT
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <Link href="/contact" className="no-underline text-gray-50 hover:text-brand-grey-500" >
                  CONTACT
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <Link href="/post/create" className="no-underline text-gray-50 hover:text-brand-grey-500" >
                  CREATE POSTS
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <button
                  type="button"
                  className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  onClick={handleLoginAndLogout}
                >
                  {isSuccess ? 'LOGOUT' : 'LOGIN'}
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col absolute w-full shadow-xl p-[20px] items-center md:flex-row md:ml-auto mt-3 md:mt-0 bg-white">
            <ul className="flex flex-col font-medium items-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 rounded md:p-0 text-[16px]">
                <Link onClick={closeMenuOpen} href="/" className="no-underline text-brand-grey-300 hover:text-brand-grey-500" >
                  HOME
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]" >
                <Link onClick={closeMenuOpen} href="/about" className="no-underline text-brand-grey-300 hover:text-brand-grey-500" >
                  ABOUT
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <Link onClick={closeMenuOpen} href="/contact" className="no-underline text-brand-grey-300 hover:text-brand-grey-500" >
                  CONTACT
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <Link onClick={closeMenuOpen} href="/post/create" className="no-underline text-brand-grey-300 hover:text-brand-grey-500" >
                  CREATE POSTS
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[16px]">
                <button
                  type="button"
                  className="inline-block rounded-full border-2 border-gray-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-10 hover:text-gray-500 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  onClick={() => {
                    handleLoginAndLogout()
                    closeMenuOpen()
                  }}
                >
                  {isSuccess ? 'LOGOUT' : 'LOGIN'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavigationBar