"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How does PawArtAI work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        It's simple: upload a clear photo of your pet, choose your preferred adventure setting (like the 7 Wonders of the World, Disneyworld, the beach, or space), and our AI will create a magical image of your pet in that scene. Within minutes, you'll receive a unique, professional image ready to download.
      </div>
    ),
  },
  {
    question: "What type of pet photos work best?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The best photos are those where your pet is clearly visible, especially their face, with good lighting and a simple background. We accept photos of any pet: dogs, cats, rabbits, even hamsters!
      </div>
    ),
  },
  {
    question: "How long does it take to generate each image?",
    answer: (
      <p>
        Usually, images are generated within 1-2 minutes. Once ready, you can immediately download them in high quality.
      </p>
    ),
  },
  {
    question: "Can I request a refund?",
    answer: (
      <p>
        Yes, we offer a full refund if you're not satisfied with the results. You have 7 days from your purchase to request it via email.
      </p>
    ),
  },
  {
    question: "Do credits expire?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        No, the credits you purchase never expire. You can use them whenever you want to create magical adventures with your pets.
      </div>
    ),
  },
  {
    question: "Do I need technical knowledge to use PawArtAI?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Not at all! Our interface is very intuitive and user-friendly. If you need help, our support team is available to guide you every step of the way.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
              }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
