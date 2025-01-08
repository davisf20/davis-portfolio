import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

type ModalImagePreviewProps = {
  images: string[];
  selectedImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const ModalImagePreview: FC<ModalImagePreviewProps> = ({
  images,
  selectedImage,
  onClose,
  onPrev,
  onNext,
}) => {
  return (
    <dialog className='modal modal-open'>
      <div className='modal-box relative max-w-5xl bg-secondary p-9'>
        <button
          className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>
        <div className='relativeflex items-center justify-center'>
          <Image
            src={images[selectedImage]}
            alt={`Preview ${selectedImage}`}
            width={1200}
            height={1200}
            className='max-h-[70vh] w-auto rounded-xl object-contain'
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform'>
            {selectedImage > 0 && (
              <button
                className='btn btn-circle mr-4'
                onClick={onPrev}
                disabled={selectedImage === 0}
              >
                <IoIosArrowBack size={20} />
              </button>
            )}
            <div className='flex-1' />
            {selectedImage < images.length - 1 && (
              <button
                className='btn btn-circle ml-4'
                onClick={onNext}
                disabled={selectedImage === images.length - 1}
              >
                <IoIosArrowForward size={20} />
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
