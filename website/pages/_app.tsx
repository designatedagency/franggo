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

    {/* Cookiebot recurrance fix */}
    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7431cf9b-4fcd-418a-b2a5-49f8e888a261" data-blockingmode="auto" type="text/javascript" async></script>

    <GoogleTagManager gtmId="GTM-MCTQDSQM" />
  </>
}

export default MyApp
