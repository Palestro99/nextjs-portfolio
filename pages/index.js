import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Hello, I'm Simon.</h1>
        <p>
          I'm studying Sociotechnical Systems Engineering with an IT specialization at Uppsala University 
          and this is my portfolio website.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <l className={utilStyles.grid}>
        {allPostsData.map(({ id, title }) => (
          <p className={utilStyles.card} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
           
            </small>
          </p>
          ))}
        </l>
      </section>
    </Layout>
  );
}