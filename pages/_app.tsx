import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";
import Header from "../components/Header";
import "../public/assets/css/main.css";
import { SessionProvider } from "next-auth/react";
import { FC } from "react";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Otobüs Uygulaması</title>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {/* <div className="container"> */}
      <div>
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </div>
    </>
  );
}
