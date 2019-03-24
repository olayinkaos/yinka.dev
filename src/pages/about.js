import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './about.module.css'
import yinkaImage from '../images/olayinka-omole.jpg'

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="about" image={yinkaImage} />

        <div className="container">
          <div className="row">
            <div id="intro-shapes-container">
              <div id="intro-shapes" className="a-5">
                <div className={styles.heroImgContainer}>
                  <figure id="about-image">
                    <img
                      className={styles.heroImg}
                      src={yinkaImage}
                      alt="Olayinka Omole at the beach"
                    />
                    <figcaption>
                      <small>me at the beach.</small>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div id="intro-text-container">
              <div id="intro-text">
                <h2 className="a-1">software developer &amp; human</h2>

                <div className="a-3">
                  <p>
                    I'm olayinka omole, or just yinka (pronounced yeen-ka), a
                    software developer currently based in London. I spend most
                    of my time building and maintaining software that make
                    people's lives easier.
                  </p>

                  <p>
                    I have had the privilege to work with lots of amazing people
                    at different organisations, including the largest hotel
                    booking agency in Nigeria, and a couple of Fortune 500
                    companies. You can see my full work history on{' '}
                    <a href="https://www.linkedin.com/in/olayinka-success-omole-26274b82/">
                      LinkedIn
                    </a>
                    .
                  </p>

                  <p>
                    Some of my work have been published. These include&nbsp;
                    <a href="https://www.researchgate.net/publication/304351546_Development_of_a_Smart_Low-cost_and_IoT-enabled_System_for_Energy_Management">
                      a paper on the use of the Internet of Things for energy
                      management
                    </a>{' '}
                    and{' '}
                    <a href="https://www.amazon.com/Server-development-Node-js-Koa-js-Quick-ebook/dp/B07L73SD4Z">
                      a book on the use of Koa for modern web development
                    </a>
                    .
                  </p>

                  <p>
                    In my spare time I love to{' '}
                    <a href="https://open.spotify.com/user/olayinkaos">
                      listen to music
                    </a>
                    ,{' '}
                    <a href="https://www.goodreads.com/user/show/48035339-olayinka-success">
                      read all kinds of books
                    </a>
                    , sketch, <Link to="/photos">take pictures</Link>, play the
                    guitar, <Link to="/blog">write articles</Link>, work on
                    small DIY electronics projects, and watch funny TV shows. I
                    have a lot of hobbies ( ._.)
                  </p>

                  <p>
                    You can find me on{' '}
                    <a href="http://twitter.com/olayinkaos">Twitter</a>,{' '}
                    <a href="http://github.com/olayinkaos">Github</a>,{' '}
                    <a href="http://instagram.com/olayinkaos">Instagram</a> and{' '}
                    <a href="http://medium.com/@olayinka.omole">Medium</a>. You
                    can also just send me a mail if you want to discuss anything
                    interesting -{' '}
                    <a href="mailto:me@olayinkaos.com">me@olayinkaos.com</a>.
                  </p>

                  <p>
                    I’ve appeared in some press for a few of my projects. You
                    can read about some of them here:
                  </p>

                  <ul className="content-list">
                    <li>
                      <a href="http://venturesafrica.com/worklogs-slack-for-remote-employees/">
                        This new Slack integration developed by Nigerian coders
                        helps track time for remote employees
                      </a>
                      <p className="subtitle"><small>Ventures Africa</small></p>
                    </li>
                    <li>
                      <a href="https://techcabal.com/2015/09/29/welcome-to-redtown-digital-a-digital-content-creation-startup/">
                        Welcome to Redtown Digital, a startup specialising in
                        digital content creation
                      </a>
                      <p className="subtitle"><small>TechCabal</small></p>
                    </li>
                    <li>
                      <a href="http://thenationonlineng.net/online-store-for-covenant-university/">
                        Online store for Covenant University
                      </a>
                      <p className="subtitle"><small>The Nation</small></p>
                    </li>
                    <li>
                      <a href="https://www.vanguardngr.com/2016/11/hotels-ng-develops-universal-location-solution-e-commerce-companies/">
                        Hotels.ng develops universal location solution for
                        e-commerce companies
                      </a>
                      <p className="subtitle"><small>Vanguard Nigeria</small></p>
                    </li>
                    <li>
                      <a href="http://wunderkidblog.news/youths-participation-in-nigerian-elections/">
                        Youths participation in Nigerian Elections
                      </a>
                      <p className="subtitle"><small>wunderkidblog</small></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About
