import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AsideNavbar } from "../components/Post/AsideNavbar";
import { RightAside } from "../components/Post/RightAside";
import TagTopics from "../components/Post/Tagtopics";
import navs from "../data/navs-links.json";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";
const axios = require("axios");

export default function PostDetail() {
  const router = useRouter();
  const [post, setPost] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [date, setDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [tag, setTag] = useState([]);
  const [tokenAccess, setTokenAcces] = useState("")

  
  const [reactionsCount, setReactionsCount] = useState([]);

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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  

  const URL_API = "http://localhost:8080/";
  const id = router.query["id"];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTokenAcces(token)
  }, [tokenAccess])

  const onSubmit = ({idPost, content}) => {
    axios.post(`${URL_API}comments`, {
      comment: content,
      post_id: idPost
    }, {
      headers: {
        'Authorization': tokenAccess
      }
    })
    .then((response) => {
      const data = response.data
      console.log(data);
    })
    .catch((error) => console.log(error))
  }

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
      setReactionsCount(postData.reactions);
      console.log(postData)
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
              <AsideNavbar navs={navs} reactionsCount={reactionsCount} id={id} />
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
                <hr />
                <form onSubmit={handleSubmit(onSubmit)} className="p-2">
                  <h3 className="ms-5">Top comments</h3>
                  <input type="hidden" value={`${id}`}  {...register("idPost")} />
                  <div className="form-floating pe-5 ps-5">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                      {...register("content", {required: true})}
                    ></textarea>
                    <label htmlFor="floatingTextarea2" className="ms-5 pt-3">Comments</label>
                  </div>
                  <div className="d-flex pe-5 ps-5 pt-3">
                    <button className="btn btn-primary btn-publish">Submit</button>
                    <button className="btn btn-secondary ms-2">Preview</button>
                  </div>
                </form>
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
