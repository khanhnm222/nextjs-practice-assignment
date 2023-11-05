'use client'
import { Post } from '@/app/utils/models/Post';
import PageHeader from '@/components/page-header';
import { usePostsStore } from '@/store/Posts';
import { useEffect, useState } from 'react';
import styles from '../../page.module.css'
import parse from 'html-react-parser';
import { usePathname } from 'next/navigation';


const PostDetail = () => {
  const [postDetail, setPostDetail] = useState<Post>();
  const { posts } = usePostsStore()
  const currentPathName = usePathname()


  useEffect(() => {
    if (posts) {
      const id = currentPathName.substring(1)
      const post = posts.filter(post => post.id === id)[0]
      setPostDetail(post)
    }
  }, [posts, currentPathName])

  return (
    <>
      <PageHeader
        key={currentPathName}
        detailPage
        title={postDetail?.title || ''}
        subHeader={postDetail?.subTitle || ''}
        backgroundImage='/images/post-bg-1.jpg'
        author={postDetail?.author || ''}
        createdDate={postDetail?.createdDate || ''}
      />
      <main className={styles.main + ' mt-[300px]'}>
        {parse(postDetail?.description || '')}
      </main>
    </>
  );
}

export default PostDetail;