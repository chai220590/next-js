import { AppSelectors } from "@/services/app/app.slice";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function ProductDetailSetting({ label = "", settingName = "" }) {
  const systemSetting = useSelector(AppSelectors.systemSetting);

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      setData(JSON.parse(systemSetting[settingName] || "[]"));
    } catch (error) {}
  }, [systemSetting]);

  return _.isEmpty(data) ? (
    <></>
  ) : (
    <div>
      <div className="font-bold mb-2">{label}</div>
      {data.map((x, index) => {
        return (
          <div key={`${index}`} className="mb-2 flex gap-2">
            <div className="mt-1">
              <ShieldExclamationIcon className="size-4 text-success" />
            </div>
            <div className="leading">
              <span className="text-sm">{x}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailSetting;
