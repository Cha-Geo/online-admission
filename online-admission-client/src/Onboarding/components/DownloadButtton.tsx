"use client";
import React, { useEffect, useState } from "react";
import { IconDownload } from "./icons";
import { clientFetcher, clientUploadFetcher } from "@/services/dataFetching";
import { useSession } from "next-auth/react";
import { AuthRequiredError } from "@/public/lib/exceptions";
import { UseSuccessToast } from "@/public/lib/hooks/use-toast";

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  fileId,
  baseurl,
}) => {
  const [filename, setFilename] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();

  useEffect(() => {
    const serverUrl = `${baseurl}/${fileId}/info`;

    clientFetcher(serverUrl)
      .then((response) => {
        if (response && response.filename) {
          setFilename(response.filename); // Set the filename from the response
        } else {
          console.error("No filename found in the response");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [baseurl, fileId]);

  const downloadFile = () => {
    console.log("filename: ", filename);
    const serverUrl = `${baseurl}/${fileId}/download`;

    const token = session?.token ? session?.token : "invalid-token";

    setLoading(true);
    clientUploadFetcher(serverUrl, token)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        UseSuccessToast("File has started downloading. Check your downloads.");
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        setLoading(false);
        throw new AuthRequiredError("Fetch error" + error);
      });
  };

  console.log("file name: ", filename);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
      onClick={downloadFile}
    >
      {loading ? (
        // <PleaseWait className="w-5 h-5 border-neutral-50" />
      null
      ) : (
        <>
          <IconDownload className="w-6 h-6 mr-2" /> {text}
        </>
      )}
    </button>
  );
};

export default DownloadButton;
