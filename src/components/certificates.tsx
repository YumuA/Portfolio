
interface CardsProps {
    imgcertificado: string;
    time: string;
    certificado: string;
    linkcerti: string;
}

function Certificates ({imgcertificado,time, certificado,linkcerti}: CardsProps){
    const handleDownload = () => {
        if (window.confirm('Do you want download this certificate?')) {
            window.location.href = linkcerti;
        }
    };

    return(
        <div className="flex">
            <div className='block'>
                <img width={'500px'} src={imgcertificado} onClick={handleDownload} style={{ cursor: 'pointer' }}/>
            </div>
            <div>
                <p className="title">{certificado}</p>
                <p className="title">{time}</p>
            </div>
        </div>
    );
}

export default Certificates;
