import PageHeader from '@/components/page-header';
import styles from '../page.module.css'

const Contact = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
      <PageHeader
        title='Contact'
        subHeader='Have questions? I have answers (maybe).'
        backgroundImage='images/contact-bg.jpg'
      />
      <main className={styles.main + " mt-[250px]"} >
        <div className="container mt-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="mx-auto max-w-[700px] md:px-3">
              <form onSubmit={handleSubmit} id="contactForm">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="Name" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="name"
                    placeholder="Name" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="emailAddress" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Email address
                  </label>
                  <input
                    type="emailAddress"
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="emailAddress"
                    placeholder="Email address" />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="message" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Message
                  </label>
                  <textarea
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="message"
                    rows={3}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-slate-500 px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:bg-stone-400 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700">
                  Send
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;