import '../styles/Content.css'
import About from './About';
import Contact from './Contact';
import Proyect from './Proyect';


function Content() {
    return(
        <>
          <div className='cards'>
            <Proyect />
          </div>
          <div className='cards'>
          <About />
          </div>
          <div className='cards'>
            
          <Contact />
          </div>
        </>
    )
}
export default Content;