import Image from 'next/image';
import { FC, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

type CarouselProps = {
  images: string[];
};

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <>
      <div className='carousel w-full rounded-xl'>
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className='carousel-item relative w-full'
          >
            <Image
              src={image}
              className='w-full object-contain'
              alt={`Image ${index}`}
              width={1000}
              height={1000}
              onClick={() => handleImageClick(index)}
            />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform'>
              {index > 0 && (
                <a href={`#slide${index - 1}`} className='btn btn-circle'>
                  <IoIosArrowBack size={20} />
                </a>
              )}
              <div className='flex-1' onClick={() => handleImageClick(index)} />
              {index < images.length - 1 && (
                <a href={`#slide${index + 1}`} className='btn btn-circle'>
                  <IoIosArrowForward size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <dialog className='modal modal-open'>
          <div className='modal-box relative max-w-5xl bg-secondary p-9'>
            <button
              className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
              onClick={handleCloseModal}
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
                    onClick={handlePrevImage}
                    disabled={selectedImage === 0}
                  >
                    <IoIosArrowBack size={20} />
                  </button>
                )}
                <div className='flex-1' />
                {selectedImage < images.length - 1 && (
                  <button
                    className='btn btn-circle ml-4'
                    onClick={handleNextImage}
                    disabled={selectedImage === images.length - 1}
                  >
                    <IoIosArrowForward size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button onClick={handleCloseModal}>close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default Carousel;
