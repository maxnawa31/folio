import React from 'react';
import '../styles/Aboutpage.css'

const AboutPage = () => {
  return(
    <div className='aboutpage-container'>
        <div className='headline-title'>
        Looking to help businesses grow by
        delivering creative and
        meaningful design solutions that
        solve real problems.
        </div>
        <div className='row-container'>
        <div className='column-container'>
        <h3>Purposeful Solutions</h3>
          <p>Passionate about contributing to products that makes a difference.</p>

          <h3>Adaptable</h3>
          <p>Collaborating with co-workers is not a one-way process. I’ll listen and communicate effieciently.</p>

          <h3>Technology & Frameworks</h3>
          <p>React JS, HTML/CSS, React Native, MongoDB, SQL</p>

        </div>
        <div className='column-container second-column'>
        <h3>Open minded</h3>
          <p>Inspiration and creativity can be found in the most unexpected places.</p>

          <h3>Straightforward</h3>
          <p>Keep it simple and remove clutter to focus on the task at hand.</p>
        </div>

        </div>
    </div>
  )
}

export default AboutPage;
