import Layout from "../components/layout";
import "../styles/globals.css";
import '../styles/fonts.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/svg" href='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"%3E%3Cpath fill="%23fb923c" d="m72.5 150.6l28.3-22.6l-28.3-22.6a12 12 0 1 1 15-18.8l40 32a12.1 12.1 0 0 1 0 18.8l-40 32A12.4 12.4 0 0 1 80 172a12 12 0 0 1-7.5-21.4ZM144 172h32a12 12 0 0 0 0-24h-32a12 12 0 0 0 0 24Zm92-115.5v143a20.5 20.5 0 0 1-20.5 20.5h-175A20.5 20.5 0 0 1 20 199.5v-143A20.5 20.5 0 0 1 40.5 36h175A20.5 20.5 0 0 1 236 56.5ZM212 60H44v136h168Z"%2F%3E%3C%2Fsvg%3E' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
