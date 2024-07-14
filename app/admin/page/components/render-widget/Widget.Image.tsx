"use client";
import { LoginSelectors } from "@/app/login/service/login.slice";
import SysFetch from "@/services/fetch";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
type WidgetImageProps = { item?: any; onChange?: any; onRemove?: any };
const WidgetImage = (props: WidgetImageProps) => {
  const { item, onChange, onRemove } = props;

  const accessToken = useSelector(LoginSelectors.accessToken);
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
      const response: any = await SysFetch.postWithCustomHeader(
        "upload/media",
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        }
      );
      if (response.url) {
        onChange({
          ...item,
          value: response.url,
        });
        setUploading(false);
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
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex items-center justify-center"
      >
        <input {...getInputProps()} />
        {!!item.value && !uploading ? (
          <img src={item.value} alt={"UploadImage"} className="w-full" />
        ) : (
          <img
            src={"/images/image-icon.png"}
            className="h-20"
            alt={"UploadImage"}
          />
        )}
      </div>
    );
  }, [item, uploading]);

  const onRemoveItem = () => {
    onRemove(item);
  };

  return (
    <div className="mb-2 relative w-full mx-auto bg-gray-100 hover:border-primary border-1 border-dashed">
      {renderImage}
      <div className="absolute top-0 right-0">
        <Button onClick={onRemoveItem} color="danger" isIconOnly size="sm">
          <TrashIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default WidgetImage;
