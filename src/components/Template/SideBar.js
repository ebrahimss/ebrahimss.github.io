import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        {/* <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" /> */}
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" style={{ width: '300px', height: '300px' }} />
      </Link>
      <header>
        <h2>Ebrahim Sharifnia</h2>
        <p><a href="mailto:ebrahim.sharif.n@gmail.com">ebrahim.sharif.n@gmail.com</a></p>
      </header>
      <p>Greetings! I&apos;m Ebrahim Sharifnia, a data scientist and research scientist in optimization and data-driven decision-making. I haev a PhD in Industrial Engineering from the <a href="https://ise.utk.edu//">University of Tennessee</a>, where I also pursued a concurrent Master&apos;s degree in statistics at the <a href="https://haslam.utk.edu/</p>">Haslam College of Business</a>. My earlier master&apos;s study at <a href="https://en.sharif.edu///">Sharif University of Technology</a> gave me a solid technical and analytical background.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
      <ContactIcons />
      {/* <p className="copyright">&copy;}
      { Ebrahim Sharifnia <Link to="/">ebrahim.sharif.n@gmail.com</Link>.</p> */}
    </section>

    {/* <section id="footer">

    </section>

    <section className="blurb" style={{ width: '400px', margin: '0 auto', padding: '10px' }}>

    </section> */}

  </section>
);

export default SideBar;
