import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const axios = require("axios");
import Layout from "../components/Layout";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const URL = "http://localhost:8080/";
  const returnUrl = router.query.returnUrl || "/";

  const [ownerPosts, setOwnerPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push(returnUrl);
      return;
    }
    const { id } = JSON.parse(localStorage.getItem("userCurrent"));

    axios
      .get(`${URL}authors/${id}`)
      .then((response) => {
        const posts = response.data.data.author.posts;
        setOwnerPosts(posts);
      })
      .catch((error) => {})
      .finally(() => {});
  }, [ownerPosts]);

  return (
    <Layout>
      <main className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Dashboard</h2>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2">
                <strong>4</strong>
                <p>Total post reactions</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2">
                <strong>{`< 500`}</strong>
                <p>Total post views</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2">
                <strong>{0}</strong>
                <p>Listings created</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card p-2">
                <strong>{0}</strong>
                <p>Credits available</p>
              </div>
            </div>
          </div>
          <div className="row">
            <aside className="asideleft d-none d-md-block col-md-3">
              <ul className="navbar-nav mb- mx-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Series
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followings tags
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followings users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followings organizations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followings podcats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Listings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Analytics
                  </a>
                </li>
              </ul>
            </aside>
            <div className="col-md-9">
              {
                ownerPosts.map((post) => <CardPosts key={post._id} namePost={post.title} idpost={post._id} likes={post.reactions.length } />).reverse()
              }
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const CardPosts = ({idpost, namePost, likes}) => {
  return (
    <>
      <div className="card mt-3 p-3 d-flex flex-row justify-content-between">
        <div>
          <Link className="h5" href={`http://localhost:3000/posts?id=${idpost}`}>{namePost}</Link>
          <p>Published: 3 nov</p>
        </div>
        <section className="d-flex align-items-center">
        <div>
          <div className="d-flex fex-row align-items-center">
            <Image
              src={"/assets/icons/heart.svg"}
              alt={"icon heart"}
              layout={"fill"}
              width={24}
              height={24}
            />
            <span className="ms-1">{likes}</span>
          </div>
        </div>
        <div>
          <Link className="btn btn-secundary" href={`http://localhost:3000/edit?id=${idpost}`}>
            Edit
          </Link>
          <button type="submit" className="btn">Delete</button>
        </div>
        </section>
      </div>
    </>
  );
};
