import Image from 'next/image';
import clsx from 'clsx';

import cloud1Img from './cloud-1.png';
import telegramImg from './telegram.svg';
import twitterImg from './twitter.svg';

interface SocialProps extends React.ComponentProps<'div'> {
  social: 'telegram' | 'twitter';
}

export default function Social({className, social}: SocialProps) {
  return (
    <div className={clsx(className, 'relative')}>
      <Image src={cloud1Img} alt='' className='w-[202px]' />
      <a
        href={
          social === 'telegram'
            ? process.env.NEXT_PUBLIC_TELEGRAM_URL
            : process.env.NEXT_PUBLIC_TWITTER_URL
        }
        target={`_${social}`}
      >
        <Image
          src={social === 'telegram' ? telegramImg : twitterImg}
          alt=''
          className='absolute left-1/2 top-1/2 size-[54px] -translate-x-1/2 -translate-y-1/2'
        />
      </a>
    </div>
  );
}
