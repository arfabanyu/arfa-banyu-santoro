'use client';
import { motion } from 'motion/react';
import SectionLayout from '@/layouts/SectionLayout';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Repo = {
  name: string;
  description: string;
  html_url: string;
  has_pages: boolean;
  homepage: string;
};

const Repo = () => {
  const [data, setData] = useState<Repo[]>([]);
  // Fetch API
  useEffect(() => {
    async function getRepos() {
      try {
        const res = await fetch(
          'https://api.github.com/users/arfabanyu/repos?per_page=100&sort=pushed',
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
            },
          }
        );
        setData(await res.json());
      } catch (error) {
        console.log(error);
      }
    }
    getRepos();
  }, []);

  return (
    <SectionLayout>
      <div>
        <h2 className='text-4xl leading-12 md:text-7xl px-6 py-12 font-mono'>My Repositories</h2>
        {data.map((repo, i: number) => {
          return (
            <motion.div
              initial={{ left: '-100%' }}
              whileInView={{ left: '0' }}
              transition={{ duration: 1.5, ease: 'circInOut', delay: 0.1 }}
              viewport={{ amount: 'some', once: true }}
              key={i}
              className='border-t p-6 relative space-y-2'
            >
              <h3 className='text-4xl md:text-6xl leading-none tracking-wide font-bold uppercase'>
                {repo.name.replaceAll('-', ' ')}
              </h3>
              <p className='text-sm text-gray-400 max-w-2xl'>
                {repo.description}
              </p>
              {/* {repo.topics.length !== 0 ? (
                <div className='flex gap-2 flex-wrap max-w-2xl pt-2'>
                  {repo.topics.map((topic, i) => {
                    return (
                      <span className='border border-[#387478]  px-2 text-sm' key={i}>
                        {topic}
                      </span>
                    );
                  })}
                </div>
              ) : (
                ''
              )} */}
              <div className='flex pt-2 gap-2 *:p-2 *:first:bg-white *:first:hover:bg-gray-400 *:first:text-black *:last:ring *:last:ring-white *:last:hover:border-none *:last:hover:bg-gray *:last:hover:text-black *:transition-all'>
                <Link href={repo.html_url}>See Repo</Link>
                {repo.has_pages ? (
                  <Link href={repo.homepage}>See Page</Link>
                ) : (
                  <div className='opacity-0'></div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* <div>{repos}</div> */}
    </SectionLayout>
  );
};

export default Repo;
