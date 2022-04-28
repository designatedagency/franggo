import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import moment from 'moment';
import { strings } from '../lib/constants/languages/strings';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  strings.setLanguage(router.locale ? router.locale.split("-")[0] : "nl");
  moment.locale(strings.getLanguage());

  return <Component {...pageProps} />
}

export default MyApp
