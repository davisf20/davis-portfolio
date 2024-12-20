import ButtonGlass from '@/app/components/Buttons/ButtonGlass';
import Card from '@/app/components/Cards/Card';
import { FaLinkedin } from 'react-icons/fa';
import { LuGithub, LuMail } from 'react-icons/lu';

const Contacts = () => {
  return (
    <Card
      title='Contacts'
      description='Here is how you can reach me:'
      lowerElement={
        <div className='flex w-full flex-col items-center gap-y-2'>
          <ButtonGlass
            onClick={() => {
              window.open(
                'mailto:davis.fusco.20@gmail.com',
                '_blank',
                'noopener noreferrer'
              );
            }}
            text={
              <div className='flex items-center gap-x-2'>
                <LuMail /> davis.fusco.20@gmail.com
              </div>
            }
            className='w-full'
          />
          <ButtonGlass
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/davis-fusco/',
                '_blank',
                'noopener noreferrer'
              );
            }}
            text={
              <div className='flex items-center gap-x-2'>
                <FaLinkedin /> LinkedIn
              </div>
            }
            className='w-full'
          />
          <ButtonGlass
            onClick={() => {
              window.open(
                'https://github.com/davisf20',
                '_blank',
                'noopener noreferrer'
              );
            }}
            text={
              <div className='flex items-center gap-x-2'>
                <LuGithub /> GitHub
              </div>
            }
            className='w-full'
          />
        </div>
      }
    />
  );
};

export default Contacts;
