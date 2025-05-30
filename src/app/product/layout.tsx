import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Бүтээгдэхүүн | Legoblock.mn',
  description: 'Эрчим хүч хэмнэдэг, бат бөх, хурдан барих боломжтой барилгын материал',
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
