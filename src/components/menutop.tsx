import '../styles/menutop.css'



function Menutop (){
    return (
        <>
      <header className="head">
        <div className='logo'>
          <img src='/dev.svg' alt=''/>
          <h2>Ssant</h2>
        </div>

        <nav>
          <ul className='top'>
            <li className='listas'> <a href='/'>Inicio </a></li>
            <li className='listas'> <a href='/'>Projects </a></li>
            <li className='listas'> <a href='/'>About me </a></li>
            <li className='listas'> <a href='/'>Contact me </a></li>
          </ul>
        </nav>
        <div className='contratar'>
        <button className='' onClick={() => { 
          if (confirm('¿Estás seguro de que deseas descargar mi CV?')) {
              window.location.href = 'https://export-download.canva.com/DzVlU/DAFmF7DzVlU/33/0/0001-6146705791240259893.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240209T020306Z&X-Amz-Expires=89069&X-Amz-Signature=bd095de6eae3988256075e978ab9481ac92f0334ac571a5ef5a4ba9cc6fb7bf8&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Curriculum%2520Profesional%2520Sin%2520Foto%2520Sencillo%2520Blanco%2520y%2520Negro.png&response-expires=Sat%2C%2010%20Feb%202024%2002%3A47%3A35%20GMT';
          }
      }}>
        Download My CV
      </button>

        </div>
            
      </header>
      </>
    )
}

export default Menutop;