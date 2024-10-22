import { useState } from 'react';
import styles from './img.module.css'
import ModalComponent from '../modal/modal.component'
import CarouselComponent from '../carousel/carousel.component'
import { useDispatch } from 'react-redux';
import { set } from "../../redux/image.redcer";
import { Bounce } from "react-awesome-reveal";

export default function ImageComponent({url, index}){

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
        dispatch(set(index))
    };
    
    return <>
        <div className={styles.container}>
            <Bounce triggerOnce>
                <img src={url} alt="Avatar" className={styles.image} loading='lazy' onClick={handleOpen} />
            </Bounce>
        </div>
        <ModalComponent isOpen={open} onClose={handleClose}>
            <CarouselComponent />
        </ModalComponent>
    </>
}