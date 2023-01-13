import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux';
import Head from 'next/head';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Otobüs Uygulaması</title>
      <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
    </Head>
    <Header />
    <div className="container">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  </>
}
