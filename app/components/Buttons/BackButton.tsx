import { Section } from '@/app/pageSections/Section';
import { FC } from 'react';

type BackButtonProps = {
  onSectionChange: (section: Section) => void;
};

const BackButton: FC<BackButtonProps> = ({ onSectionChange }) => {
  return (
    <button
      onClick={() => onSectionChange('menu')}
      className='flex items-center gap-x-2'
    >
      <svg
        className='h-6 w-6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path
          d='M18 8H8V6H6v2H4v2h2v2h2v-2h10v10h2V8h-2zM8 12v2h2v-2H8zm0-6V4h2v2H8z'
          fill='currentColor'
        />
      </svg>
      <span className='text-xs uppercase'>Esc</span>
    </button>
  );
};

export default BackButton;
