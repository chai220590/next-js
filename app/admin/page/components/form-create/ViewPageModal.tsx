import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useSelector } from "react-redux";
import { AdminPageSelectors } from "../../service/slice";

function ViewPageModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const body = useSelector(AdminPageSelectors.body);

  return (
    <div>
      <Modal
        size="full"
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalHeader>Xem trước trang</ModalHeader>
          <ModalBody>
            <div className={`container mx-auto fade-in`}>
              <div>
                {body.map((oneWG: any, index: any) => {
                  return (
                    <div key={`${index}`} className="mb-2">
                      {oneWG.type === "title" && (
                        <p className=" text-2xl font-medium">{oneWG.value}</p>
                      )}
                      {oneWG.type === "image" && (
                        <img className="w-full" src={oneWG.value} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button onClick={onOpen} className="" variant="bordered" size="sm">
        Xem trước
      </Button>
    </div>
  );
}

export default ViewPageModal;
