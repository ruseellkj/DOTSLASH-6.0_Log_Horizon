import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const data = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital Marketing is any kind of marketing that is geared towards smartphones, laptop, tablets and basically any other device that is capable of connecting to Wi-Fi. ",
    },
    {
      question: "Would my company benefit from digital marketing?",
      answer:
        "You don't have to replace your traditional marketing efforts with digital ones, but it is 2023 and if the word digital doesn't come into your marketing strategy then your business will not thrive. It really is as simple as that. ",
    },
    {
      question: "What is SEO?",
      answer:
        "Search Engine Optimisation is the practice of using on-page and off-page tweaks and tactics to ensure that your page ranks higher on search engines.  ",
    },
    {
      question: "What are keywords?",
      answer:
        "Keywords are the words and phrases that searchers use- usualy on a search engine. These are the words that we use when looking for pages, images, videos, blogs, any kinf of information or content on the web really. These keywords need to be strategically inserted into your pages and content.",
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
