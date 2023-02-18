import React, { useEffect, useState, useCallback } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import HeroSection from "../components/HeroSection";

function Adoptions({ isAuth }) {
  const [adoptionLists, setAdoptionLists] = useState([]);
  const adoptionsCollectionRef = collection(db, "adoptions");

  const deletePost = useCallback(async (id) => {
    const adoptionDoc = doc(db, "adoptions", id);
    await deleteDoc(adoptionDoc);
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(adoptionsCollectionRef);
        setAdoptionLists(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [deletePost]);
  return (
    <div>
      <HeroSection />
      <div className="homePage">
        {adoptionLists.map((post) => {
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
              <div className="postTextContainer"> {post.adoptionText} </div>
              <img src={post.image} alt="" />
              <h3>@{post.author.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Adoptions;
