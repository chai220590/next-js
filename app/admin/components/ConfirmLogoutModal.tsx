"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
function ConfirmLogoutModal() {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const confirmLogout = searchParams.get("confirm-logout");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (confirmLogout !== null) {
      onOpen();
    }
  }, [confirmLogout]);

  const onLogout = () => {
    if (typeof window !== undefined) {
      localStorage.clear();
      setTimeout(() => {
        router.replace("/");
      }, 100);
    }
  };

  const customerOnClose = () => {
    router.replace(pathname.toString(), {});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={customerOnClose}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Đăng xuất</ModalHeader>
            <ModalBody>
              <div>
                <span>Xác nhận đăng xuất?</span>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" onClick={customerOnClose}>
                Hủy bỏ
              </Button>
              <Button color="primary" onClick={onLogout}>
                Xác nhận
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ConfirmLogoutModal;
