"use client";
import { LoginSelectors } from "@/app/login/service/login.slice";
import CONST from "@/services/const";
import SysFetch from "@/services/fetch";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ArrowsUpDownIcon,
  CheckIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

type WidgetHtmlProps = { item?: any; onChange?: any; onRemove?: any };

function WidgetHtml({ item, onChange, onRemove }: WidgetHtmlProps) {
  console.log(item);

  const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   if (isEdit && inputRef) {
  //     inputRef.current.focus();
  //   }
  // }, [isEdit]);

  const onBlur = () => {
    setIsEdit(false);
  };

  const onChangeText = (e: any) => {
    onChange({
      ...item,
      value: e.target.value,
    });
  };

  const onRemoveItem = () => {
    onRemove(item);
  };

  return (
    <div className="mb-2 min-h-20 border-1 hover:border-primary border-dashed relative justify-between items-center">
      <div className="absolute flex top-0 right-0 z-10">
        {isEdit ? (
          <>
            <div className="">
              <Button
                onClick={onRemoveItem}
                color="danger"
                isIconOnly
                size="sm"
                className="mr-2 text-white"
              >
                <TrashIcon className="size-4 text-white" />
              </Button>
            </div>
            <div>
              <Button
                onClick={() => setIsEdit(false)}
                color="success"
                isIconOnly
                size="sm"
              >
                <CheckIcon className="size-4" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="p-2">
              <ArrowsUpDownIcon className="size-4" />
            </div>
            <div className="">
              <Button
                onClick={onRemoveItem}
                color="danger"
                isIconOnly
                size="sm"
              >
                <TrashIcon className="size-4" />
              </Button>
            </div>
          </>
        )}
      </div>
      {isEdit && typeof window != undefined ? (
        <div className="w-full">
          <CKEditor
            editor={ClassicEditor}
            data={item.value}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange({
                ...item,
                value: data,
              });
            }}
            config={{
              extraPlugins: [MyCustomUploadAdapterPlugin],
            }}
          />
        </div>
      ) : (
        <div onClick={() => setIsEdit(true)}>
          {item.value ? (
            <div
              dangerouslySetInnerHTML={{
                __html: item.value,
              }}
            />
          ) : (
            <div className="w-full h-20">Chưa có nội dung</div>
          )}
        </div>
      )}
    </div>
  );
}

export default WidgetHtml;

function MyCustomUploadAdapterPlugin(editor: {
  plugins: {
    get: (arg0: string) => {
      (): any;
      new (): any;
      createUploadAdapter: (loader: any) => MyUploadAdapter;
    };
  };
}) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  loader: any;
  constructor(loader: any) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file: any) =>
        new Promise((resolve, reject) => {
          this._initRequest(resolve, reject, file);
        })
    );
  }

  abort() {
    // Abort the upload process.
  }

  _initRequest(
    resolve: { (value: unknown): void; (arg0: { default: any }): void },
    reject: { (reason?: any): void; (arg0: string): void },
    file: string | Blob
  ) {
    const formData = new FormData();
    formData.append("file", file);
    const accessToken =
      typeof window !== "undefined"
        ? window.localStorage.getItem(CONST.STORAGE.ACCESS_TOKEN)
        : "";

    SysFetch.post("/upload/media", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response: any) => {
        resolve({
          default: response?.url,
        });
      })
      .catch((error) => {
        console.log(error);
        reject(`Upload file thất bại`);
      });
  }
}
