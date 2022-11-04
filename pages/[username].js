import { useRouter } from "next/router";


import React from 'react'
import Layout from "../components/Layout";

export default function Username() {
    const router = useRouter()
  const { username } = router.query
  return (

    <Layout>
        <section className="container-fluid p-0 profile">
        <div className="profile__bgBrand"></div>
        <div className="container profile__content">
            <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                    <article className="card profile__content--card">
                        <div className="position-relative wrapper-avatar">
                            <span className="wrapper-avatar__img">
                                <img src="./assets/home/avatar-home.webp" alt="Icons Avatar"/>
                            </span>
                            <div className="wrapper-avatar__actions ms-auto mt-4">
                                <a href="/settings.html" className="btn btn-primary btn-profile">Edit profile</a>
                            </div>
                        </div>
                        <div className="profile__details text-md-center">
                            <h1 className="profile__details--user">{username}</h1>
                            <p className="profile__details--abstract mt-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nihil. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                            <div className="profile__details--dates mt-md-3">
                                <img src="./assets/icons/icon-birthday.svg" alt="Icon pastel" />
                                <em>Joined on 29 jul 2022</em>
                                <img src="./assets/icons/icon-github.svg" alt="Icon GitHub" />
                            </div>
                        </div>
                        <hr/>
                        <footer>
                            <div>
                                <strong>Education</strong>
                                <p>Ing. en sistemas computacionales</p>
                            </div>
                            <div>
                                <strong>Work</strong>
                                <p>FullStack at Landrada Desarrollos</p>
                            </div>
                            <div>
                                <button className="btn btn-secondary">More info avout @jonatanare</button>
                            </div>
                        </footer>
                    </article>
                </div>
            </div>
        </div>
    </section>
    </Layout>
  )
}
