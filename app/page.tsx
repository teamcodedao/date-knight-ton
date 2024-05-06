import Image from 'next/image';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import Social from './social';

import cloud1Img from './cloud-1.png';
import telegramImg from './telegram.svg';
import twitterImg from './twitter.svg';

export default function Home() {
  return (
    <main className='relative mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-white'>
      <Image
        src={cloud1Img}
        alt=''
        className='absolute -left-24 -top-12 w-[277px]'
      />
      <div className='absolute right-2 top-1 flex gap-x-2 md:right-20 lg:top-12 lg:gap-x-24'>
        <Social social='telegram' className='translate-y-20' />
        <Social social='twitter' />
      </div>
      <hgroup
        className={clsx(
          'relative z-10 pt-40 text-center sm:w-fit',
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
          'relative z-20',
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

      <div className='relative z-10 ml-[-100px] mt-[30px] w-[150%] origin-top-left rotate-[-24.1deg] bg-primary py-10'>
        <Marquee autoFill className='overflow-hidden'>
          <span className='inline-block px-10 text-[64px] text-white'>
            $datekni
          </span>
        </Marquee>
      </div>

      <div className='-mt-80'>
        <div className='flex justify-center'>
          <div className='self-end max-lg:hidden'>
            <img src='/soldier-6.gif' alt='' className='w-[512px]' />
          </div>
          <div className='flex shrink-0 flex-col items-center'>
            <img src='/soldier-5.gif' alt='' className='w-[512px]' />
            <hgroup className='text-center'>
              <h2 className='font-knight text-9xl text-primary'>Tokenomics</h2>
              <div className='mt-5 text-5xl font-bold'>Supply: 400.000.000</div>
              <div className='mt-5 text-[32px]'>
                No presale | No farming | No secret algo <br /> No claim process
                | No paid marketing <br /> No team allocation | No favoritism to
                whales
              </div>
            </hgroup>
          </div>
        </div>
      </div>

      <div className='mt-32'>
        <div className='flex'>
          <div className='overflow-hidden max-lg:hidden'>
            <img
              src='/soldier-7.gif'
              alt=''
              className='-mb-16 w-[664px] self-end'
            />
          </div>
          <div className='relative shrink-0'>
            <img
              src='/soldier-8.gif'
              alt=''
              className='absolute -bottom-5 left-0 w-[326px]'
            />
            <img
              src='/soldier-9.gif'
              alt=''
              className='absolute -bottom-16 -right-72 w-[410px]'
            />
            <h2 className='relative z-10 text-center font-knight text-9xl text-primary'>
              Community
            </h2>
            <div className='relative z-10 mt-7 flex justify-center gap-x-10'>
              <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
                <Image src={telegramImg} alt='' className='size-[88px]' />
              </a>
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
                <Image src={twitterImg} alt='' className='size-[88px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
