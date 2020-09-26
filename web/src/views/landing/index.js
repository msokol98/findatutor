import React, {Fragment} from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';
import Options from 'components/options';

const home = () => {
  return (
    <Fragment>

      <section className='hero is-medium orange'>
        <div className='hero-body'>
          <div className='container'>

            <div className='hero-inner'>

              <div>
                <h2 className='title has-text-white'>Sokol's Tutoring Market</h2>
                <h6 className='subtitle has-text-white'>
                    Connecting tutors and pupils in your community.</h6>
                  <div className='banner-buttons'>
                    <button style={{marginRight: '15px'}} className='button is-info is-inverted'>For Pupils</button>
                    <button className='button is-info is-inverted'>For Tutors</button>
                  </div>
              </div>
              <br />
                <div className='banner-image'>
                    <img src='tutor.png' alt='logo' width='100%'/>
                </div>
            </div>

          </div>
        </div>          
      </section>

      <section className='section has-background-white'>
        <Options />
      </section>

      <section className='section has-background-light'>
        <div className='container'>
          <div className='content'>

            <div className='columns is-variable is-7'>
              <div className='column'>
                <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='money.png' alt='money' width='75'/>
                  </div>                  
                  <h3 className='title has-text-weight-light'>Low Prices</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>We'll keep your wallet happy.</h5>
                  <p>Pupils can use our site for free. That's right. FREE! Tutors will keep 95% of the wage.
                     But the leads you'll make here more than make up for the 5%.
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='clock.webp' alt='money' width='75'/>
                  </div>
                  <h3 className='title has-text-weight-light'>Quick Service</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>You'll find a tutor in no time.</h5>
                  <p>We have thousands of users across North American using our site. If you have a test upcoming, 
                     do not worry. We have a tutor near you eager to help.
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <div className='home-icon-wrapper'>
                    <img src='honesty.png' alt='money' width='75'/>
                  </div>                  
                  <h3 className='title has-text-weight-light'>Honest Work</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>Family-friendly service for the community.</h5>
                  <p>We thoroughly vet all tutors who use are sight. So you will learn from your local tutor and 
                     can feel safe doing so. Get in touch with a local tutor today.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>          
      </section>
      <section className='section has-background-white'>
        <div className='container'>
          <div className='content'>
            <h2 className='title has-text-weight-light'>Users are saying...</h2>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon' >
                <p className='image is-64x64'>
                  <img src='person.png' alt='person' />
                </p>
                <div>Mike S.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                      I needed help in calculus, and online YouTube videos weren't cutting it for me. I found a 
                      great math tutor in my local community on this site. I have made such great progress!
                      I cannot reccommend this site enough. If you are looking for a tutor in your area, get started today.
                </blockquote>
              </div>
            </article>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon'>
                <p className='image is-64x64'>
                  <img src='person2.png' alt='person2' />
                </p>
                <div>Wendy E.</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                      This site has connected me to over a dozen pupils in my town! Teaching programming is 
                      something I love doing, and the money I have made is very nice too. The leads I have
                      gotten from this site are truly important to me. You should sign up right now.
                </blockquote>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className='section orange'>
        <div className='container'>
          <div className='content has-text-centered'>

            <div className='serving-nc-wrapper' >

              <div className='serving-nc'>
                <img src='nc.png' alt='nc' width='200' className='nc-image'/>

                <div>
                  <h3 className='title has-text-weight-normal has-text-white serving-nc-label'>Proudly originated in Chapel Hill, NC.</h3>
                  <h4 className='subtitle has-text-weight-normal has-text-white'>Now connecting tutors and pupils all over.</h4>
                </div>
              </div>

              <div className='is-divider' data-content='READY?'></div>

              <button className='button is-dark'>Make an account</button>
            </div>


          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <h6 className='subtitle has-text-grey'>Corporate HQ</h6>

                <div>511A Pinebluff Trail</div>
                <div>Chapel Hill, NC</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Contact</h6>

                <div>919-791-5823</div>      
                <div>contact@sokoltutoring.com</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Subjects</h6>

                <div>Math</div>
                <div>Spanish</div>
                <div>Programming</div>
                <div>And More...</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Account</h6>

                <a href='/login'>Sign In</a>
                <br></br>
                <a href='/register'>Sign Up</a>
              </div>
            </div>
          </div>

          <div className='is-divider' data-content=''></div>

          <div style={{textAlign: 'left'}}>Website by Mitchell Sokol - Personal Project 2020
            <br/>Made with React, Bulma, and Java Spring Boot
            <br/>Deployed onto the web using an AWS EC2 RHEL instance
            <br /><a href='https://github.com/msokol98'>See source code</a>
          </div>

        </div>
      </footer>
    </Fragment>
  );
}

export default home;
