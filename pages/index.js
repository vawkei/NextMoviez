// our-domain.com
import Head from 'next/head'
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
    <Head>
      <title>Next Moviez</title>
      <meta 
      name='description'
      content='You are Welcome to Next Moviez. The Home of Moviez.'/>
    </Head>
    <div style={{ textAlign: "center" }}>
      <h1>HomePage</h1>
      <section>
        <h1>
          You Are Welcome to <span className="spin"> Next Moviez </span> <br /> Your one stop
          shop for Moviez{" "}
        </h1>
      </section>
    </div>
    </Fragment>
  );
};

export default HomePage;
