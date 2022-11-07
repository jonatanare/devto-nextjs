import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AsideNavbar } from "../components/Post/AsideNavbar";
import { RightAside } from "../components/Post/RightAside";
import navs from "../data/navs-links.json";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Image from "next/image";
const axios = require("axios");

export default function PostDetail () {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cover, setCover] = useState('')
  const [date, setDate] = useState('')
  const [updatedDate, setUpdatedDate] = useState('')
  const [tag, setTag] = useState([])
  const [tokenAccess, setTokenAcces] = useState('')
  const [allComments, setAllComments] = useState([])

  const [isAuthor, setIsAuthor] = useState(false);
  const [nameAuthor, setNameAuthor] = useState("");
  const [existsPost, setExistsPost] = useState("");
  const [isOwner, setIsOwner] = useState('')

  const [reactionsCount, setReactionsCount] = useState([]);
  const URL_API = "http://localhost:8080/";

  const meses = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const createdDate = new Date(date)
  const dateUpdated = new Date(updatedDate)
  const postedDate = `${createdDate.getDate()} ${
    meses[createdDate.getMonth()]
  }`
  const postedUpdateDate = `${dateUpdated.getDate()} ${
    meses[dateUpdated.getMonth()]
  }`

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const id = router.query["id"];
  console.log(isAuthor);

  useEffect(() => {
    if(router.isReady){
      axios
      .get(`${URL_API}authors/${isOwner}`)
      .then(function (response) {
        const mePosts = response.data.data.author.posts;
        console.log(mePosts);
        const name = response.data.data.author.name;
        mePosts.find((item) => {
          if(item._id === id){
            setIsAuthor(true)
          }
        });
        
        setNameAuthor(name);
      })
      .catch((error) => {});
    }
  },[]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    setTokenAcces(token)
  }, [tokenAccess])

  const onSubmit = ({ idPost = id, content }) => {
    axios
      .post(
        `${URL_API}comments`,
        {
          comment: content,
          post_id: idPost
        },
        {
          headers: {
            Authorization: tokenAccess,
          },
        }
      )
      .then((response) => {
        const data = response.data;
        router.reload();
      })
      .catch((error) => {})
  }

  useEffect(() => {
    if(router.isReady){
      axios
      .get(`${URL_API}posts/${id}`)
      .then((response) => {
        setIsOwner(response.data.data.post.author);
        const postData = response.data.data.post;
        const tags = postData.hashtags;
        const arrTags = tags;

        setTitle(postData.title)
        setDescription(postData.description)
        setCover(postData.image)
        setDate(postData.createdAt)
        setUpdatedDate(postData.updatedAt)
        setTag(arrTags)
        setReactionsCount(postData.reactions)
        setAllComments(postData.comments)
      })
      .catch((error) => {});
    }
  }, [id]);

  return (
    <>
      <Layout>
        <div className='container post__detail'>
          <div className='row mt-5'>
            <div className='col-md-1 col-lg-1 d-none d-md-flex justify-content-center post-aside-left mt-5'>
              <AsideNavbar
                navs={navs}
                reactionsCount={reactionsCount}
                id={id}
              />
            </div>
            <div className='col-md-11 col-lg-8'>
              {/* <Post post={post} /> */}
              <div className='card'>
                <article className='post article-single mb-5'>
                  <img
                    className='w-100 m-0 '
                    src={`${cover}`}
                    alt='Imagen cover'
                  />
                  <div className="px-4 pt-3">
                    <div className="d-flex ">
                      <div className="d-flex align-items-start me-0">
                        <img
                          className='article__autor rounded-circle'
                          src='/assets/home/avatar-home.webp'
                          alt=''
                        />
                      </div>
                      <div className="ms-2 d-flex justify-content-between w-100">
                        <div>
                          <p className=" btn article__down name mb-0 p-1">
                            {nameAuthor}
                          </p>
                          <label className="date d-block ms-1">{`Posted on ${postedDate} • Updated ${postedUpdateDate}`}</label>
                        </div>
                        { isAuthor ? (
                          <button className="btn ms-auto">Edit</button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className='identation p-3 ms-3 pt-2 wrapper-tags'>
                      <a className='article__link' href=''>
                        <h2 className='article__title'>{title}</h2>
                      </a>
                      <div className='d-flex flex-wrap'>
                        {tag.map((item) => (
                          <TagTopic key={item} tag={item} />
                        ))}
                      </div>

                      <p className='post__text mt-3'>{description}</p>
                    </div>
                  </div>
                  <hr />
                  <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                    <h3 className='ms-5'>Top comments</h3>
                    <div className='form-floating pe-5 ps-5'>
                      <textarea
                        className='form-control'
                        placeholder='Leave a comment here'
                        id='floatingTextarea2'
                        style={{ height: '100px' }}
                        {...register('content', { required: true })}
                      />
                      <label htmlFor='floatingTextarea2' className='ms-5 pt-3'>
                        Comments
                      </label>
                    </div>
                    <div className='d-flex pe-5 ps-5 pt-3'>
                      <button className='btn btn-primary btn-publish'>
                        Submit
                      </button>
                      <button className='btn btn-secondary ms-2'>
                        Preview
                      </button>
                    </div>
                  </form>
                </article>
                {allComments
                  .map((comment) => (
                    <Comments
                      key={comment._id}
                      author={comment.author.name}
                      content={comment.comment}
                    />
                  ))
                  .reverse()}
              </div>
            </div>
            <aside className='aside d-none d-lg-block col-lg-3 p-0'>
              <RightAside />
            </aside>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const TagTopic = ({ tag }) => {
  return (
    <a className={`btn article__btn article__btn--${tag}`}>
      <span>#{tag}</span>
    </a>
  )
}

export const Comments = ({ id, author, content }) => {
  return (
    <div className='wrapper-comments ms-5 me-5 p-2  card shadow mb-2'>
      <div className='d-flex'>
        <div className='wrapper-comments__avatar'>
          <Image
            src='/assets/home/autor2.webp'
            alt='Avatar autor'
            layout='fill'
            width={32}
            height={32}
          />
        </div>
        <div className='wrapper-comments__content w-100'>
          <div className='d-flex justify-content-between ps-3'>
            <span className='me-auto'>{author} </span>
            <div className='ms-auto'>
              <button className='btn '>°°°</button>
            </div>
          </div>
          <div className="ps-3 mt-1">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
