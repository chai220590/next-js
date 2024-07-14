import {
  DocumentTextIcon,
  PencilIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { uniqueId } from "lodash";
import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";
import { AdminPageActions } from "../../service/slice";

function AddWidgetModal() {
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onAdd = (newWidget: any) => {
    dispatch(AdminPageActions.addNewContentWidget(newWidget));
  };

  const widgetList = [
    {
      name: "Tiêu đề",
      type: "title",
      icon: <PencilSquareIcon className="size-10 text-primary" />,
    },
    {
      name: "Text",
      type: "text",
      icon: <PencilIcon className="size-10 text-primary" />,
    },
    {
      name: "Hình ảnh",
      type: "image",
      icon: <PhotoIcon className="size-10 text-primary" />,
    },
    {
      name: "Nội dung",
      type: "html",
      icon: <DocumentTextIcon className="size-10 text-primary" />,
    },
  ];

  const onAddNew = (oneWidget: any) => {
    switch (oneWidget.type) {
      case "title":
        const newTitle = {
          type: "title",
          value: "",
          config: {},
          id: `${uniqueId()}${uuid_v4()}`,
        };
        onAdd && onAdd(newTitle);
        break;
      case "text":
        const newText = {
          type: "text",
          value: "",
          config: {},
          id: `${uniqueId()}${uuid_v4()}`,
        };
        onAdd && onAdd(newText);
        break;
      case "image":
        const newImage = {
          type: "image",
          value: "",
          config: {},
          id: `${uniqueId()}${uuid_v4()}`,
        };
        onAdd && onAdd(newImage);
        break;

      case "html":
        const newHtml = {
          type: "html",
          value: "",
          config: {},
          id: `${uniqueId()}${uuid_v4()}`,
        };
        onAdd && onAdd(newHtml);
        break;
    }
    onClose && onClose();
  };

  return (
    <div>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Thêm tiện ích</ModalHeader>
          <ModalBody>
            <div className="grid gap-4 grid-cols-4 items-center justify-center">
              {widgetList.map((oneWidget) => {
                return (
                  <div
                    className="cursor-pointer rounded-lg transition hover:bg-slate-50 p-4 col-span-1 items-center justify-center text-center"
                    onClick={() => onAddNew(oneWidget)}
                    key={oneWidget.name}
                  >
                    <div className="flex items-center justify-center pb-4">
                      {oneWidget.icon}
                    </div>
                    <div className="text-small">{oneWidget.name}</div>
                  </div>
                );
              })}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button variant="bordered" size="sm" onClick={onOpen}>
        Thêm tiện ích
      </Button>
    </div>
  );
}

export default AddWidgetModal;
