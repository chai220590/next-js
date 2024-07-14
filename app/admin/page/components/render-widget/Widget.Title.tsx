import {
  ArrowsUpDownIcon,
  ClipboardDocumentCheckIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { useEffect, useRef, useState } from "react";

type WidgetTitleProps = { item?: any; onChange?: any; onRemove?: any };

function WidgetTitle({ item, onChange, onRemove }: WidgetTitleProps) {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<any>();

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

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
    <div className="mb-2 border-1 hover:border-primary border-dashed relative flex justify-between items-center">
      {isEdit ? (
        <div className="flex-1">
          <input
            placeholder={item.value}
            onChange={onChangeText}
            onBlur={onBlur}
            ref={inputRef}
            className="w-full text-2xl font-medium"
            value={item.value}
          />
        </div>
      ) : (
        <div className="flex-1" onClick={() => setIsEdit(true)}>
          <p
            className={`${
              item.value ? "text-black" : "text-default-400"
            } text-2xl font-medium`}
          >
            {item.value || "Chưa có nội dung cho text"}
          </p>
        </div>
      )}
      {isEdit ? (
        <div></div>
      ) : (
        <div className="p-2">
          <ArrowsUpDownIcon className="size-4" />
        </div>
      )}
      <div className="">
        <Button onClick={onRemoveItem} color="danger" isIconOnly size="sm">
          <TrashIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default WidgetTitle;
