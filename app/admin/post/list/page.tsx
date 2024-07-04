import ContainerHeader from "@/components/container-header/ContainerHeader";
import { Input } from "@nextui-org/input";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PostActions, PostSelectors } from "../service/slice";
import SysTable from "./Table";
import { useDispatch } from "react-redux";

function PostList() {
  const dispatch = useDispatch();
  const postList = useSelector(PostSelectors.postList);

  useEffect(() => {
    dispatch(PostActions.getList());
  }, []);

  const header = [
    {
      name: "Tiêu đề",
    },
    {
      name: "Nội dung",
    },
  ];

  return (
    <div>
      <ContainerHeader
        title={"Danh sách bài viết"}
        right={
          <div>
            <Input label="Nhập từ khóa cần tìm" size="sm" />
          </div>
        }
      />
      <SysTable
        header={header}
        data={[]}
        totalPage={undefined}
        pageSize={undefined}
        page={undefined}
      />
    </div>
  );
}

export default PostList;
