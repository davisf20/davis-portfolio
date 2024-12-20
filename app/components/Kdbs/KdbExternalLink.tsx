import { FC } from 'react';
import { LuExternalLink } from 'react-icons/lu';

type KdbExternalLinkProps = {
  link: string;
};

const KdbExternalLink: FC<KdbExternalLinkProps> = ({ link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <kbd className='kbd h-6 min-h-0 w-6 min-w-0 p-0'>
        <LuExternalLink />
      </kbd>
    </a>
  );
};

export default KdbExternalLink;
