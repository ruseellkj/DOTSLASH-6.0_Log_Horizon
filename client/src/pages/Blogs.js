import React, { useEffect, useState, useCallback } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "./blog.css";
import CountUp from "react-countup";
import HeroQuote from "../components/HeroQuote";
import HeroBlog from "../components/HeroBlog";

function Blogs({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = useCallback(async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [postLists]);

  return (
    <div>
      <HeroBlog />
      <section id="statistic" className="statistic-section one-page-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-md-4">
              <div className="counter">
                <i className="fa fa-coffee fa-2x stats-icon"></i>
                <h2 className="timer count-title count-number">
                  <CountUp start={0} end={75} delay={0} />
                  M+
                </h2>
                <div className="stats-line-black"></div>
                <p className="stats-text">
                  stray dogs & cats living on India’s streets
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="counter">
                <i className="fa fa-code fa-2x stats-icon"></i>
                <h2 className="timer count-title count-number">
                  <CountUp start={0} end={8.8} delay={0} />
                  M+
                </h2>
                <div className="stats-line-black"></div>
                <p className="stats-text">
                  strays in india’s shelters, and quickly . running out of space
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="counter">
                <i className="fa fa-clock-o fa-2x stats-icon"></i>
                <h2 className="timer count-title count-number">
                  <CountUp start={0} end={9} delay={0} />
                  M+
                </h2>
                <div className="stats-line-black"></div>
                <p className="stats-text">stray homeless cats in india</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroQuote />

      <div className="homePage">
        {postLists.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1> {post.title}</h1>
                </div>
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      {" "}
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
              <h3>@{post.author.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
