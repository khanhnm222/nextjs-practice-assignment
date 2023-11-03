
import PageHeader from '@/components/page-header/page'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader
        title='Clean Blog'
        subHeader=''
        backgroundImage='images/home-bg.jpg'  
      />
      This is Home Page
    </main>
  )
}
