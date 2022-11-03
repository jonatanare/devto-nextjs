import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { SideNavBar } from "../components/Post/AsideNavbar";
import { RightAside } from "../components/Post/RightAside";
import TagTopics from "../components/Post/Tagtopics";
import navs from "../data/navs-links.json";
import { useRouter } from "next/router";
const axios = require("axios");

export default function PostDetail({}) {
  const router = useRouter();
  const [post, setPost] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [date, setDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [tag, setTag] = useState([]);

  let meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const createdDate = new Date(date);
  const dateUpdated = new Date(updatedDate);
  const postedDate = `${createdDate.getDay()} ${meses[createdDate.getMonth()]}`;
  const postedUpdateDate = `${dateUpdated.getDay()} ${
    meses[dateUpdated.getMonth()]
  }`;

  const URL_API = "http://localhost:8080/";
  const id = router.query['id']
  useEffect(() => {
    axios
    .get(`${URL_API}posts/${id}`)
    .then((response) => {
      const postData = response.data.data.post;
      const tags = postData.hashtags;
      const arrTags = tags;

      setTitle(postData.title);
      setDescription(postData.description);
      setCover(postData.image);
      setDate(postData.createdAt);
      setUpdatedDate(postData.updatedAt);
      setTag(arrTags);
      //setPost(postData);
    })
    .catch((error) => console.log(error));
  }, [id])

  return (
    <>
      <Layout>
        <div className="container post__detail">
          <div className="row mt-5">
            <div className="col-md-1 col-lg-1 d-none d-md-flex justify-content-center post-aside-left mt-5">
              <SideNavBar navs={navs} />
            </div>
            <div className="col-md-11 col-lg-8">
              {/* <Post post={post} /> */}
              <article className="post article-single card mb-5">
                <img
                  className="w-100 m-0 "
                  src={`${cover}`}
                  alt="Imagen cover"
                />
                <div className="px-4 pt-3">
                  <div className="d-flex ">
                    <div className="d-flex align-items-center me-0">
                      <img
                        className="article__autor rounded-circle"
                        src="/assets/home/avatar-home.webp"
                        alt=""
                      />
                    </div>
                    <div className=" ms-2 ">
                      <p className=" btn article__down name mb-0 p-1">
                        {`Posted on ${postedDate} • Updated ${postedUpdateDate}`}
                      </p>
                      <label className="date d-block ms-1"></label>
                    </div>
                  </div>
                  <div className="identation p-3 ms-3 pt-2 wrapper-tags">
                    <a className="article__link" href="">
                      <h2 className="article__title">{title}</h2>
                    </a>
                    <div className="d-flex flex-wrap">
                      {/* {
                      tag.map((item) => <TagTopics key={item} tag={item} />)
                    } */}
                    </div>

                    <p className="post__text mt-3">{description}</p>
                  </div>
                </div>
              </article>
            </div>
            <aside className="aside d-none d-lg-block col-lg-3 p-0">
              <RightAside />
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
}
