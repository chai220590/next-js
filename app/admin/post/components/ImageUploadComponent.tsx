import SysFetch from "@/services/fetch";
import { Image } from "@nextui-org/react";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = ({ setImage, image }: any) => {
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
      if (response.url) {
        setImage(response.url);
        setTimeout(() => {
          setUploading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Upload error:", error);
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

  const renderImage = useMemo(() => {
    return (
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {!!image && !uploading ? (
          <Image
            isLoading={uploading}
            src={image}
            alt={"UploadImage"}
            className="object-cover rounded-md mx-auto"
          />
        ) : (
          <Image
            isLoading={uploading}
            src={"https://jkfenner.com/wp-content/uploads/2019/11/default.jpg"}
            alt={"UploadImage"}
          />
        )}
      </div>
    );
  }, [image, uploading]);

  return (
    <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      {renderImage}
    </div>
  );
};

export default ImageUpload;
