import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="brand">
          <img src={logo} alt="Jefrey Bonyad logo" className="brand-logo-img" />

          <div>
            <h1>Jefrey Bonyad</h1>
            <p>IoT + Web Developer</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#business-websites">Business Websites</a>
          <a href="#contact">Contact</a>
        </div>

        {/* <a href="/resume.pdf" className="resume-btn">
          Resume Download
        </a> */}
      </nav>
    </header>
  );
}

export default Navbar;