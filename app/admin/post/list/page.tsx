"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import useSetSearchParams from "@/services/hooks/set-search-params";
import {
  Bars3Icon,
  ComputerDesktopIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  EyeSlashIcon,
  PencilIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import _ from "lodash";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SysTable from "../../../../components/Table";
import { PostActions, PostSelectors } from "../service/slice";
import ConfirmDeletePost from "./components/ConfirmDeletePost";
function PostList() {
  const setSearchParams = useSetSearchParams(window);
  const router = useRouter();
  const dispatch = useDispatch();
  const postList = useSelector(PostSelectors.postList);
  const postPagination = useSelector(PostSelectors.postPagination);
  const postBodyListRequest = useSelector(PostSelectors.postBodyListRequest);

  useEffect(() => {
    dispatch(PostActions.getList({}));
  }, []);

  const header = [
    {
      name: "#",
      key: "#",
      className: "w-[40px]",
    },
    {
      name: "Hình ảnh",
      key: "image",
      className: "w-[50px]",
    },
    {
      name: "Tiêu đề",
      key: "title",
      className: "w-[200px]",
    },
    {
      name: "Nội dung ngắn",
      key: "shortContent",
      className: "",
    },
    {
      name: "Ngày tạo",
      key: "createdAt",
      className: "w-[50px]",
    },
    {
      name: <ComputerDesktopIcon className="size-6" />,
      key: "isActive",
      className: "w-[20px]",
    },
    {
      name: <Bars3Icon className="size-6" />,
      key: "options",
      className: "w-[20px]",
    },
  ];

  const onChangePage = (page: any) => {
    dispatch(
      PostActions.setPostBodyListRequest({
        ...postBodyListRequest,
        page,
      })
    );
  };

  const renderData = useCallback(() => {
    try {
      const dataTemp = postList.map((x: any) => {
        return {
          ...x,
          title: (
            <Tooltip delay={1000} content={x?.title}>
              {_.truncate(x?.title, {
                length: 30,
              })}
            </Tooltip>
          ),
          image: (
            <img
              className="w-[50px] h-[50px] object-cover"
              src={x?.image || "/images/image-icon.png"}
            />
          ),
          shortContent: _.truncate(x?.shortContent, {
            length: 100,
          }),
          options: (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <EllipsisVerticalIcon className="size-6" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with icons for post"
              >
                <DropdownItem
                  onClick={() => {
                    dispatch(
                      PostActions.updatePost({
                        postId: x._id,
                        data: {
                          isActive: !x?.isActive,
                        },
                        onSuccess: () => {
                          dispatch(PostActions.getList({}));
                        },
                      })
                    );
                  }}
                  key="Sửa"
                  startContent={
                    x?.isActive ? (
                      <EyeSlashIcon className="size-4 text-danger-600" />
                    ) : (
                      <EyeIcon className="size-4 text-primary-600" />
                    )
                  }
                >
                  {x?.isActive ? "Ẩn" : "Hiện"}
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    router.push(`/admin/post/edit/${x?._id}`);
                  }}
                  key="Sửa"
                  startContent={
                    <PencilIcon className="size-4 text-success-600" />
                  }
                >
                  Sửa
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setSearchParams("confirm-delete", x?._id);
                  }}
                  key="Sửa"
                  startContent={
                    <TrashIcon className="size-4 text-danger-600" />
                  }
                >
                  Xóa
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ),
          createdAt: (
            <div>{moment(x?.createdAt).format("HH:mm DD/MM/YYYY")}</div>
          ),
          isActive: x?.isActive ? (
            <EyeIcon className="size-6 text-primary-600" />
          ) : (
            <EyeSlashIcon className="size-6 text-danger-600" />
          ),
        };
      });
      return dataTemp;
    } catch (error) {
      return [];
    }
  }, [postList]);

  const onChangeSearch = (e: any) =>
    dispatch(
      PostActions.setPostBodyListRequest({
        ...postBodyListRequest,
        search: e.target.value,
        page: 1,
      })
    );
  const onClearSearch = (e: any) =>
    dispatch(
      PostActions.setPostBodyListRequest({
        ...postBodyListRequest,
        search: "",
        page: 1,
      })
    );

  function onGoToCreate(): void {
    router.push("/admin/post/create");
  }

  return (
    <div>
      <ConfirmDeletePost />
      <ContainerHeader
        title={"Danh sách bài viết"}
        right={
          <div className="flex items-center gap-2">
            <Input
              value={postBodyListRequest.search}
              onChange={onChangeSearch}
              label="Nhập từ khóa cần tìm"
              size="sm"
              endContent={
                _.isEmpty(postBodyListRequest.search) ? (
                  <></>
                ) : (
                  <div
                    className="items-center justify-center"
                    role="button"
                    onClick={onClearSearch}
                  >
                    <XCircleIcon className="size-4 text-red-500" />
                  </div>
                )
              }
            />
            <Button color="primary" className="px-6" onClick={onGoToCreate}>
              Thêm bài viết
            </Button>
          </div>
        }
      />
      <SysTable
        header={header}
        data={renderData()}
        page={postPagination.page}
        totalPage={postPagination.totalPage}
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default PostList;
