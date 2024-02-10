import React from 'react';
import Certificates from './certificates';

function About() {
  return (
    <>
    <section id="about">
      <h2>About me</h2>
      <p>Hi! I'm <span>Santiago Rojas</span>, a systems engineer with extensive experience in software development and a solid understanding of various programming languages. In addition to my skills in Python, C++, React, Javascript and Dart-flutter, I hold certifications in Cisco. These certifications support my knowledge in operating system and network administration, which allows me to offer comprehensive solutions tailored to the specific needs of each project. From the design of software architectures to the implementation of network infrastructures, I am prepared to face any technical challenge with professionalism and excellence. If you are looking for a systems engineer with solid technical skills and recognized certifications in the technology field, feel free to contact me to discuss your next project!</p>
      <h2>Certificates</h2>
      
        <Certificates
        linkcerti='https://www.netacad.com/portal/letters_certificates/generate_certificate/2908702/1013374976/1054975285'
        imgcertificado='/certificadolinux.jpg'
        certificado='Linux Essential'
        time='2023'
        />
        <Certificates
        linkcerti=''
        imgcertificado='data:image/jpeg;base64,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'
        certificado='CCNA'
        time='2024'
        />
   
    </section>
    </>
  );
}

export default About;
