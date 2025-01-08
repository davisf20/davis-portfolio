import Image from 'next/image';
import { FC, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ModalImagePreview from '../Modals/ModalImagePreview';

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
        <ModalImagePreview
          images={images}
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </>
  );
};

export default Carousel;
