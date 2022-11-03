import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const axios = require("axios");

export default function Nav() {
  const [isLoged, setIsLogged] = useState(false);
  const URL_API = "http://localhost:8080/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const { id } = JSON.parse(token);

    axios
      .get(`${URL_API}authors/${id}`)
      .then((response) => {
        const { _id } = response.data.data.author;
        if (id === _id) {
          setIsLogged(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <header
        className="navbar-light fixed-top header-static bg-white shadow-sm"
        id="header"
      >
        <nav className="navbar navbar-expand-lg navbar-devto">
          <div className="container p-md-0">
            <div className="d-flex ml-2">
              <button
                className="navbar-toggler d-md-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <Link className="navbar-brand" href="/">
                <Image
                  src={"/assets/logos/logo-devto.png"}
                  alt={"Logo devto"}
                  layout={"fill"}
                  width={50}
                  height={40}
                />
              </Link>
              <form className="form-inline my-2 my-lg-0 d-none d-md-block form-search">
                <div className="wrapper-search position-relative">
                  <input
                    className="form-control mr-sm-2 w-100 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn position-absolute b-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="crayons-icon c-btn__icon"
                      focusable="false"
                    >
                      <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="d-flex items-center h-100 ml-auto">
              <button className="btn bg-transparent btn-sm d-md-none">
                <img src="./assets/icons/icon-search.svg" alt="Icon reach" />
              </button>

              {isLoged ? (
                <>
                  <button className="btn btn-outline-primary m-auto" id="">
                    {" "}
                    <Link href="/new">Create Post</Link>
                  </button>
                  <button
                    className="btn bg-transparent btn-sm position-relative"
                    id="btn-notif"
                  >
                    <img
                      src="./assets/icons/icon-notifications.svg"
                      alt="Icon notification"
                    />
                    <span className="position-absolute translate-middle badge bg-danger">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <a
                    href="jonatanare.html"
                    className="btn btn-sm p-1 wrapper-avatar c-btn"
                    id="btn-avatar"
                  >
                    <span className="btn-avatar">
                      <img
                        className="img-avatar"
                        src="./assets/home/avatar-home.webp"
                        alt="Avatar Session"
                      />
                    </span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    className="btn btn__login btn-outline-primary m-auto me-1 d-none d-md-flex"
                    id="btn-login"
                  >
                    <Link href={"/enter"}>Log In</Link>
                  </button>
                  <button
                    className="btn btn__account btn-outline-primary m-auto me-1"
                    id="btn-create"
                  >
                    <Link href="/register"> Create Account</Link>
                  </button>
                </>
              )}
            </div>
          </div>
          <section
            role="navigation "
            className="offcanvas offcanvas-start d-lg-none"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                DEV Community
              </h5>
              <button
                type="button"
                className="btn-close d-lg-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="card p-3 asideleft__card">
              <h3 className="asideleft__title">
                <a className="text-primary text-decoration-none" href="#">
                  DEV Community
                </a>{" "}
                is a community of 883,369 amazing developers
              </h3>
              <p className="light asideleft__text pt-3">
                Were a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <button className="mt-2 btn btn-outline-primary asideleft__btn">
                <a href="./createAccount.html"> Create acount</a>
              </button>
              <button className="btn bg-white mt-2">Log in</button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-4">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-home.svg" alt="Icon" />
                    </span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-reading.svg" alt="Icon" />
                    </span>
                    Reading List
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-letter.svg" alt="Icon" />
                    </span>
                    Listings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-podcasts.svg" alt="Icon" />
                    </span>
                    Podcasts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-video.svg" alt="Icon" />
                    </span>
                    Videos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-tags.svg" alt="Icon" />
                    </span>
                    Tags
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-faq.svg" alt="Icon" />
                    </span>
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        src="./assets/icons/icon-forem-shop.svg"
                        alt="Icon"
                      />
                    </span>
                    Forem Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-sponsors.svg" alt="Icon" />
                    </span>
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-about.svg" alt="Icon" />
                    </span>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-contact.svg" alt="Icon" />
                    </span>
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        className="img-fluid"
                        src="./assets/icons/icon-guies.svg"
                        alt="Icon"
                      />
                    </span>
                    Guides
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        src="./assets/icons/icon-software-comparisons.svg"
                        alt="Icon"
                      />
                    </span>
                    Software comparisons
                  </a>
                </li>
              </ul>
              <h2 className="other-title">Other</h2>
              <ul className="navbar-nav">
                <li className="nav-items">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        src="./assets/icons/icon-code-conduct.svg"
                        alt="Icon code conduct"
                      />
                    </span>
                    Code of Conduct
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        src="./assets/icons/icon-privacy-policy.svg"
                        alt="Icon code privacy policy"
                      />
                    </span>
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link" href="#">
                    <span>
                      <img
                        src="./assets/icons/icon-terms-use.svg"
                        alt="Icon term use"
                      />
                    </span>
                    Terms of use
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav d-flex flex-row justify-content-between">
                <li className="nav-items">
                  <a className="nav-link mx-1" href="#">
                    <img
                      src="./assets/icons/icon-twitter.svg"
                      alt="Icon twitter"
                    />
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link mx-1" href="#">
                    <img
                      src="./assets/icons/icon-facebook.svg"
                      alt="Icon facebook"
                    />
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link mx-1" href="#">
                    <img
                      src="./assets/icons/icon-github.svg"
                      alt="Icon github"
                    />
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link mx-1" href="#">
                    <img
                      src="./assets/icons/icon-instagram.svg"
                      alt="Icon instagram"
                    />
                  </a>
                </li>
                <li className="nav-items">
                  <a className="nav-link mx-1" href="#">
                    <img
                      src="./assets/icons/icon-twitch.svg"
                      alt="Icon twitch"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
}
