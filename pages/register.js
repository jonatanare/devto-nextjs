import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const axios = require("axios");

export default function Register() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const URL = "http://localhost:8080/";

  const onSubmit = ({ name, biography, nacionality, email, password }) => {
    axios
      .post(`${URL}authors`, {
        name: name,
        biography: biography,
        nacionality: nacionality,
        email: email,
        password: password,
      })
      .then((response) => {
        const dataResponse = response.data
        const returnUrl = '/enter'
        router.push(returnUrl)
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Layout>
        <main className="container-fluid main mx-auto login mb-5" id="login">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <article className="card">
                  <div>
                    <div className="mx-auto text-center mb-4">
                      <h2 className="d-block mt-5 mx-auto login__title">
                        Welcome to DEV Community 👩‍💻👨‍💻
                      </h2>
                      <p className="login__text mb-4">
                        {" "}
                        <a href="#" className="text-decoration-none me-1">
                          DEV Community
                        </a>
                        👩‍💻👨‍💻 is a community of 923,820 amazing developers
                      </p>
                    </div>
                    <button className="btn__apps btn__apps--apple mb-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a8wi7o4syaayc8h31k12ki3xi46fsupr"
                        aria-hidden="true"
                        className="btn__icon mx-auto"
                      >
                        <title id="a8wi7o4syaayc8h31k12ki3xi46fsupr">
                          apple
                        </title>
                        <path d="M11.752 6.657c.828 0 1.867-.56 2.486-1.307.56-.677.969-1.623.969-2.568 0-.129-.012-.257-.036-.362-.922.035-2.03.618-2.696 1.4-.525.596-1.004 1.53-1.004 2.487 0 .14.024.28.035.326.059.012.152.024.245.024zM8.834 20.78c1.132 0 1.634-.759 3.046-.759 1.436 0 1.75.736 3.011.736 1.238 0 2.066-1.144 2.848-2.265.876-1.284 1.238-2.544 1.261-2.603-.082-.023-2.451-.992-2.451-3.711 0-2.358 1.867-3.42 1.972-3.502-1.237-1.774-3.116-1.82-3.63-1.82-1.389 0-2.52.84-3.233.84-.77 0-1.786-.794-2.988-.794-2.288 0-4.61 1.89-4.61 5.462 0 2.218.863 4.564 1.925 6.082.91 1.284 1.705 2.334 2.849 2.334z"></path>
                      </svg>{" "}
                      Continue with Apple
                    </button>

                    <button className="btn__apps btn__apps--forem mb-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="24"
                        height="24"
                        viewBox="0 0 200.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet"
                        role="img"
                        aria-labelledby="acikop4z6bxqjlto2n332en8imfpu6s2"
                        aria-hidden="true"
                        className="btn__icon btn__icon--forem"
                      >
                        <title id="acikop4z6bxqjlto2n332en8imfpu6s2">
                          forem
                        </title>
                        <g
                          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                          fill="white"
                          stroke="none"
                        >
                          <path d="M0 1000 l0 -1000 1000 0 1000 0 0 1000 0 1000 -1000 0 -1000 0 0 -1000z m1507 684 c91 -55 130 -189 84 -290 -22 -48 -95 -114 -128 -114 -19 0 -25 9 -39 57 l-17 57 26 20 c14 12 31 34 37 50 15 40 -14 98 -55 110 -52 15 -58 21 -72 70 -11 38 -12 51 -1 63 20 24 107 12 165 -23z m-247 -25 c6 -11 12 -39 13 -62 2 -41 2 -42 -45 -57 -68 -22 -70 -26 -52 -100 22 -88 28 -94 88 -76 26 8 54 12 61 10 15 -6 40 -97 32 -118 -3 -8 -31 -21 -61 -30 -31 -9 -56 -20 -56 -24 0 -4 18 -72 40 -152 22 -80 40 -153 40 -162 0 -21 -106 -56 -121 -41 -6 6 -25 68 -44 139 -43 167 -155 586 -160 600 -7 24 16 37 111 65 120 34 140 35 154 8z m-485 -185 c67 -33 136 -105 155 -163 16 -48 13 -53 -52 -74 l-48 -16 -17 26 c-10 15 -35 43 -55 64 -67 68 -175 71 -252 7 -48 -39 -67 -77 -71 -144 -1 -30 -5 -57 -7 -59 -10 -10 -97 -28 -110 -22 -38 14 -29 147 17 237 25 49 94 119 144 144 84 44 206 44 296 0z m791 -730 c12 -48 -2 -147 -30 -201 -37 -75 -76 -115 -148 -154 -58 -31 -70 -34 -148 -34 -73 0 -93 4 -143 29 -67 32 -128 92 -157 152 -25 51 -19 68 29 83 64 19 78 15 103 -30 33 -58 94 -92 168 -92 106 0 178 71 189 186 l6 61 40 12 c65 20 84 17 91 -12z"></path>
                        </g>
                      </svg>{" "}
                      Continue with Forem
                    </button>

                    <button className="btn__apps btn__apps--github mb-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="af9nsbngwqd6u6dcb32vq6haokfuvc1n"
                        aria-hidden="true"
                        className="btn__icon"
                      >
                        <title id="af9nsbngwqd6u6dcb32vq6haokfuvc1n">
                          github
                        </title>
                        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                      </svg>{" "}
                      Continue with GitHub
                    </button>

                    <button className="btn__apps btn__apps--twitter mb-4">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="arudri4npkqq8oui6d2wjn3pmvnhfmid"
                        aria-hidden="true"
                        className="btn__icon"
                      >
                        <title id="arudri4npkqq8oui6d2wjn3pmvnhfmid">
                          twitter
                        </title>
                        <path
                          d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                          fill="white"
                        ></path>
                      </svg>
                      Continue with Twitter
                    </button>

                    <div className="text-center mb-4">
                      <span className="login__anounce">
                        Have a password? Continue with your email address
                      </span>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login__form mx-auto"
                  >
                    <div className="form-group mb-3">
                      <label className="mb-2" htmlFor="">Nombre completo</label>
                      <input className="form-control" type="text" placeholder="Ingresa tu nombre" {...register("name", {required: true})} />
                    </div>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="exampleInputBiography"
                        className="mb-2 login__email"
                      >
                        Biografía
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputBiography"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa una breve descripción de ti"
                        {...register("biography", { required: true })}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="mb-2" htmlFor="">Nacionalidad</label>
                      <input className="form-control" type="text" placeholder="Ingresa tu nacionalidad" {...register("nacionality", {required: true})} />
                    </div>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="exampleInputBiography"
                        className="mb-2 login__email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="mb-2 login__email"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                    </div>
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn__continue w-100"
                      id="btn-continue"
                    >
                      Continue
                    </button>
                  </form>
                  <a
                    href="#"
                    className="text-decoration-none text-center mt-4 mb-3"
                  >
                    I forgot my password
                  </a>
                </article>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
