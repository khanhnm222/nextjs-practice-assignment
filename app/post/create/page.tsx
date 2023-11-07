'use client'
import React from 'react'
import PageHeader from '@/components/page-header';
import styles from '../../page.module.css'
import { usePostsStore } from '@/store/Posts';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
  const { addPost } = usePostsStore()
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const payload = {
      subTitle: event.currentTarget.subTitle.value,
      title: event.currentTarget.mainTitle.value,
      description: event.currentTarget.description.value,
      createdDate: new Date().toDateString(),
      author: 'Admin'
    }

    addPost(payload);
    toast.success('The new post has been created successful!');
    router.push('/')
  }

  return (
    <>
      <PageHeader
        title='Create Post'
        subHeader=''
        backgroundImage='/images/create-post-bg.jpg'
      />
      <main className={styles.main + ' max-h-[100vh !important] mt-[300px]'}>
        <div className="container mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="mx-auto max-w-[700px] md:px-3">
              <form onSubmit={handleSubmit} action="#" method="POST">
                <div className="relative mb-6">
                  <label htmlFor="mainTitle" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="mainTitle"
                    name="mainTitle"
                  />
                </div>
                <div className="relative mb-6">
                  <label htmlFor="subTitle" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Sub Title
                  </label>
                  <input
                    type="text"
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="subTitle"
                    name="subTitle"
                  />
                </div>
                <div className="relative mb-6">
                  <label htmlFor="description" className="float-left mb-[5px] block text-md font-medium leading-6 text-neutral-500">
                    Content
                  </label>
                  <textarea
                    className="border-[1px] border-slate-400 peer block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200"
                    id="description"
                    name="description"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
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