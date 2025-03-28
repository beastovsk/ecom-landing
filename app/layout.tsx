import localFont from 'next/font/local';
import '@/src/styles/global.scss';
import {Metadata} from 'next';
import ClientProvider from '@/modules/ClientProvider';
import React from 'react';
import Head from 'next/head';

import YandexMetrika from 'next-yandex-metrika';
import {ThemeButton} from '@/components/ThemeButton/ThemeButton';
import {keywords} from '@/src/helpers/keywords';
import Script from 'next/script';

const gilroy = localFont({
  src: [
    {
      path: './../public/fonts/Gilroy-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../public/fonts/Gilroy-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ]
});

export async function getStaticProps() {
  return {props: {title: 'Готовый магазин'}};
}

export const metadata: Metadata = {
  title: {
    default: 'Готовый интернет-магазин под ключ',
    template: `%s | Ecom Store`
  },
  description: 'Современные интернет-магазины с удобной админкой и высокой скоростью',
  keywords: keywords,
  openGraph: {
    title: 'Готовый интернет-магазин под ключ',
    description: 'Запустите интернет-магазин за 1 день с админкой и SEO.',
    url: 'https://ecom-store.ru/',
    siteName: 'Ecom Store',
    images: [
      {
        url: 'https://i.imgur.com/zIDRkue.png',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Готовый интернет-магазин под ключ',
    description: 'Интернет-магазин с быстрой загрузкой и удобной админкой.',
    images: ['https://i.imgur.com/zIDRkue.png']
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        {/* <meta name='yandex-verification' content='c4492d1cc4639f2c' /> */}
        {/* <YandexMetrika yid={94315700} clickmap={true} trackLinks={true} accurateTrackBounce={true} webvisor={true} /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Готовый интернет-магазин под ключ – Быстро и с админ-панелью</title>
        <meta
          name='description'
          content='Современные интернет-магазины с удобной админкой и высокой скоростью. Запуск за 24 часа!'
        />
        <meta name='keywords' content='интернет-магазин, готовый магазин, бизнес онлайн, ecom store' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://ecom-store.ru/' />

        {/* Open Graph для соцсетей */}
        <meta property='og:title' content='Готовый интернет-магазин под ключ' />
        <meta property='og:description' content='Запустите интернет-магазин за 1 день с админкой и SEO.' />
        <meta property='og:image' content='https://i.imgur.com/zIDRkue.png' />
        <meta property='og:url' content='https://ecom-store.ru/' />
        <meta property='og:type' content='website' />

        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Готовый интернет-магазин под ключ' />
        <meta name='twitter:description' content='Интернет-магазин с быстрой загрузкой и удобной админкой.' />
        <meta name='twitter:image' content='https://i.imgur.com/zIDRkue.png' />
      </Head>
      <body>
        <main className={gilroy.className}>
          <ClientProvider>{children}</ClientProvider>
        </main>

        <Script>
          {`(function(w, d, s, h, id) {
          w.roistatProjectId = id; w.roistatHost = h;
          var p = d.location.protocol == "https:" ? "https://" : "http://";
          var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
          var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
      })(window, document, 'script', 'cloud.roistat.com', '466b219bcd9a5880c2c88fa4c292c3d9')`}
        </Script>
      </body>
      <Script type='text/javascript'>
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98258791, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}
      </Script>
      <Script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Готовый интернет-магазин',
          image: 'https://i.imgur.com/zIDRkue.png',
          description: 'Современный интернет-магазин с SEO-оптимизацией.',
          brand: {'@type': 'Brand', name: 'Ecom Store'},
          offers: {
            '@type': 'Offer',
            price: '110000',
            priceCurrency: 'RUB',
            availability: 'https://schema.org/InStock'
          }
        })}
      </Script>
    </html>
  );
}
