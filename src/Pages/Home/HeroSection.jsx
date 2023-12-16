export default function HeroSection() {
    // const saveFile = () => {
    //     fileSaver.saveAs(
    //       process.env.REACT_APP_CLIENT_URL + "./img/Aditya_Gunale_Resume.pdf",
    //       "Aditya_CV.pdf"
         
    //     );
    //     };
    return (
        <section id="heroSection" className="hero--section">
            <div className="herp--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Aditya Gunale</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    A passionate and results-driven full-stack developer with a keen interest in building robust and scalable web applications.
                         <br />I specialize in React Devloper, and I thrive on tackling challenging problems and turning ideas into innovative solutions.
                    </p>
                </div>
                {/* <button className="btn btn-primary">Get In Toch</button> */}
                <a href="https://www.linkedin.com/in/aditya-gunale-541317180/" className="btn btn-primary">Get In Toch</a>
                {/* <button className="btn btn-primary" id="cv" onClick={saveFile}>Download My CV</button> */}
                <a href="./img/Aditya_Gunale_Resume.pdf"download className="btn btn-primary" id="cv">Download My CV</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/Aditya_1-removebg.png" alt="Hero Section" />
            </div>
        </section>

    )
}