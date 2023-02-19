import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const data = [
    {
      question: "Instagram Fundraiser",
      answer:
        "Create a fundraiser on your Instagram bio. Rally your Family and Friends to raise $250 by adding a Fundraiser to your bio. Steps to add fundraiser to bio. New post. Tap Add Fundraiser. Choose Stray Animal Foundation of India from the list. Youll go to the “Fundraiser Details” page. Enter the details for your fundraiser and then tap Done.",
    },
    {
      question: "Kids Birthday Party Fundraiser",
      answer:
        "Have your child pick a program or dog to Sponsor. We will set up a fundraiser to with your pictures and information. Share with your family and friends. Once the money is raised, we will send a card with the dog photo and a message. “Celebrate Your Birthday Meaningfully”.",
    },
    {
      question: "Graduation Party Fundraiser",
      answer:
        "Have your son/daughter pick a program or dog to Sponsor. We will set up a fundraiser to with your pictures and information. Share with your family and friends. Once the money is raised, we will send a card with the dog photo and a message. “Celebrate Your graduation, milestone Meaningfully.” ",
    },
    {
      question: "Open a regional chapter",
      answer:
        "Contact us to open a regional chapter. We will send starter kit, rules and ideas. Organize runs. You can organize by contacting local run organizers. Contact local Indian associations to send out email and share on social media about charity run. Donate by going to donate us page. Optionally we care create a fundraiser to track donations",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span className="plusminus">{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
