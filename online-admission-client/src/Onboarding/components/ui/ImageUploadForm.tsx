"use client"
import React, { useState, ChangeEvent } from "react";

interface ImageUploadFormProps {
  onUpload: (file: File) => void;
}

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('clicked');
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
