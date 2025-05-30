import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Төсөл | Legoblock.mn',
  description: 'Бидний хэрэгжүүлсэн төслүүд',
};

export const viewport: Viewport = {
  themeColor: '#colorHere',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
