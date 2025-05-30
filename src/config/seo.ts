import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Legoblock.mn - Монголын анхны лего блокын үйлдвэр',
  description: 'Эрчим хүч хэмнэдэг, бат бөх, хурдан барих боломжтой барилгын материал үйлдвэрлэгч',
  keywords: ['лего блок', 'барилгын материал', 'дулаалгатай блок', 'хөнгөн блок', 'барилга'],
  authors: [{ name: 'Legoblock.mn' }],
  generator: 'Next.js',
  applicationName: 'Legoblock.mn',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://legoblock.mn'),
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Legoblock.mn',
    description: 'Монголын анхны лего блокын үйлдвэр',
    url: '/',
    siteName: 'Legoblock.mn',
    locale: 'mn_MN',
    type: 'website',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};
