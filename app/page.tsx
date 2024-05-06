import Image from 'next/image';
import clsx from 'clsx';

import Social from './social';

import cloud1Img from './cloud-1.png';

export default function Home() {
  return (
    <main className='relative mx-auto min-h-screen max-w-[1440px]'>
      <Image
        src={cloud1Img}
        alt=''
        className='absolute -left-24 -top-12 z-[-1] w-[277px]'
      />
      <div className='absolute right-2 top-1 z-[-1] flex gap-x-2 md:right-20 lg:top-12 lg:gap-x-24'>
        <Social social='telegram' className='translate-y-20' />
        <Social social='twitter' />
      </div>
      <hgroup
        className={clsx(
          'pt-40 text-center sm:w-fit ',
          'sm:pl-10 md:pl-20 lg:pl-32'
        )}
      >
        <h1 className='font-knight text-8xl text-primary sm:text-9xl'>
          Date Knight
        </h1>
        <div className='text-3xl uppercase'>Contract Address:</div>
        <div className='-mt-1.5 break-all text-2xl sm:text-3xl'>
          {process.env.NEXT_PUBLIC_COIN_ADDRESS}
        </div>
      </hgroup>

      <div
        className={clsx(
          'mt-48 flex pb-[13.75rem]',
          'bg-[url(/road.png)] bg-bottom bg-no-repeat'
        )}
      >
        <div className='flex grow flex-col'>
          <img src='/soldier-1.gif' alt='' className='w-[512px]' />
          <img src='/soldier-2.gif' alt='' className='w-[314px]' />
          <img src='/soldier-3.gif' alt='' className='w-[349px]' />
        </div>
        <div className='relative mr-28 shrink-0'>
          <img
            src='/soldier-4.gif'
            alt=''
            className='absolute -right-24 top-1/2 w-[276px] -translate-y-1/2'
          />
          <img src='/castle-1.png' alt='' className='relative z-10' />
          <img
            src='/castle-2.png'
            alt=''
            className='absolute -left-44 -top-40'
          />
          <img
            src='/castle-3.gif'
            alt=''
            className='absolute right-[12.5rem] top-[-17rem]'
          />
        </div>
      </div>
    </main>
  );
}
