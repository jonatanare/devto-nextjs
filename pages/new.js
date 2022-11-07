import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import { useRouter } from "next/router";
const axios = require("axios");

export default function NewPost() {
  const router = useRouter();
  const URL_API = "http://localhost:8080/";
  const returnUrl = router.query.returnUrl || '/'
  const [isLoged, setIsLogged] = useState(false);

  useEffect(() => {
    const existsToken = localStorage.getItem("token");
    if (!existsToken) {
      router.push(returnUrl);
      return
    }

    setIsLogged(true);
  },[]);
  return <>{isLoged ? <CreatePost /> : null}</>;
}
