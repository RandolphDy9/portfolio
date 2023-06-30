import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Reveal from './Reveal';

const Jumbotron = () => {

  useEffect(() => {
    setTimeout(() => {
      
    }, 10000)
  });

  return (
    <div className="jumbotron row d-flex justify-content-center align-items-center">
      <div className="column-1 d-flex flex-column justify-content-start align-items-start col-12 col-sm-7">
        <div className="highlight accent-color">Hi There! I am</div>
        <div className="primary primary-color">
          {/* Randolph Dy <span className="nickname">{"<" + "Dope" + "/>"}</span>{" "} */}
          <Typewriter
            options={{
              strings: ['Randolph Dy', 'Frontend Developer'],
              autoStart: true,
              loop: true
            }}
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter.stop();
              }, 24000)
            }}
          />
        </div>
        <Reveal>
          <div className="secondary secondary-color">
            I build digital experiences for the online world.
          </div>
        </Reveal>
        <Reveal>
          <div className="description primary-color pt-1 pb-3">
            I create the visual and interactive components of a website that users
            see and interact with. This includes integrating the appropriate
            frontend technologies and tools, and ensuring that the website is
            responsive, accessible, and optimized for performance.
          </div>
        </Reveal>
        <button className="btn-outline fs-5" onClick={() => window.open("https://www.dropbox.com/s/xakoe6rop7xc4aj/RandolphDy_resume.pdf?dl=0")}>
          Get in touch!
        </button>
      </div>
      <div className="column-2 col-12 col-sm-5">
        <img
          src={require("../assets/images/me.png")}
          alt="randolph"
          className="jumbotron-picture"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
