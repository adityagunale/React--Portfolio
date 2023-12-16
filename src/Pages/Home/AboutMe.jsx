export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">

        <div className="about--section--img">
          <img src="./img/addi33.jpg" alt="About Me" />
        </div>
        
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
              Currently Completing Full Stack Development Course At Felix It in pune, Maharastra. <br />
              Graduated with a degree in Computer Science from Shahu Collage Latur. <br />
              Constantly exploring new technologies and staying updated with industry trends. <br />
              Check out my <a href="https://www.linkedin.com/in/aditya-gunale-541317180/" id="linkedin">LinkedIn profile</a>
            </p>
            <p className="hero--section-description">
              My Approach, I believe in a collaborative and agile approach to development, focusing on delivering high-quality Web Applications that meets both user and business requirements, allowing me to create seamless and efficient user experiences.
            </p>
          </div>
        </div>
      </section>
    );
  }