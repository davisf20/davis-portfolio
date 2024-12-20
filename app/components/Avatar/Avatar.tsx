import Image from 'next/image';
import { FC } from 'react';

type AvatarProps = {
  src: string;
};

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <div className='avatar'>
      <div className='w-24 rounded-full'>
        <Image src={src} alt='avatar' width={100} height={100} />
      </div>
    </div>
  );
};

export default Avatar;
