import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">

      <p>
        Hi 👋, I’m <strong>Tannu Giri</strong>, a passionate Frontend Developer
        with experience in building scalable and user-friendly web applications.
      </p>

      <p>
        I specialize in <strong>React, JavaScript, HTML, and CSS</strong>, and I
        enjoy creating clean UI, optimizing performance, and writing
        maintainable code.
      </p>

      <div className="profile-contact">
        <h3>Contact</h3>
        <ul>
          <li>
            📧 Email:{" "}
            <a href="mailto:tannugiri@gmail.com">
              tannugiri@gmail.com
            </a>
          </li>
          <li>
            📞 Phone:{" "}
            <a href="tel:+919113985475">
              +91 9113985475
            </a>
          </li>
          <li>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/tannu-giri"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tannu-giri
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
