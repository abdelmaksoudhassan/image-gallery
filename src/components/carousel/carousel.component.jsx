import React from 'react';
import styles from './carousel.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { next, previous } from "../../redux/image.redcer";
import { Bounce } from "react-awesome-reveal";

export default function CarouselComponent() {
  const { index, images } = useSelector(state=>state.image)
  const dispatch = useDispatch()
  const handlePrevious = () => {
    dispatch(previous())
  };
  
  const handleNext = () => {
    dispatch(next())
  };
  
  return (
    <>
      <div>
        <Bounce>
        <img src={images[index]} alt="Avatar" className={styles.image} />
        </Bounce>
      </div>
      <div style={{'display': 'flex', 'justifyContent':'center'}}>
        <button onClick={handlePrevious} className={styles.prev}>Prev</button>
        <button onClick={handleNext} className={styles.next}>Next</button>
      </div>
    </>
  );
};