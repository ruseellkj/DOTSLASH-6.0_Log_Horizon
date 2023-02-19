import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateAdoption({ isAuth }) {
  const [title, setTitle] = useState("");
  const [adoptionText, setAdoptionText] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");

  const adoptionsCollectionRef = collection(db, "adoptions");
  let navigate = useNavigate();

  const createAdoption = async () => {
    await addDoc(adoptionsCollectionRef, {
      title,
      location,
      adoptionText,
      image,
      phone,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/adoptions");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create an Adoption</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            required
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Image of Animal: </label>
          {/* <input
            type="file"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          /> */}
          {/* <img src={file} /> */}
          <input
            placeholder="Url..."
            type="url"
            required
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Location:</label>
          <input
            required
            placeholder="Location..."
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Contact:</label>
          <input
            required
            placeholder="Phone number..."
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Description:</label>
          <textarea
            placeholder="Description"
            onChange={(event) => {
              setAdoptionText(event.target.value);
            }}
          />
        </div>
        <button onClick={createAdoption}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreateAdoption;
