import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CustomCKEditor = (props: any) => {
  return (
    <div className="custom-editor">
      <CKEditor
        editor={ClassicEditor}
        data={props.value}
        onChange={(event, editor) => {
          const data = editor.getData();
          props.onChange(data);
        }}
      />
    </div>
  );
};

export default CustomCKEditor;
