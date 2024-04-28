import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Ebrahim via email @ ebrahimsharifn@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p><a href="mailto:ebrahim.sharif.n@gmail.com">ebrahim.sharif.n@gmail.com</a></p>
        <p><a href="mailto:ssharifn@tennessee.edu">ssharifn@tennessee.edu</a></p>
        <p><a href="mailto:ssharifn@vols.utk.edu">ssharifn@vols.utk.edu</a></p>
        {/* <EmailLink /> */}
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
