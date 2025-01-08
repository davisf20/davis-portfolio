import { FC, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import useIsMobile from '@/app/hooks/useIsMobile';

type ModalImagePreviewProps = {
  images: string[];
  selectedImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  maxWidth?: string;
  maxHeight?: string;
};

const ModalImagePreview: FC<ModalImagePreviewProps> = ({
  images,
  selectedImage,
  onClose,
  onPrev,
  onNext,
  maxWidth = 'max-w-7xl',
  maxHeight = 'max-h-[70vh]',
}) => {
  const isMobile = useIsMobile();

  return (
    <dialog className='modal modal-open'>
      <div
        className={`modal-box relative bg-secondary ${
          isMobile ? 'm-0 w-screen p-2' : 'md:p-9'
        } ${maxWidth}`}
      >
        <button
          className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 z-10'
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>
        <div className='relative flex items-center justify-center'>
          <Image
            src={images[selectedImage]}
            alt={`Preview ${selectedImage}`}
            width={1200}
            height={1200}
            className={`${
              isMobile
                ? 'max-h-screen w-full rounded-xl object-contain'
                : `${maxHeight} w-auto rounded-xl object-contain`
            }`}
            priority
          />
          <div className='absolute left-7 right-7 top-1/2 flex -translate-y-1/2 transform'>
            {selectedImage > 0 && (
              <button
                className='btn btn-circle btn-sm bg-tertiary md:btn-md hover:bg-secondary'
                onClick={onPrev}
                disabled={selectedImage === 0}
              >
                <IoIosArrowBack size={isMobile ? 16 : 20} />
              </button>
            )}
            <div className='flex-1' />
            {selectedImage < images.length - 1 && (
              <button
                className='btn btn-circle btn-sm bg-tertiary md:btn-md hover:bg-secondary'
                onClick={onNext}
                disabled={selectedImage === images.length - 1}
              >
                <IoIosArrowForward size={isMobile ? 16 : 20} />
              </button>
            )}
          </div>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default ModalImagePreview;
