import Navigate from '@/components/Navigate';
import SectionLayout from '@/layouts/SectionLayout';

const page = () => {
  return (
    <SectionLayout>
      <Navigate href={'/'}>Home | return to Main</Navigate>
    </SectionLayout>
  );
};

export default page;
