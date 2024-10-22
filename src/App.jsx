import { useSelector } from 'react-redux'
import './App.css'
import ImageComponent from './components/image/image.component'
import { Slide, Fade, Flip } from "react-awesome-reveal";

function App() {
  const { images } = useSelector(state=>state.image)
  return (
    <>
      <div className='container'>
        <Slide>
          <strong className='header'>Image Gallery</strong>
        </Slide>
      </div>
      <Fade triggerOnce>
        <div className="template">
          <button className="button is-danger is-rounded" style={{width: '200px',fontSize: '20px'}}>
          <Flip>Get Started</Flip>
          </button>
        </div>
      </Fade>
      <div className='container' style={{padding: '20px 0px'}}>
        <div className="grid-container">
          {
            images.map(((item,index)=>(
              <ImageComponent url={item} key={index} index={index} />
            )))
          }
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <Slide>
            <strong>Abdelmaksoud Hassan</strong>
            <address>abdelmaksoudhassan67@gmail.com</address>
            <address>01024543339</address>
          </Slide>
        </div>
      </div>
    </>
  )
}

export default App
