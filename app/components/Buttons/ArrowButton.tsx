type ArrowDirection = 'up' | 'down' | 'left' | 'right';

type ArrowButtonProps = {
  direction: ArrowDirection;
  onClick: () => void;
  className?: string;
};

const ArrowButton = ({ direction, onClick, className }: ArrowButtonProps) => {
  const paths: Record<ArrowDirection, string> = {
    up: 'M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z',
    down: 'M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z',
    left: 'M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z',
    right:
      'M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2H4zm10-4h2v2h-2V7zm0 0h-2V5h2v2zm0 10h2v-2h-2v2zm0 0h-2v2h2v-2z',
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-x-2 ${className}`}
    >
      <svg
        className='h-6 w-6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d={paths[direction]} fill='currentColor' />
      </svg>
      <span className='text-xs uppercase'>{direction}</span>
    </button>
  );
};

export default ArrowButton;
