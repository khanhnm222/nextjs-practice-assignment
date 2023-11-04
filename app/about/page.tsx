import PageHeader from '@/components/page-header/page';
import styles from '../page.module.css'

const About = () => {
  return (
    <>
      <PageHeader
        title='About'
        subHeader='This is what I do.'
        backgroundImage='images/about-bg.jpg'  
      />
      <main className={styles.main + ' mt-[300px]'}>
        <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.</p>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;