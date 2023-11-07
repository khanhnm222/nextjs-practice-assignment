'use client'
import { Post } from '@/app/utils/models/Post';
import PageHeader from '@/components/page-header';
import { usePostsStore } from '@/store/Posts';
import { useEffect, useState } from 'react';
import styles from '../../page.module.css'
import parse from 'html-react-parser';
import { usePathname } from 'next/navigation';
import { PageProps } from '@/.next/types/app/page';
import { notFound } from "next/navigation"

const PostDetail = ({ params }: PageProps) => {
  const [postDetail, setPostDetail] = useState<Post>();
  const { posts } = usePostsStore()
  const currentPathName = usePathname()
  

  useEffect(() => {
    if (posts) {
      const post = posts.filter(post => post.id == params.id)[0]
      if (!post) {
        notFound()	
      } else {
        setPostDetail(post)
      }
    }
  }, [posts, params])

  return (
    <>
      <PageHeader
        key={currentPathName}
        detailPage
        title={postDetail?.title || ''}
        subHeader={postDetail?.subTitle || ''}
        backgroundImage='/images/post-bg-2.jpg'
        author={postDetail?.author || ''}
        createdDate={postDetail?.createdDate || ''}
      />
      <main className={styles.main + ' mt-[300px] md:mt-[550px] lg:mt-[500px]'}>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 m-auto">
                {parse(postDetail?.description || '')}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default PostDetail;