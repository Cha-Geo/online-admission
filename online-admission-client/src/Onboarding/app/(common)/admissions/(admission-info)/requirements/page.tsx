// pages/admission-requirements.js

import { IconCheckCircle } from "@/components/icons";
import React from "react";


const AdmissionRequirements = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Admission Requirements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((requirement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                {requirement.title}
              </h2>
              <div className="pl-6">
                {requirement.items.map((item, i) => (
                  <div key={i} className="mb-2 flex items-start">
                    <IconCheckCircle className="text-green-600 mr-2 mt-1" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const requirements = [
  {
    title: "General Admission Requirements",
    items: [
      "Six (6) Passes (A1 – D7) in all subjects for WASSCE, including three (3) credit Passes (C6) or better in English Language and Core Mathematics. Applicants with Christian Religious Studies will have an advantage.",
      // ... (repeat for other requirements)
    ],
  },
  {
    title: "Mature Student Entry",
    items: [
      "An applicant, who does not satisfy all the requirements for the normal direct admission, shall be considered for a 'mature entry' mode of admission and be made to sit for an Entrance Examination and attend an interview.",
      "He/She must be at least 25 years old at the time of application.",
      "The Entrance Examination shall cover English Language, Mathematics, Bible Knowledge, and Current Affairs.",
      "A candidate shall be deemed to have passed the examination for admission if he/she obtains an overall total score of 40% with the breakdown as follows: English – 10%, Mathematics – 10%, Bible Knowledge – 15%, and Current Affairs – 5%.",
      // ... (repeat for other requirements)
    ],
  },
  {
    title: "International Applicants",
    items: [
      "Foreign students with qualifications equivalent to those mentioned above will be considered for admission.",
      "However, applicants from Francophone and other non-English speaking countries must attach to their applications evidence of Proficiency in English.",
      "All foreign certificates shall be referred to the National Accreditation Board for determination of equivalence.",
      // ... (repeat for other requirements)
    ],
  },
  {
    title: "Additional Requirements",
    items: [
      "All successful applicants are required to pass an oral interview.",
      "This requirement, however, does not apply to past students of the College who seek admission onto the Diploma Program.",
    ],
  },
];

export default AdmissionRequirements;
