import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import tools from "../data/tools.json";
const axios = require("axios");
import EditPost from "../components/EditPost";

export default function Edit() {
  const router = useRouter();
  const URL_API = "http://localhost:8080/";
  const returnUrl = router.query.returnUrl || "/";
  const [token,setToken] = useState('')

  const [isLoged, setIsLogged] = useState(false);
  const [dataPost, setDataPost] = useState({});
  const [upId, setUpId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [idPost, setIdPost] = useState("");
  const [tagsString, setTagsString] = useState('')
  const postId = router.query.id;

 

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({title, hashtags, description}) => {
    const arrHashtags = hashtags.split(',')
    axios.patch(`${URL_API}posts/${postId}`, {
      title,
      description,
      hashtags: arrHashtags
    },{
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      router.back()
    })
    .catch((error) => {})
  };

  useEffect(() => {
    const existsToken = localStorage.getItem("token");
    setToken(existsToken)
    if (!existsToken) {
      router.push(returnUrl);
      return;
    }
    setIsLogged(true);

    if (router.isReady) {
      
      axios
        .get(`${URL_API}posts/${postId}`)
        .then((response) => {
          const post = response.data.data.post;
          setUpId(post._id);
          setTitle(post.title);
          setDescription(post.description);
          let tags = ''
          setHashtags(tags.concat(post.hashtags));
        })
        .catch((error) => {})
        .finally(() => {});
    }
  }, [postId]);

  return (
    <>
      {isLoged ? (
        <section className="container-fluid " id="create-post">
          <form onSubmit={handleSubmit(onSubmit)} className="container crePost">
            <div className="row d-flex justify-content-between mt-3 crePost__letters">
              <div className="col-auto d-flex">
                <Link className="navbar-brand" href="/">
                  <img src="/assets/logos/logo-devto.png" />
                </Link>
                <p className="mt-2 ms-3">Edit Post</p>
              </div>
              <div className="col-auto d-flex align-items-center">
                <button className="me-2 btn">Edit</button>
                <button className="btn">Preview</button>
              </div>
            </div>
            <div className="row crePost__container card">
              <div className="col-auto">
                <article className="crePost__card mt-4">
                  <div>
                    <button className="crePost__btnAdd mt-2 mb-4 ms-2">
                      Add a cover image
                    </button>
                    <input
                      type="text"
                      className="form-control border-0 crePost__input"
                      id="input-title"
                      aria-describedby="emailHelp"
                      placeholder="New post title here..."
                      value={title}
                      {...register("title", {
                        onChange: (e) => {
                          setTitle(e.target.value);
                        },
                      })}
                    />
                    <p className="ms-3  mb-4 mt-2 cePost__label" />
                    <input
                      type="text"
                      className="form-control cePost__label"
                      placeholder="Add up to 4 tags... (javascript, nextjs, react)"
                      value={hashtags}
                      {...register("hashtags", {
                        required: true,
                        onChange: (e) => {
                          setHashtags(e.target.value)
                        }
                      })}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="row text-center crePost__component flex-wrap align-items-center mb-2">
              <div className="col-12 d-flex flex-row justify-content-between">
                <IconTools toolsComponent={tools} />
                <div className="d-flex align-items-center">
                  <img src="/assets/icons/createPost/tool11.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="row crePost__container crePost__container--text card">
              <div className="col-auto">
                <textarea
                  cols="20"
                  rows="10"
                  className="form-control border-0"
                  defaultValue={description}
                  {...register("description", {
                    onChange: (e) => {
                      setDescription(e.target.value);
                    },
                  })}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary btn-publish mt-3"
                id="savePost"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      ) : null}
    </>
  );
}


const IconTools = ({ toolsComponent }) => {
  return (
    <div className="d-flex tools">
      {toolsComponent.map((tool) => {
        return (
          <img
            key={tool.icon}
            className="crayons-icon me-3"
            src={tool.icon}
            alt=""
          />
        );
      })}
    </div>
  );
};