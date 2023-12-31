
'use client'
import { PostSection } from '@/components'
import PageHeader from '@/components/page-header'
import Spinner from '@/components/spinner'
import { usePostsStore } from '@/store/Posts'
import styles from './page.module.css'
import { Post } from './utils/models/Post'

export default function Home() {
  const { posts } = usePostsStore()

  return (
    <>
      <PageHeader
        title='Clean Blog'
        subHeader='A Clean Blog Theme by Start Bootstrap'
        backgroundImage='/images/home-bg-1.jpg'
      />
      <main className={styles.main + ' mt-[300px]'}>
        <div>
          <div className="col-lg-10 col-lg-offset-2 col-md-offset-1 m-auto">
            {!posts && <Spinner />}
            {posts && posts.map((post: Post, index) => (
              <PostSection
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                isNew={index === 0}
                createdDate={post.createdDate}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
