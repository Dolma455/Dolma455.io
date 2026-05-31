import React from 'react';
import { Clapperboard } from 'lucide-react';
import { SiCanva, SiFirebase, SiFigma, SiFlutter, SiGithub } from 'react-icons/si';
import { VscAzure, VscVscode } from 'react-icons/vsc';

const toolItems = [
  {
    href: 'https://www.figma.com/',
    label: 'Figma',
    icon: <SiFigma className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://flutter.dev/',
    label: 'Flutter',
    icon: <SiFlutter className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://www.canva.com/',
    label: 'Canva',
    icon: <SiCanva className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: <SiGithub className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://code.visualstudio.com/',
    label: 'VS Code',
    icon: <VscVscode className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://www.capcut.com/',
    label: 'CapCut',
    icon: <Clapperboard className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://azure.microsoft.com/',
    label: 'Azure',
    icon: <VscAzure className='w-8 h-8 transition-colors duration-300' />,
  },
  {
    href: 'https://firebase.google.com/',
    label: 'Firebase',
    icon: <SiFirebase className='w-8 h-8 transition-colors duration-300' />,
  },
];

// Replicate elements 6 times to ensure it spans completely beyond any screen size
const replicatedItems = [
  ...toolItems,
  ...toolItems,
  ...toolItems,
  ...toolItems,
  ...toolItems,
  ...toolItems,
];

function InfinityBandScroll() {
  return (
    <div className='w-full text-5xl py-8 inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
      <ul className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll'>
        {replicatedItems.map((item, index) => (
          <li key={`list-1-${index}`}>
            <a
              target='_blank'
              href={item.href}
              className='border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 hover:bg-zinc-200/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-800/80 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 text-2xl grid place-content-center p-3 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md'
              rel='noreferrer noopener'
              aria-label={item.label}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <ul
        className='flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 animate-infinite-scroll'
        aria-hidden='true'
      >
        {replicatedItems.map((item, index) => (
          <li key={`list-2-${index}`}>
            <a
              target='_blank'
              href={item.href}
              className='border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 hover:bg-zinc-200/80 dark:bg-zinc-900/40 dark:hover:bg-zinc-800/80 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 text-2xl grid place-content-center p-3 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md'
              rel='noreferrer noopener'
              aria-label={item.label}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InfinityBandScroll;
