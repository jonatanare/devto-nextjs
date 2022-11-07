import Layout from '../components/Layout'
import AsideLeft from '../components/Aside/AsideLeft'
import HomePosts from '../components/HomePost'
import React, { useEffect, useState } from 'react'
const axios = require('axios')

export default function Home () {
  const [posts, setPosts] = useState([])
  const [datePosted, setDatePosted] = useState('')
  const URL = 'http://localhost:8080/'
  useEffect(() => {
    axios
      .get(`${URL}posts`)
      .then(function (response) {
        const posts = response.data.data.posts
        setPosts(posts)
      })
      .catch((error) => {})
  }, [])
  return (
    <>
      <Layout>
        <main id='main'>
          <div className='container p-1 p-lg-2 mt-4'>
            <div className='row g-4'>
              <AsideLeft />
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

                {posts
                  .map((post) => (
                    <HomePosts
                      key={post._id}
                      title={post.title}
                      author={post.author.name}
                      tags={post.hashtags}
                      idPost={post._id}
                      createdAt={post.createdAt}
                    />
                  ))
                  .reverse()}
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
                    <a
                      className='listing__anchor text-decoration-none'
                      href='#'
                    >
                      See all
                    </a>
                  </div>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        Discord server for learning by contributing 👨‍💻
                      </p>
                      <figcaption className='listing__figcaption'>
                        mentors
                      </figcaption>
                    </div>
                  </a>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        🐤 Chirp Developer Conference and Challenge
                      </p>
                      <figcaption className='listing__figcaption'>
                        events
                      </figcaption>
                    </div>
                  </a>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        Technical writer available for hire
                      </p>
                      <figcaption className='listing__figcaption'>
                        forhire
                      </figcaption>
                    </div>
                  </a>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        🆘 Help Needed for Low-code Framework for Node.js
                      </p>
                      <figcaption className='listing__figcaption'>
                        collabs
                      </figcaption>
                    </div>
                  </a>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        🚨🚨🚨 tsParticles is looking for contributors, any kind
                        of JavaScript/TypeScript experience is welcome ⭐️⭐️⭐️
                      </p>
                      <figcaption className='listing__figcaption'>
                        collabs
                      </figcaption>
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
                    <h4 className='listing__title strong form-inline m-0'>
                      #help
                    </h4>
                  </div>
                  <a className='text-decoration-none' href='#'>
                    <div className='p-3 nav-tabs'>
                      <p className='listing__text mb-1'>
                        How I can check that the system that I build is for
                        linux or not?
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
                        Whats the use of if __name__ == __main__: in Python?
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
