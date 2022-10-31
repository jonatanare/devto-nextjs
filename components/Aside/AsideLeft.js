import React, { useState } from "react";

export default function AsideLeft() {
    const [ iconLink, setIconLink ] = useState()

  return (
    <>
      <aside className="asideleft d-none d-md-block col-md-3">
        <ul className="navbar-nav mx-0">
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
                <img src="./assets/icons/icon-forem-shop.svg" alt="Icon" />
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
              <img src="./assets/icons/icon-twitter.svg" alt="Icon twitter" />
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-link mx-1" href="#">
              <img src="./assets/icons/icon-facebook.svg" alt="Icon facebook" />
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-link mx-1" href="#">
              <img src="./assets/icons/icon-github.svg" alt="Icon github" />
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
              <img src="./assets/icons/icon-twitch.svg" alt="Icon twitch" />
            </a>
          </li>
        </ul>
        <div className="ul-rounded mt-4">
          <h5>Popular Tags </h5>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                #javascript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #webdev
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #beginners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #programming
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #tutorial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #react
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #python
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #productivity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #css
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #discuss
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #devops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #node
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #opensource
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #html
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #typescript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #aws
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #java
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #php
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #codenewbie
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #blockchain
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #kubernetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #angular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #security
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                #go
              </a>
            </li>
          </ul>
        </div>

        <div className="article card p-3 mt-4">
          <img
            className="imagen my-0"
            src="/assets/home/aside-left-1.png"
            alt=""
          />
          <h3 className=" mt-4 asideleft__letter asideleft__letter--bold ">
            Calling all early-career developers & coding mentors!
          </h3>
          <p className="mt-2 mb-0 asideleft__letter">
            Join CodeNewbie Community: a supportive space for coding newbies to
            connect & express themselves.{" "}
            <a className="no-text-decoration">Get in on the fun!</a>
          </p>
        </div>
        <div className=" card p-3 mt-4">
          <img
            className="imagen my-0"
            src="/assets/home/aside-left-2.png"
            alt=""
          />
          <h3 className=" mt-4 article__title ">The forem shop is here! </h3>
          <p className="mt-2 mb-0 asideleft__letter">
            <a className="no-text-decoration">
              {" "}
              Shop Forem, DEV, and CodeNewbie merch
            </a>
          </p>
        </div>
      </aside>
    </>
  );
}
