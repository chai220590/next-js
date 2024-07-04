"use client";
import { AdminActions } from "@/app/admin/service/slice";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSettingCustom from "../components/ProductSettingCustom";
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
      <ContainerHeader
        title={"Cài đặt sản phẩm"}
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
      <div className="mt-4">
        <ProductSettingCustom
          label="Chính sách mua hàng"
          settingName={"policy"}
        />
      </div>
      <div className="mt-4">
        <ProductSettingCustom
          label="Chính sách vận chuyển"
          settingName={"delivery"}
        />
      </div>
    </div>
  );
}

export default AdminSettingProduct;
