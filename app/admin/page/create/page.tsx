"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormCreatePage from "../components/form-create/FormCreatePage";
import { AdminPageActions, AdminPageSelectors } from "../service/slice";

function page() {
  const dispatch = useDispatch();
  const isLoading = useSelector(AppSelectors.isLoading);
  const editPageId = useSelector(AdminPageSelectors.editPageId);
  const router = useRouter();
  useEffect(() => {
    if (editPageId) {
      router.push(`/admin/page/edit/${editPageId}`);
    }
  }, [editPageId]);

  const onSave = () => {
    dispatch(AdminPageActions.createPage({}));
  };

  return (
    <div>
      <ContainerHeader
        title={"Tạo trang"}
        right={
          <div>
            <Button
              onClick={onSave}
              isLoading={isLoading}
              type="submit"
              color="primary"
              isIconOnly
            >
              <CloudArrowUpIcon className="size-4 text-white" />
            </Button>
          </div>
        }
      />
      <div>
        <FormCreatePage />
      </div>
    </div>
  );
}

export default page;
