"use client";
import { AdminActions, AdminSelectors } from "@/app/admin/service/slice";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

type FormValues = {
  [key: string]: any;
  appName?: string;
  phoneNumber?: string;
};

function AdminSettingSystem() {
  const dispatch = useDispatch();
  const systemSetting = useSelector(AdminSelectors.systemSetting);
  const isLoading = useSelector(AppSelectors.isLoading);
  const [initialValues, setInitialValues] = useState<FormValues>({
    appName: "",
    phoneNumber: "",
  });
  const { control, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    getSettingSystem();
  }, []);
  useEffect(() => {
    if (systemSetting) {
      const initialValues = {};
      systemSetting.forEach((setting: { code: string; value: string }) => {
        setValue(setting.code, setting.value);
        // @ts-ignore
        initialValues[setting.code] = setting.value;
      });
      setInitialValues(initialValues);
    }
  }, [systemSetting, setValue]);

  const getSettingSystem = () => {
    dispatch(AdminActions.getSystemSetting({ key: "system" }));
  };

  const onSubmit = (data: { [x: string]: any }) => {
    const newData = _.cloneDeep(systemSetting);

    Object.keys(data).forEach((key) => {
      const obj = _.find(newData, { code: key });
      if (obj) {
        obj.value = data[key];
      }
    });
    dispatch(AdminActions.setSystemSetting(newData));
    dispatch(AdminActions.saveSystemSetting());
  };
  const currentValues = watch();
  const isFormChanged = !_.isEqual(initialValues, currentValues);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between my-4">
        <div className="text-2xl font-bold mb-4">Cài đặt hệ thống</div>
        <div>
          <Button
            isLoading={isLoading}
            type="submit"
            color="primary"
            isIconOnly
            isDisabled={!isFormChanged}
          >
            <CloudArrowUpIcon className="size-4 text-white" />
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <Controller
          name="appName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              label="app name"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              label="app name"
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>
    </form>
  );
}

export default AdminSettingSystem;
