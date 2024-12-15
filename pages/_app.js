import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

import '../styles/globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import FloatingBottomBar from 'components/floating';
import Footer from 'components/Footer';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Blissy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://blissy.tech" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <GoogleAnalytics gaId="G-EZF20XSVDF" />
    </Head>
    {/* <AppSidebar /> */}
    <FloatingBottomBar/>

    <Component {...pageProps} />

  </>
);

export default MyApp;
