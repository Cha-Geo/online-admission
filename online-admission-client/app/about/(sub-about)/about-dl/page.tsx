// pages/core-values.js

import React from "react";

const CoreValueCard = ({ title, description }: any) => (
  <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutDLPage = () => {
  const coreValues = [
    {
      title: "Honesty",
      description:
        "We embrace honesty and base our decision making and lifestyle on conditions of chastity.",
    },
    {
      title: "Integrity",
      description:
        "We ensure strong moral principles in developing godly character.",
    },
    {
      title: "Diligence",
      description:
        "We achieve excellence through hard work, conscientiousness, determination, and perseverance.",
    },
    {
      title: "Dedication",
      description:
        "We are committed to actualizing our collective task of building and equipping God’s future army.",
    },
    {
      title: "Holiness",
      description:
        "We stand for piety and total devotion to God in life and ministry.",
    },
  ];

  const collegePhilosophy = `Important for the Christian is the realization that all knowledge apart from Christ is vanity, but all knowledge dedicated to the glory and service of God is wisdom. The Christian environment at DL-IBTC enables students to formulate sound principles and practices that will enhance their Christian witness.
  
  Each of the subjects taught is approached from the standpoint of the absolute supremacy of Biblical truth. The active agent in the interpretation of the scriptures is the Holy Spirit, who enables and strengthens each Christian in the search for truth.`;

  return (
    <div className="min-h-screen py-12">
      <div className="container ">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Our Core Values
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((coreValue, index) => (
            <CoreValueCard key={index} {...coreValue} />
          ))}
        </div>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-semibold mb-4">College Philosophy</h2>
          <p className="text-gray-600">{collegePhilosophy}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDLPage;
