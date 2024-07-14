"use client";

import { useParams } from "next/navigation";
import FormCreatePage from "../../components/form-create/FormCreatePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminPageActions } from "../../service/slice";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";

function EditPage() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    getData();
  }, [params]);

  const getData = () => {
    dispatch(AdminPageActions.getDetailPageById(params));
  };

  const onEdit = () => {
    dispatch(AdminPageActions.updatePage({}));
  };

  return (
    <div>
      <ContainerHeader
        title={"Cập nhật trang"}
        right={
          <div>
            <Button onClick={onEdit} type="submit" color="primary" isIconOnly>
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

export default EditPage;
