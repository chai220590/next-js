"use client";
import { AdminActions, AdminSelectors } from "@/app/admin/service/slice";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function AdminSettingSystem() {
  const dispatch = useDispatch();
  const isLoading = useSelector(AppSelectors.isLoading);
  const systemSetting = useSelector(AdminSelectors.systemSetting);
  const [appName, setAppName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    initData();
  }, [systemSetting]);

  const initData = () => {
    if (!_.isEmpty(systemSetting)) {
      handleSetData("appName", setAppName);
      handleSetData("phoneNumber", setPhoneNumber);
    }
  };

  const handleSetData = (code: any, setCode: (arg0: any) => void) => {
    const temp = _.find(systemSetting, { code });
    if (temp) {
      setCode(temp?.value);
    }
  };

  useEffect(() => {
    getSettingSystem();
  }, []);

  const getSettingSystem = () => {
    dispatch(AdminActions.getSystemSetting({ key: "setting-system" }));
  };
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <div className="text-2xl font-bold mb-4">Cài đặt hệ thống</div>
        <div>
          <Button isIconOnly color="primary">
            <CloudArrowUpIcon className="size-6" />
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <Input
          fullWidth
          label="app name"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Input
          fullWidth
          label="phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
}

export default AdminSettingSystem;
