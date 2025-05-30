import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Холбоо барих | Legoblock.mn',
  description: 'Та бидэнтэй холбоо барих',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
