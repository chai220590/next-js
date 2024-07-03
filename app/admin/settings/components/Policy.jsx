import {
  ArrowsUpDownIcon,
  PlusIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminActions, AdminSelectors } from "../../service/slice";
import DndList from "@/components/dnd/DndList";
function Policy() {
  const dispatch = useDispatch();
  const systemSetting = useSelector(AdminSelectors.systemSetting);

  const policy = JSON.parse(
    _.find(systemSetting, {
      code: "policy",
    })?.value || "[]"
  );
  console.log(systemSetting);

  const setPolicy = (data) => {
    dispatch(
      AdminActions.setSystemSetting(
        systemSetting.map((x) => {
          if (x.code === "policy") {
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
    policy.push("");
    setPolicy([...policy]);
  }, [policy]);

  const onDelete = useCallback(
    (removeIndex) => {
      const filteredItems = policy
        .slice(0, removeIndex)
        .concat(policy.slice(removeIndex + 1, policy.length));
      setPolicy(filteredItems);
    },
    [policy]
  );

  const onChangePolicy = useCallback(
    ({ index, value }) => {
      setPolicy(
        policy.map((x, i) => {
          return i === index ? value : x;
        })
      );
    },
    [policy]
  );

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-medium">Chính sách</span>
        </div>
        <Button size="sm" color="success" isIconOnly onClick={onAddNew}>
          <PlusIcon className="size-6 text-white" />
        </Button>
      </div>
      <div className="p-4 rounded-md">
        <DndList
          setList={(list) => {
            setPolicy(
              list.map((x) => {
                return x.value;
              })
            );
          }}
          list={policy.map((oneItem, index) => {
            return {
              id: `${index}`,
              value: oneItem,
              content: (
                <div className="flex items-center py-2 gap-2" key={`${index}`}>
                  <ShieldExclamationIcon className="size-4 text-success" />
                  <Input
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

export default Policy;
