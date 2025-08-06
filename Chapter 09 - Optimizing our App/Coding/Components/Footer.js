// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/tannu-giri/"
        target="_blank"
        title="Tannu Giri's Linkedin Profile"
      >
        Tannu Giri
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/tannugiri11/swiggy_project"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
