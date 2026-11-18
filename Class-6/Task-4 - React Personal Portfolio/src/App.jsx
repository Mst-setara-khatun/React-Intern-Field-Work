



import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <header className="header">
        <h2>SETARA<span>.</span></h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="profile-section">
        <div className="profile-image">
          <img src="/profile.jpeg" alt="Mst. Setara Khatun" />
        </div>

        <h1>Mst. Setara Khatun</h1>
        <h3>CSE Student & Aspiring Developer</h3>
        <p>Welcome to my personal portfolio.</p>
      </section>

      <main className="main-container">

        <aside className="sidebar">

          <div className="card">
            <h2>Personal Information</h2>

            <div className="info-item">
              <span>Full Name</span>
              <p>Mst. Setara Khatun</p>
            </div>

            <div className="info-item">
              <span>Gender</span>
              <p>Female</p>
            </div>

            <div className="info-item">
              <span>Department</span>
              <p>Computer Science & Engineering</p>
            </div>

            <div className="info-item">
              <span>University</span>
              <p>Northern University of Business and Technology Khulna</p>
            </div>

            <div className="info-item">
              <span>Current Status</span>
              <p>BSc in CSE - Ongoing</p>
            </div>
          </div>

          <div className="card">
            <h2>Technical Skills</h2>

            <ul className="personal-skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>C Programming</li>
              <li>Python</li>
              <li>Laravel</li>
            </ul>
          </div>

        </aside>

        <div className="content-area">

          <section id="about" className="card">
            <h2>About Me</h2>

            <p>
              I am Mst. Setara Khatun, a Computer Science and
              Engineering student at Northern University of
              Business and Technology Khulna.
            </p>

            <p>
              I am interested in web development, programming
              and software engineering. My goal is to become
              a skilled software developer and build useful
              software solutions.
            </p>
          </section>

          <section id="education" className="card">
            <h2>Educational Qualification</h2>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Examination</th>
                    <th>Institution</th>
                    <th>Board</th>
                    <th>Year</th>
                    <th>Result</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>SSC</td>
                    <td>Ichhali Secondary School</td>
                    <td>Jashore</td>
                    <td>2019</td>
                    <td>GPA 5.00</td>
                  </tr>

                  <tr>
                    <td>HSC</td>
                    <td>BAF Shaheen College, Jashore</td>
                    <td>Jashore</td>
                    <td>2021</td>
                    <td>GPA 4.61</td>
                  </tr>

                  <tr>
                    <td>BSc in CSE</td>
                    <td>Northern University of Business and Technology Khulna</td>
                    <td>-</td>
                    <td>Ongoing</td>
                    <td>Studying</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="skills" className="card">
            <h2>My Skills</h2>

            <div className="skills-container">

              <div className="skill-box">
                <h3>HTML</h3>
                <p>Web Page Structure</p>
              </div>

              <div className="skill-box">
                <h3>CSS</h3>
                <p>Web Page Styling</p>
              </div>

              <div className="skill-box">
                <h3>C Programming</h3>
                <p>Programming Fundamentals</p>
              </div>

              <div className="skill-box">
                <h3>Python</h3>
                <p>Basic Programming</p>
              </div>

              <div className="skill-box">
                <h3>Laravel</h3>
                <p>Web Development</p>
              </div>

            </div>
          </section>

          <section id="contact" className="card">
            <h2>Contact Me</h2>

            <p>
              Have a question or want to work together?
              Feel free to send me a message.
            </p>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>

            </form>
          </section>

        </div>
      </main>

      <footer>
        <p>
          Copyright &copy; 2026 Mst. Setara Khatun.
          All Rights Reserved.
        </p>

        <p>Personal Portfolio Website</p>
      </footer>

    </div>
  );
}

export default App;


