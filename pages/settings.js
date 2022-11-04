import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const axios = require("axios");

import Layout from "../components/Layout";
import jwtDecode from "jwt-decode";

export default function Settings() {
  const router = useRouter();
  const [tokenAccess, setTokenAcces] = useState("");
  const [isLoged, setIsLogged] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const URL = "http://localhost:8080/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenParse = jwtDecode(token)
    setTokenAcces(token);
    axios
      .get(`${URL}authors/${tokenParse.id}`)
      .then((response) => {
        console.log(response.data);
        const { _id } = response.data.data.author;
        if (tokenParse.id === _id) {
          setIsLogged(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('Finish');
      })
  }, [tokenAccess]);

  return (
    <Layout>
      <main id="main">
        <div className="container p-1 p-lg-2">
          <div className="row g-4">
            <aside className="asideleft d-none d-md-block col-md-4">
              {/* <div className="card p-3 asideleft__card">
                <h3 className="asideleft__title">
                  <a className="text-primary text-decoration-none" href="#">
                    DEV Community
                  </a>{" "}
                  is a community of 883,369 amazing developers
                </h3>
                <p className="light asideleft__text pt-3">
                  Were a place where coders share, stay up-to-date and grow
                  their careers.
                </p>
                <button className="mt-2 btn btn-outline-primary asideleft__btn">
                  Create acount
                </button>
                <button className="btn bg-white mt-2">Log in</button>
              </div> */}

              <ul className="navbar-nav mb- mx-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-profile.svg" alt="Icon" />
                    </span>{" "}
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/setting.svg" alt="Icon" />
                    </span>{" "}
                    Customization
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/notifications.svg" alt="Icon" />
                    </span>
                    Notifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/acount.svg" alt="Icon" />
                    </span>
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/billing.svg" alt="Icon" />
                    </span>
                    Billing
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
                      <img
                        src="./assets/icons/icon-organitation.svg"
                        alt="Icon"
                      />
                    </span>
                    Organization
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>
                      <img src="./assets/icons/icon-extension.svg" alt="Icon" />
                    </span>
                    Extensions
                  </a>
                </li>
              </ul>
            </aside>
            <div className="col-12 col-md-9 col-lg-6">
              <form className="">
                <div className="card p-3">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("username")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nacionalidad</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("nacionalidad")}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Biografia</label>
                    <textarea
                      className="form-control"
                      {...register("biografia")}
                    ></textarea>
                  </div>
                </div>
                <div className="card p-3 mt-4">
                    <button type="submit" className="btn btn-primary btn-publish mt-3 w-100">Save Profile Information</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
