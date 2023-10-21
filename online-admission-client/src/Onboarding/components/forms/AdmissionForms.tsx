"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconSelect } from "../icons";

interface IUpload {
  firstName: string;
  lastName: string;
  email: string;
  files: File[];
}

const AdmissionForm = () => {
  const [formData, setFormData] = useState<IUpload>({
    firstName: "",
    lastName: "",
    email: "",
    files: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    setFormData({ ...formData, files: [...formData.files, ...files] });
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...formData.files];
    updatedFiles.splice(index, 1);
    setFormData({ ...formData, files: updatedFiles });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Student Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <div className="relative border rounded w-full p-2 text-center cursor-pointer bg-blue-100 text-gray-800 hover:bg-blue-300">
            <div className="flex justify-between items-center space-x-1">
              <span className="a">
                Choose Files
              </span>
              <IconSelect fill="#000" className="w-6 h-6 cursor-pointer"/>
            </div>
            <input
              type="file"
              id="files"
              name="files"
              multiple
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {formData.files.map((file: File, index: number) => (
              <div
                key={index}
                className={`relative border rounded ${
                  file.type === "application/pdf" && " bg-gray-300"
                }`}
              >
                <Image
                  src={URL.createObjectURL(file)}
                  alt={
                    file.type === "application/pdf"
                      ? "PDF Preview"
                      : "File Preview"
                  }
                  width={320} //
                  height={240}
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 text-white bg-red-500 rounded-full p-1 px-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;