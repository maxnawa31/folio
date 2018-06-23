import React from 'react';
import '../styles/Projectpage.css'
const ProjectPage = () => {
  return(
    <div className='project-container'>
        <div className = "container">
        <figure>
      <a href="https://www.tunelark.com/" target ='blank'>
    <img src={require('../images/Tunelark-blue.png')}/>

      <figcaption><div>Tunelark</div></figcaption>
      </a>
    </figure>
    <figure>
      <a href="https://github.com/maxnawa31/art_gallery" target='blank'>
    <img src={require('../images/museum.png')}/>
    <figcaption><div>Rijksmuseum API Application</div></figcaption>
    </a>
    </figure>



    <figure>
      <a href="https://github.com/maxnawa31/my_spotify_app" target='blank'>
    <img src={require('../images/Spotify.png')}/>
      <figcaption><div>Playlist   Deck App</div></figcaption>
      </a>
    </figure>

    <figure>
      <a href="https://warbler-app.herokuapp.com/" target='blank'>
    <img src={require('../images/warbler.png')}/>
      <figcaption><div>Warbler</div></figcaption>
      </a>
    </figure>


  </div>

      <div className="icons-flex">
      <a target="_blank" href="https://www.linkedin.com/in/maximillian-nawa/">
        <div>
          <i className="icons fa fa-linkedin-square fa-5x"></i>
        </div>
      </a>
      <a target="_blank" href="https://github.com/maxnawa31">
        <div>
          <i className="icons fa fa-github fa-5x" aria-hidden="true"></i>
        </div>
      </a>
      <a href="mailto: mnawa31@gmail.com">
      <div>
        <i className="icons fa fa-envelope fa-5x" aria-hidden="true">
        </i>
      </div>
    </a>

      </div>

      </div>

  )
}

export default ProjectPage;