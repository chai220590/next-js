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
import { useDispatch } from "react-redux";
import { PostActions } from "../../service/slice";
import { useSelector } from "react-redux";
import { AppSelectors } from "@/services/app/app.slice";
function ConfirmDeletePost() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector(AppSelectors.isLoading);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const confirm = searchParams.get("confirm-delete");

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (confirm !== null) {
      onOpen();
    }
  }, [confirm]);

  const onAccess = () => {
    dispatch(
      PostActions.deletePost({
        postId: confirm,
        onSuccess: () => {
          dispatch(PostActions.getList({}));
          router.replace(pathname.toString(), {});
          onClose();
        },
      })
    );
  };

  const customerOnClose = () => {
    router.replace(pathname.toString(), {});
    onClose();
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={customerOnClose}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Xóa bài đăng
            </ModalHeader>
            <ModalBody>
              <div>
                <span>Xác nhận xóa bài đăng?</span>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="default" onClick={customerOnClose}>
                Hủy bỏ
              </Button>
              <Button isLoading={isLoading} color="primary" onClick={onAccess}>
                Xác nhận
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ConfirmDeletePost;
