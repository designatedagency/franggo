import { GoogleTagManager } from '@next/third-parties/google';
import moment from 'moment';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { strings } from '../lib/constants/languages/strings';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  strings.setLanguage(router.locale ? router.locale.split("-")[0] : "nl");
  moment.locale(strings.getLanguage());

  return <>
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-MCTQDSQM" />
  </>
}

export default MyApp
