type Props = {
    image: string;
    closeModal: () => void;
    prevImage: () => void;
    nextImage: () => void;
}


export const Modal = ({image, closeModal, prevImage, nextImage}: Props) => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
            <button className="absolute top-10 right-10 bg-slate-600 p-2 text-sm rounded-md" onClick={closeModal}>Close</button>
            <button onClick={prevImage}  className="absolute z-10 text-sm bg-slate-600 left-4 p-2 rounded-md">Prev</button>
            <button onClick={nextImage} className="absolute z-10 text-sm bg-slate-600 right-4 p-2 rounded-md">Next</button>
            <img src={`${image}`} alt="" />
        </div>
    )
}
