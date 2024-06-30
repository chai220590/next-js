import { MinusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AdminActions, AdminSelectors } from "../../service/slice";
import { useSelector } from "react-redux";
function Policy({ list, setPolicyList }) {
  const systemSetting = useSelector(AdminSelectors.systemSetting);
  const dispatch = useDispatch();
  const [needUpdate, setNeedUpdate] = useState(false);

  useEffect(() => {
    onUpdate();
  }, [needUpdate]);

  const onUpdate = useCallback(() => {
    if (needUpdate) {
      const obj = _.find(systemSetting, { code: "policy" });
      dispatch(
        AdminActions.saveSystemSetting({
          body: {
            ...obj,
            value: JSON.stringify(list),
          },
          onSuccess: () => {
            setNeedUpdate(false);
          },
        })
      );
    }
  }, [list, systemSetting, needUpdate]);

  const onAddNew = () => {
    setPolicyList([...list, ""]);
  };

  const onDelete = useCallback(
    (removeIndex) => {
      const filteredItems = list
        .slice(0, removeIndex)
        .concat(list.slice(removeIndex + 1, list.length));
      setPolicyList(filteredItems);
      setNeedUpdate(true);
    },
    [list]
  );

  const onChangePolicy = useCallback(
    ({ index, value }) => {
      setPolicyList(
        list.map((x, i) => {
          return i === index ? value : x;
        })
      );
      setNeedUpdate(true);
    },
    [list]
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-medium">Chính sách</span>
        </div>
        <Button className="mt-4" color="primary" onClick={onAddNew}>
          Thêm chính sách
        </Button>
      </div>
      <div className="mt-4">
        {list.map((oneItem, index) => {
          return (
            <div className="flex items-center py-2 gap-2" key={`${index}`}>
              <MinusIcon className="size-4" />
              <Input
                value={oneItem}
                size="sm"
                onChange={(e) =>
                  onChangePolicy({
                    index,
                    value: e.target.value,
                  })
                }
              />
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
          );
        })}
      </div>
    </div>
  );
}

export default Policy;
