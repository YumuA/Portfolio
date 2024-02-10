
import '../styles/Cards.css';

interface CardsProps {
  imageSrc: string;
  title: string;
  link: string;
}

function Cards({ imageSrc, title, link }: CardsProps) {
  return (
        <div className='separador' >
        <a href={link} target="_blank">
            <div className='contorno'>
              <div className='cambio'>
                  <img src={imageSrc} height="200px" />
              </div>
            <p className='title'>{title}</p>
            </div>
        </a>
        </div>
  );
}export default Cards

