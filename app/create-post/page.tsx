import PageHeader from '@/components/page-header/page';
import styles from '../page.module.css'

const CreatePost = () => {
  return (
    <>
      <PageHeader
        title='Create Post'
        subHeader=''
        backgroundImage='images/post-bg.jpg'  
      />
      <main className={styles.main + ' m-h-[100vh !important] mt-[300px]'}>
      <div className="container mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="mx-auto max-w-[700px] md:px-3">
              <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="Title" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90"
                    placeholder="Title"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="exampleInput91" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Sub Title
                  </label>
                  <input
                    type="email"
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput91"
                    placeholder="Email address" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlTextarea1" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Content
                  </label>
                  <textarea
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    placeholder="Your Content"
                  ></textarea>
                </div>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-slate-500 px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:bg-stone-400 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700">
                  Create
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default CreatePost;