"use client";
import { AdminActions, AdminSelectors } from "@/app/admin/service/slice";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
function AdminSettingSystem() {
  const dispatch = useDispatch();
  const systemSetting = useSelector(AdminSelectors.systemSetting);

  useEffect(() => {
    getSettingSystem();
  }, []);

  const getSettingSystem = () => {
    dispatch(AdminActions.getSystemSetting({ key: "setting-system" }));
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

  const inputPropsHandle = useCallback(
    (code: any) => {
      return {
        value: _.find(systemSetting, { code })?.value,
        onChange: (e: { target: { value: any } }) => {
          const currentItem = _.find(systemSetting, { code });
          dispatch(
            AdminActions.saveSystemSetting({
              ...currentItem,
              value: e.target.value,
            })
          );
          dispatch(
            AdminActions.setSystemSetting(
              updateValueByCode(code, e.target.value)
            )
          );
        },
      };
    },
    [systemSetting]
  );

  const renderContent = useMemo(() => {
    return (
      <div>
        <div className="flex justify-between items-center my-4">
          <div className="text-2xl font-bold mb-4">Cài đặt hệ thống</div>
        </div>
        <div className="mb-4">
          <Input fullWidth label="app name" {...inputPropsHandle("appName")} />
        </div>
        <div className="mb-4">
          <Input
            fullWidth
            label="phone number"
            {...inputPropsHandle("phoneNumber")}
          />
        </div>
      </div>
    );
  }, [systemSetting]);

  return renderContent;
}

export default AdminSettingSystem;
