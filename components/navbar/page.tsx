import Link from "next/link";

const NavigationBar = () => {
  return (
    <>
      <nav className="border-gray-200 dark:border-gray-700 bg-transparent relative z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 text-gray-900">
          <Link href="#" className="flex items-center text-white no-underline">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Clean Blog</span>
          </Link>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 rounded md:p-0">
                <Link href="/" className="no-underline text-white hover:text-brand-grey-300" >
                  HOME
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent" >
                <Link href="/about" className="no-underline text-white hover:text-brand-grey" >
                  ABOUT
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent">
                <Link href="post" className="no-underline text-white hover:text-brand-grey" >
                  POSTS
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent hover:text-brand-grey">
                <Link href="/contact" className="no-underline text-white hover:text-brand-grey" >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar