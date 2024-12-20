import ButtonGlass from '@/app/components/Buttons/ButtonGlass';
import Card from '@/app/components/Cards/Card';

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
            text='davis.fusco.20@gmail.com'
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
            text='LinkedIn'
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
            text='GitHub'
            className='w-full'
          />
        </div>
      }
    />
  );
};

export default Contacts;
