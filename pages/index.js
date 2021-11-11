import Head from 'next/head';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>KEEWEE</title>
        <meta name="description" content="The best agency" />
      </Head>      
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  }
};