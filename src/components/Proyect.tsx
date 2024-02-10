import Cards from "./Cards";


function Proyect () {
    return(
    <>
    <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <p>Welcome to my little projects </p>
        </div>
        <div className="carticas">
        <Cards 
        imageSrc="/zeldavalen.jpg"
        title="ZeldaGame - Python"
        link="https://github.com/YumuA/ZeldaGame"/>
        <Cards 
        imageSrc="https://cyberhoot.com/wp-content/uploads/2019/12/what-is-a-keylogger-featured-image-big.png"
        title="Keylogger - C ++"
        link="https://github.com/YumuA/KeyLogger"/>

        <Cards 
        imageSrc="/pngwing.com (1).png"
        title="Django - Backend"
        link="https://github.com/YumuA/ZeldaGame"/>
        </div>
        <div className='contratar contratar1'>
          <a href="https://github.com/YumuA">
            <button className='' >View More</button>
          </a>
        </div>
        
      </section>
      </>
      )
}
export default Proyect;