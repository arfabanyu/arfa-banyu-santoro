'use client';

const BackgroundVideo = () => {
  return (
    <video
      className='fixed w-full top-0 -z-10 left-0 opacity-20'
      src='/videos/tv_noise_2.mp4'
      autoPlay
      muted
      loop
      playsInline
    ></video>
  );
};

export default BackgroundVideo;
