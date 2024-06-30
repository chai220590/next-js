"use client";
import { AdminActions, AdminSelectors } from "@/app/admin/service/slice";
import _ from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Policy from "../components/Policy";

function AdminSettingProduct() {
  const dispatch = useDispatch();
  const systemSetting = useSelector(AdminSelectors.systemSetting);
  const [policyList, setPolicyList] = useState([]);

  // init data
  useEffect(() => {
    if (systemSetting) {
      // set policy
      initPolicy();
    }
  }, [systemSetting]);

  const initPolicy = () => {
    const obj = _.find(systemSetting, { code: "policy" });
    if (obj?.value) {
      setPolicyList(JSON.parse(obj?.value));
    }
  };

  useEffect(() => {
    getSettingSystem();
  }, []);

  const getSettingSystem = () => {
    dispatch(AdminActions.getSystemSetting({ key: "setting-product" }));
  };

  const updateValueByCode = useCallback(
    (code: any, value: any) => {
      const newData = _.cloneDeep(systemSetting);

      const obj = _.find(newData, { code });
      if (obj) {
        obj.value = value;
      }

      return newData;
    },
    [systemSetting]
  );

  const renderContent = useMemo(() => {
    return (
      <div>
        <div className="flex justify-between items-center my-4">
          <div className="text-2xl font-bold">Cài đặt sản phẩm</div>
        </div>
        <div className="mb-4">
          <Policy list={policyList} setPolicyList={setPolicyList} />
        </div>
      </div>
    );
  }, [systemSetting, policyList]);

  return renderContent;
}

export default AdminSettingProduct;
