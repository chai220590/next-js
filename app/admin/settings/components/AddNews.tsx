import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  ListBulletIcon,
  RectangleStackIcon,
  Square2StackIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

function AddNews() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            <p>Tạo nhóm tin tức</p>
          </ModalHeader>
          <ModalBody>
            <Listbox>
              <ListboxItem
                className="p-4"
                startContent={<Squares2X2Icon className="size-6" />}
                key={"ListboxItem"}
              >
                Dạng lưới
              </ListboxItem>
              <ListboxItem
                className="p-4"
                startContent={<ListBulletIcon className="size-6" />}
                key={"ListboxItem"}
              >
                Dạng danh sách
              </ListboxItem>
              <ListboxItem
                className="p-4"
                startContent={<Square2StackIcon className="size-6" />}
                key={"ListboxItem"}
              >
                Dạng Banner
              </ListboxItem>
              <ListboxItem
                className="p-4"
                startContent={<RectangleStackIcon className="size-6" />}
                key={"ListboxItem"}
              >
                Dạng Slide
              </ListboxItem>
            </Listbox>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div
        onClick={onOpen}
        className="cursor-pointer border border-dashed border-primary rounded p-4 items-center justify-center flex"
      >
        <PlusCircleIcon className="size-6 text-primary" />
      </div>
    </div>
  );
}

export default AddNews;
