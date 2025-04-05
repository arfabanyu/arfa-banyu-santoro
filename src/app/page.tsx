import SectionLayout from '@/layouts/SectionLayout';
import Navigate from '@/components/Navigate';

export default function Home() {
  return (
    <SectionLayout>
      <div
        id='home'
        className='flex flex-col justify-between h-screen uppercase p-12'
      >
        <div className='w-full flex justify-between'>
          <span>&copy; {new Date().getFullYear()} Arfa Banyu Santoro</span>
          <button className='font-sans text-xl uppercase hover:before:content-[">_"]'>
            Menu
          </button>
        </div>
        <div className='grid gap-12'>
          <div className='space-y-4'>
            <h1 className='uppercase text-center tracking-wide text-primary-content text-9xl font-bold font-mono text-shadow selection:bg-[#f600cb] selection:text-white'>
              ARFA BANYU SANTORO
            </h1>
            <h2 className='uppercase text-shadow text-center text-xl font-mono tracking-[.5rem] text-primary-content'>
              Full-Stack Web Developer | Cyber Security Enthusiast
            </h2>
          </div>
          <div className='text-center space-y-2'>
            <Navigate
              href={'/home'}
              className='font-sans text-xl uppercase hover:before:content-[">_"] hover:after:content-["_<"]'
            >
              Start
            </Navigate>
            <br />
            <button className='font-sans text-xl uppercase hover:before:content-[">_"] hover:after:content-["_<"]'>
              Settings
            </button>
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <p>
            <span>{new Date().toDateString()}</span>
          </p>
          <p>Located in Jakarta, Indonesia.</p>
        </div>
      </div>
    </SectionLayout>
  );
}
