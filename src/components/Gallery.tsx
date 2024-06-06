import { ImageListType } from '../types/ImageListType';
import { useState } from 'react';
import { Modal } from './Modal';


type Images = {
    images: ImageListType[]
}

export const Gallery = ({images}: Images) => {

    const [imageIndex, setImageIndex] = useState<number>(0)
    const [selectedImage, setSelectedImage] = useState<string>("")

    const openImage = (id: number): void => {
        setImageIndex(id);
        setSelectedImage(images[id].src)
    }

    const closeImage = (): void => {
        setSelectedImage("")
    }

    const prevImage = (): void => {
        const previousIndex = (imageIndex - 1 + images.length) % images.length;
        const previousImageSrc = images[previousIndex].src;
        setImageIndex(previousIndex);
        setSelectedImage(previousImageSrc);
    }

    const nextImage = (): void => {
        const nextIndex = (imageIndex + 1) % images.length;
        setImageIndex(nextIndex);
        setSelectedImage(images[nextIndex].src);
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {images.map((image) => (
                <img className='w-80 h-40 cursor-pointer border-4 border-white hover:opacity-80 hover:border-2' onClick={() => openImage(image.id-1)} key={image.id} src={image.src} />
            ))}
            {selectedImage !== "" &&
            <Modal 
            image={selectedImage} 
            closeModal={closeImage} 
            prevImage={prevImage} 
            nextImage={nextImage} /> 
            }
        </div>
    )
}