"use client";
import { AdminActions } from "@/app/admin/service/slice";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Policy from "../components/Policy";

function AdminSettingProduct() {
  const dispatch = useDispatch();
  const isLoading = useSelector(AppSelectors.isLoading);

  useEffect(() => {
    getSettingSystem();
  }, []);

  const getSettingSystem = () => {
    dispatch(AdminActions.getSystemSetting({ key: "product" }));
  };
  const onSave = () => {
    dispatch(AdminActions.saveSystemSetting());
  };
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <div className="text-2xl font-bold">Cài đặt sản phẩm</div>
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
      </div>
      <div className="mb-4">
        <Policy />
      </div>
    </div>
  );
}

export default AdminSettingProduct;
