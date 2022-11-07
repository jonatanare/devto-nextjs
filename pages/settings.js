import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Layout from "../components/Layout";
const axios = require("axios");

export default function Settings() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [email, setEmail] = useState("");
  const [nacionality, setNacionality] = useState("");
  const [username, setUsername] = useState("");
  const [userid, setUserId] = useState("");
  const [token,setToken] = useState('')
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const URL = "http://localhost:8080/";
  const returnUrl = router.query.returnUrl || "/";
  //const token = localStorage.getItem('token')

  const onSubmit = (data) => {
    axios.patch(`${URL}authors/${userid}`, {
      biography,
      email,
      nacionality,
      name,
      username,
    },{
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      router.reload()
    })
    .catch((error) => {})
  };

  useEffect(() => {
    const userLocal = localStorage.getItem("userCurrent");
    if (!userLocal) {
      router.push(returnUrl);
      return;
    }
    const token = localStorage.getItem('token')
    const { id } = JSON.parse(userLocal);
    setUserId(id);
    setToken(token)
    
    axios
      .get(`${URL}authors/${id}`)
      .then((response) => {
        const { biography, email, nacionality, name, username } =
          response.data.data.author;
        setNacionality(nacionality);
        setBiography(biography);
        setEmail(email);
        setName(name);
        setUsername(username);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
    {
      token
      ? (<Layout>
        <main id="main">
          <div className="container p-1 p-lg-2">
            <div className="row g-4">
              <aside className="asideleft d-none d-md-block col-md-4">
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
              <div className="col-12 col-md-8 col-lg-6">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="card p-3">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        value={`${name}`}
                        className="form-control"
                        {...register("name", {
                          onChange: (e) => {
                            setName(e.target.value);
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={`${email}`}
                        {...register("email", {
                          onChange: (e) => {
                            setEmail(e.target.value);
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        value={`${username}`}
                        className="form-control"
                        {...register("username", {
                          onChange: (e) => {
                            setUsername(e.target.value);
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nacionalidad</label>
                      <input
                        type="text"
                        className="form-control"
                        value={`${nacionality}`}
                        {...register("nacionalidad", {
                          onChange: (e) => {
                            setNacionality(e.target.value);
                          },
                        })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Biografia</label>
                      <textarea
                        className="form-control"
                        defaultValue={biography}
                        {...register('biography',{
                          onChange: (e) => {
                            setBiography(e.target.value)
                          }
                        })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="card p-3 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-publish mt-3 w-100"
                    >
                      Save Profile Information
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Layout>)
      : null
    }
    </>
  );
}
