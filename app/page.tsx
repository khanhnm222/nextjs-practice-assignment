
import { PostSection } from '@/components'
import PageHeader from '@/components/page-header/page'
import styles from './page.module.css'

export default function Home() {
  const data = [{
    id: 1,
    title: 'Man must explore, and this is exploration at its greatest',
    subTitle: 'Problems look mighty small from 150 miles up',
    author: 'Start Bootstrap',
    createdDate: 'September 24, 2014',
  }]

  return (
    <>
      <PageHeader
        title='Clean Blog'
        subHeader='A Clean Blog Theme by Start Bootstrap'
        backgroundImage='images/home-bg.jpg'
      />
      <main className={styles.main + ' mt-[300px]'}>
        <div className=''>
          <div className="col-lg-8 col-lg-offset-2 col-md-offset-1 m-auto">
            {data && data.map(post => (
              <PostSection
                key={post.id}
                title={post.title}
                author={post.author}
                createdDate={post.createdDate}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
