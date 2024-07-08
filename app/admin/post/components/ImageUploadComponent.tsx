import SysFetch from "@/services/fetch";
import { Image } from "@nextui-org/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ setImage }: any) => {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    handleUpload(acceptedFiles[0]);
  }, []);

  const handleUpload = async (file: string | Blob) => {
    setUploading(true);
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    try {
      const response: any = await SysFetch.post("upload/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.name) {
        setImage(response.name);
      }
      if (response.url) {
        setFile(response.url);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    multiple: false,
  });

  return (
    <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      {uploading ? (
        <div>isLoading</div>
      ) : (
        <div>
          {file ? (
            <div className="text-center">
              <Image
                src={file}
                alt={"UploadImage"}
                className="object-cover rounded-md mx-auto"
              />
            </div>
          ) : (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <Image
                src={
                  "https://jkfenner.com/wp-content/uploads/2019/11/default.jpg"
                }
                alt={"UploadImage"}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
