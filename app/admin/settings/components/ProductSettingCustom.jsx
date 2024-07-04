import DndList from "@/components/dnd/DndList";
import {
  ArrowsUpDownIcon,
  PlusIcon,
  ShieldExclamationIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import _ from "lodash";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminActions, AdminSelectors } from "../../service/slice";
function ProductSettingCustom({ settingName = "", label = "" }) {
  const dispatch = useDispatch();
  const systemSetting = useSelector(AdminSelectors.systemSetting);

  const settingCustomData = JSON.parse(
    _.find(systemSetting, {
      code: settingName,
    })?.value || "[]"
  );

  const setSettingCustomData = (data) => {
    dispatch(
      AdminActions.setSystemSetting(
        systemSetting.map((x) => {
          if (x.code === settingName) {
            return {
              ...x,
              value: JSON.stringify(data),
            };
          } else {
            return x;
          }
        })
      )
    );
  };

  const onAddNew = useCallback(() => {
    settingCustomData.push("");
    setSettingCustomData([...settingCustomData]);
  }, [settingCustomData]);

  const onDelete = useCallback(
    (removeIndex) => {
      const filteredItems = settingCustomData
        .slice(0, removeIndex)
        .concat(
          settingCustomData.slice(removeIndex + 1, settingCustomData.length)
        );
      setSettingCustomData(filteredItems);
    },
    [settingCustomData]
  );

  const onChangePolicy = useCallback(
    ({ index, value }) => {
      setSettingCustomData(
        settingCustomData.map((x, i) => {
          return i === index ? value : x;
        })
      );
    },
    [settingCustomData]
  );

  return (
    <div>
      <div className="flex items-center">
        <div className="mr-4">
          <span className="font-medium">{label}</span>
        </div>
        <Button size="sm" color="success" isIconOnly onClick={onAddNew}>
          <PlusIcon className="size-6 text-white" />
        </Button>
      </div>
      <div className="p-4 rounded-md">
        <DndList
          setList={(list) => {
            setSettingCustomData(
              list.map((x) => {
                return x.value;
              })
            );
          }}
          list={settingCustomData.map((oneItem, index) => {
            return {
              id: `${index}`,
              value: oneItem,
              content: (
                <div className="flex items-center py-2 gap-2" key={`${index}`}>
                  <ShieldExclamationIcon className="size-4 text-success" />
                  <Textarea
                    minRows={1}
                    value={oneItem}
                    onChange={(e) =>
                      onChangePolicy({
                        index,
                        value: e.target.value,
                      })
                    }
                  />
                  <div className="w-8 flex justify-center items-center">
                    <ArrowsUpDownIcon className="size-4" />
                  </div>
                  <Button
                    size="sm"
                    color="danger"
                    isIconOnly
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    <TrashIcon className="size-4" />
                  </Button>
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
}

export default ProductSettingCustom;
