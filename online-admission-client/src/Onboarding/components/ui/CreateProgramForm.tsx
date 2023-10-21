"use client";
import React, { ChangeEvent, useState } from "react";

interface ICreatePrograms {
  name: string;
  //   description: string;
  duration: number;
  file: File | null;
}

const CreateProgramForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState<ICreatePrograms>({
    name: "",
    duration: 0,
    file: null,
  });
  const [error, setError] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormValues({ ...formValues, file: file || null });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ name: "", duration: 0, file: null });

      const create_program_data = {
        name: formValues.name,
        duration: formValues.duration,
      };

      const formData = new FormData();
      if (formValues.file) {
        formData.append("files", formValues.file);
      }

      formData.append("data", JSON.stringify(create_program_data));
      const programURL = `http://localhost:7700/api/programmes`;
      const postInit: RequestInit = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        credentials: "include",
        body: formData,
      };
      const response = await fetch(programURL, postInit);

      if (response.ok) {
        console.log("Program creaated successfully");
        console.log(response.text());
      } else {
        console.error("Program creation failed");
      }
    } catch (error: any) {
        console.error("An error occurred:", error);
        setError(error.message!)
    } finally {
      setLoading(false);
      setFormValues({ name: "", duration: 0, file: null });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form
        onSubmit={onSubmit}
        className="mt-5 max-w-[24rem] w-[24rem] flex flex-col glassmorphism "
      >
        {error && (
          <p className="text-center font-normal bg-red-300 py-2 mb-4 mt-2 rounded-md">
            {error}
          </p>
        )}
        <div className={`mb-2 ${error ? "mt-0" : "mt-6"}`}>
          <input
            required
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Programme name"
            className={`form_input`}
          />
        </div>
        <div className="mb-6">
          <input
            required
            type="number"
            name="duration"
            value={formValues.duration}
            onChange={handleChange}
            placeholder="programme duration"
            className={`form_input`}
          />
        </div>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          style={{
            fontSize: "20px",
            height: "2.8rem",
            backgroundColor: `${loading ? "#ccc" : ""}`,
          }}
          className="px-7 py-4 mb-3 blue_btn"
          disabled={loading}
        >
          {loading ? "loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default CreateProgramForm;
