import PageHeader from '@/components/page-header/page';
import styles from '../../page.module.css'

interface PostDetailProps {
  id: string | number;
  params?: any;
}

const PostDetail = ({ id = 1 }: PostDetailProps) => {
  return (
    <>
      <PageHeader
        key={id}
        title='Post Sample'
        subHeader=''
        backgroundImage='images/post-sample-image.jpg'  
      />
      <main className={styles.main + ' mt-[300px]'}>
        This is Post Sample page
      </main>
    </>
  );
}

export default PostDetail;