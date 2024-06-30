import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import _ from "lodash";
import { useCallback } from "react";
function Policy({ list, setPolicyList }) {
  console.log(7, { list });

  const onAddNew = () => {
    setPolicyList([...list, ""]);
  };

  const onDelete = useCallback(
    (removeIndex) => {
      const filteredItems = list
        .slice(0, removeIndex)
        .concat(list.slice(removeIndex + 1, list.length));
      setPolicyList(filteredItems);
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
