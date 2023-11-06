const NotFound = () => {
  return (
    <div className="flex">
      <div className="min-h-[55vh] relative mx-auto mb-16 px-6 flex items-end md:max-w-2xl lg:max-w-5xl lg:px-12">
        <div className="relative z-10 mx-auto text-center">
          <div className="flex justify-center items-center divide-x">
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative z-10 flex justify-center items-center">
              <h1 className="relative font-bold text-gray-700 text-5xl sm:text-6xl">
                404
              </h1>
            </div>
            <div className="px-4">
              <p className="font-bold text-xl sm:text-2xl text-gray-700 dark:text-white">Page not found</p>
            </div>
          </div>
          <a href="/" aria-label="go back home" className="relative mx-auto flex h-11 w-11 items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-gray-300 before:shadow-2xl before:shadow-primary dark:shadow-none dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="relative w-5 h-5 text-primary dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
export default NotFound