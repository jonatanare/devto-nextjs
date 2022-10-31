import Head from 'next/head'
import Image from 'next/image'
import HomePosts from '../components/HomePost'
import Layout from '../components/Layout'

export default function Home () {
  return (
  <>
    
    <Layout>
      <main id='main'>
        <div className='container p-1 p-lg-2 mt-4'>
          <div className='row g-4'>
            <aside className='asideleft d-none d-md-block col-md-3'>
              {/* <!-- <div className="card p-3 asideleft__card">
                        <h3 className="asideleft__title"><a className="text-primary text-decoration-none" href="#">DEV Community</a> is a community of 883,369 amazing developers</h3>
                        <p className="light asideleft__text pt-3">We're a place where coders share, stay up-to-date and grow their careers.</p>
                        <button className="mt-2 btn btn-outline-primary asideleft__btn">Create acount</button>
                        <button className="btn bg-white mt-2">Log in</button>

                    </div> --> */}

              <ul className='navbar-nav mb- mx-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-home.svg' alt='Icon' />
                    </span>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-reading.svg' alt='Icon' />
                    </span>
                    Reading List
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-letter.svg' alt='Icon' />
                    </span>
                    Listings
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-podcasts.svg' alt='Icon' />
                    </span>
                    Podcasts
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-video.svg' alt='Icon' />
                    </span>
                    Videos
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-tags.svg' alt='Icon' />
                    </span>
                    Tags
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-faq.svg' alt='Icon' />
                    </span>
                    FAQ
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        src='./assets/icons/icon-forem-shop.svg'
                        alt='Icon'
                      />
                    </span>
                    Forem Shop
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-sponsors.svg' alt='Icon' />
                    </span>
                    Sponsors
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-about.svg' alt='Icon' />
                    </span>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img src='./assets/icons/icon-contact.svg' alt='Icon' />
                    </span>
                    Contact
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        className='img-fluid'
                        src='./assets/icons/icon-guies.svg'
                        alt='Icon'
                      />
                    </span>
                    Guides
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        src='./assets/icons/icon-software-comparisons.svg'
                        alt='Icon'
                      />
                    </span>
                    Software comparisons
                  </a>
                </li>
              </ul>
              <h2 className='other-title'>Other</h2>
              <ul className='navbar-nav'>
                <li className='nav-items'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        src='./assets/icons/icon-code-conduct.svg'
                        alt='Icon code conduct'
                      />
                    </span>
                    Code of Conduct
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        src='./assets/icons/icon-privacy-policy.svg'
                        alt='Icon code privacy policy'
                      />
                    </span>
                    Privacy Policy
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link' href='#'>
                    <span>
                      <img
                        src='./assets/icons/icon-terms-use.svg'
                        alt='Icon term use'
                      />
                    </span>
                    Terms of use
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav d-flex flex-row justify-content-between'>
                <li className='nav-items'>
                  <a className='nav-link mx-1' href='#'>
                    <img
                      src='./assets/icons/icon-twitter.svg'
                      alt='Icon twitter'
                    />
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link mx-1' href='#'>
                    <img
                      src='./assets/icons/icon-facebook.svg'
                      alt='Icon facebook'
                    />
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link mx-1' href='#'>
                    <img
                      src='./assets/icons/icon-github.svg'
                      alt='Icon github'
                    />
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link mx-1' href='#'>
                    <img
                      src='./assets/icons/icon-instagram.svg'
                      alt='Icon instagram'
                    />
                  </a>
                </li>
                <li className='nav-items'>
                  <a className='nav-link mx-1' href='#'>
                    <img
                      src='./assets/icons/icon-twitch.svg'
                      alt='Icon twitch'
                    />
                  </a>
                </li>
              </ul>
              <div className='ul-rounded mt-4'>
                <h5>Popular Tags </h5>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #javascript
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #webdev
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #beginners
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #programming
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #tutorial
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #react
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #python
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #productivity
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #css
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #discuss
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #devops
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #career
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #node
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #opensource
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #html
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #typescript
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #aws
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #java
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #php
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #codenewbie
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #github
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #blockchain
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #kubernetes
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #angular
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #security
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      #go
                    </a>
                  </li>
                </ul>
              </div>

              <div className='article card p-3 mt-4'>
                <img
                  className='imagen my-0'
                  src='/assets/home/aside-left-1.png'
                  alt=''
                />
                <h3 className=' mt-4 asideleft__letter asideleft__letter--bold '>
                  Calling all early-career developers & coding mentors!
                </h3>
                <p className='mt-2 mb-0 asideleft__letter'>
                  Join CodeNewbie Community: a supportive space for coding
                  newbies to connect & express themselves.{' '}
                  <a className='no-text-decoration'>Get in on the fun!</a>
                </p>
              </div>
              <div className=' card p-3 mt-4'>
                <img
                  className='imagen my-0'
                  src='/assets/home/aside-left-2.png'
                  alt=''
                />
                <h3 className=' mt-4 article__title '>The forem shop is here! </h3>
                <p className='mt-2 mb-0 asideleft__letter'>
                  <a className='no-text-decoration'>
                    {' '}
                    Shop Forem, DEV, and CodeNewbie merch
                  </a>
                </p>
              </div>
            </aside>
            <div className='col-12 col-md-9 col-lg-6 wrapper-article'>
              <div className='mb-2 menu-main'>
                <a className='btn current menu-main__btn' href='#'>
                  Relevant
                </a>
                <a className='btn menu-main__btn' href='#'>
                  Latest
                </a>
                <a className='btn menu-main__btn' href='#'>
                  Top
                </a>
              </div>
            
            <HomePosts author= 'ferchi' tags = {[ 'programming', 'productivity', 'design', 'showdev', 'beginners']} 
       title = 'ferchi bb'
        reactions = '2'
        />
        </div>
            <aside className='aside d-md-block col-lg-3 d-md-none d-lg-block'>
              <a className='text-decoration-none' href='#'>
                <div className='aside__publicity card p-3 '>
                  <img
                    className='my-3'
                    src='/assets/home/publicidad_ejemplo.jfif'
                    alt=''
                  />
                  <h3 className='aside__publicity aside__publicity--title'>
                    Forem for Android is here!
                  </h3>
                </div>
              </a>
              <section className='listing card mt-3'>
                <div className='d-flex nav-tabs p-3 justify-content-between align-items-center'>
                  <h4 className='listing__title strong form-inline m-0'>
                    Listings
                  </h4>
                  <a className='listing__anchor text-decoration-none' href='#'>
                    See all
                  </a>
                </div>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Discord server for learning by contributing 👨‍💻
                    </p>
                    <figcaption className='listing__figcaption'>mentors</figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      🐤 Chirp Developer Conference and Challenge
                    </p>
                    <figcaption className='listing__figcaption'>events</figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Technical writer available for hire
                    </p>
                    <figcaption className='listing__figcaption'>forhire</figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      🆘 Help Needed for Low-code Framework for Node.js
                    </p>
                    <figcaption className='listing__figcaption'>collabs</figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      🚨🚨🚨 tsParticles is looking for contributors, any kind
                      of JavaScript/TypeScript experience is welcome ⭐️⭐️⭐️
                    </p>
                    <figcaption className='listing__figcaption'>collabs</figcaption>
                  </div>
                </a>
                <a className='text-decoration-none listing__nobg' href='#'>
                  <div className='mb-0 text-center'>
                    <p className='listing__btn mb-0'>Create a listing</p>
                  </div>
                </a>
              </section>

              <section className='listing card mt-3'>
                <div className='d-flex nav-tabs p-3  justify-content-between align-items-center'>
                  <h4 className='listing__title strong form-inline m-0'>#help</h4>
                </div>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      How I can check that the system that I build is for linux
                      or not?
                    </p>
                    <figcaption className='listing__figcaption'>
                      2 comments
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      How do you estimate/calculate costs of new features for
                      clients?
                    </p>
                    <figcaption className='listing__figcaption'>
                      8 comments
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Append multiple strings to a single QLabel in PyQt5
                    </p>
                    <figcaption className='listing__figcaption btn btn-warning px-1 py-0'>
                      New
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Append multiple strings to a single QLabel in PyQt5
                    </p>
                    <figcaption className='listing__figcaption'>
                      1 comment
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      What do you want to see on the settings page of Social
                      Media Blocks?🚀
                    </p>
                    <figcaption className='listing__figcaption'>
                      3 comments
                    </figcaption>
                  </div>
                </a>
              </section>

              <section className='listing card mt-3'>
                <div className='d-flex nav-tabs p-3  justify-content-between align-items-center'>
                  <h4 className='listing__title strong form-inline m-0'>
                    #explainlikeimfive
                  </h4>
                </div>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      {' '}
                      What's the use of if __name__ == '__main__': in Python?
                    </p>
                    <figcaption className='listing__figcaption'>
                      11 comments
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      How do you estimate/calculate costs of new features for
                      clients?
                    </p>
                    <figcaption className='listing__figcaption'>
                      8 comments
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>Unicorns on DEV 🦄🦄</p>
                    <figcaption className='listing__figcaption'>
                      4 comments
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Explain Blockchain like I am Five
                    </p>
                    <figcaption className='listing__figcaption btn btn-warning px-1 py-0'>
                      New
                    </figcaption>
                  </div>
                </a>
                <a className='text-decoration-none' href='#'>
                  <div className='p-3 nav-tabs'>
                    <p className='listing__text mb-1'>
                      Explain Svelte like I am five
                    </p>
                    <figcaption className='listing__figcaption'>
                      3 comments
                    </figcaption>
                  </div>
                </a>
              </section>
            </aside>
          </div>
        </div>
      </main>

    </Layout>

    </>
  )
}
