'use client';
import { Loader } from '@/components/elements';
import { Wrapper } from '@/components/styles';
import dynamic from 'next/dynamic';

const SubCategories = dynamic(
  () => import('@/views/Home/components/SubCategories/SubCategories'),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);
export default function ServicesPage() {
  return (
    <Wrapper>
      <SubCategories />
    </Wrapper>
  );
}
