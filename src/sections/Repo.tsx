'use client';
import { motion } from 'motion/react';
import SectionLayout from '@/layouts/SectionLayout';
import { Suspense, use, useEffect, useState } from 'react';
import Link from 'next/link';

// async function getRepos() {
//   const res = await fetch('https://api.github.com/users/arfabanyu/repos');
//   return res.json();
// }

const Repo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getRepos() {
      const res = await fetch('https://api.github.com/users/arfabanyu/repos', {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
      });
      setData(await res.json());
    }
    getRepos();
  }, []);

  console.log(data);
  return (
    <SectionLayout>
      <div>
        <h2 className='text-7xl px-6 py-12 font-mono'>My Repositories</h2>
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
              <h3 className='text-4xl font-bold uppercase'>
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
              <div className='flex gap-2 *:p-2 *:first:bg-white *:first:text-black *:last:border *:last:border-white'>
                <Link href={repo.html_url}>See Repo</Link>
                {repo.has_pages ? (
                  <Link href={repo.homepage}>See Page</Link>
                ) : (
                  ''
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
