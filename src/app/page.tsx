import Image from 'next/image';
import banyu from '~/images/banyu_rpl.png';

export default function Home() {
  return (
    <section data-theme='dark-pink' className='magicpattern h-screen '>
      <div className='isolate'>
        <Image
          src={banyu}
          height={300}
          width={300}
          alt=''
          className='h-screen w-fit m-auto '
        />
        <div className='h-full w-1/2 absolute left-1/2 -translate-x-1/2 -top-20 object-fill bg-gradient-to-b mix-blend-soft-light from-white/40 to-transparent'></div>
        <div className='absolute top-120 left-1/2 -translate-x-1/2'>
          <h1 className='text-center text-primary-content text-9xl font-bold font-mono text-shadow selection:bg-[#f600cb] selection:text-white'>
            ARFA BANYU
          </h1>
          <h2 className='text-center font-mono tracking-[.25rem] text-primary-content'>
            Full-Stack Web Developer | Cyber Security Enthusiast
          </h2>
        </div>

        <p className='font-sans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          minus tempora. Labore aut dolorum illum et molestias commodi cum ex
          nulla, repellat id ipsum sed, distinctio atque unde dolores assumenda.
        </p>
      </div>
    </section>
  );
}
