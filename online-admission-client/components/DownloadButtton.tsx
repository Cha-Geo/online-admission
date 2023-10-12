'use client'
import React, { useEffect, useState } from 'react';
import { IconDownload } from './icons';

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, fileId }) => {
  const [filename, setFilename] = useState<string>('');

useEffect(() => {
  const serverUrl = `http://localhost:7700/api/programmes/files/${fileId}/info`;

  fetch(serverUrl)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: IData = await response.json();
      if (data && data.filename) {
        setFilename(data.filename); // Set the filename from the response
      } else {
        console.error("No filename found in the response");
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, [fileId]);

const downloadFile = () => {
    console.log('filename: ',filename);
    const serverUrl = `http://localhost:7700/api/programmes/download/${fileId}`;
          const myInit: RequestInit = {
            mode: "cors",
          };

    fetch(serverUrl, myInit)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = filename; 
        a.click();
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
      onClick={downloadFile}
    >
      <IconDownload className="w-6 h-6 mr-2" /> {text}
    </button>
  );
};

export default DownloadButton;
