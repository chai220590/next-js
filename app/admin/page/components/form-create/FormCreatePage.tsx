"use client";
import { Input } from "@nextui-org/input";
import AddWidgetModal from "./AddWidgetModal";
import CreatePageContent from "./CreatePageContent";
import ViewPageModal from "./ViewPageModal";
import { useSelector } from "react-redux";
import { AdminPageActions, AdminPageSelectors } from "../../service/slice";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import slugify from "slugify";
type FormCreatePageProps = {};
function FormCreatePage(props: FormCreatePageProps) {
  const dispatch = useDispatch();
  const createPageErrorMessage = useSelector(
    AdminPageSelectors.createPageErrorMessage
  );
  const createPage = useSelector(AdminPageSelectors.page);
  const { title, slug } = createPage;

  useEffect(() => {
    const newSlug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@{}?#^,=`]/g,
    });
    onChangeText("slug", newSlug);
  }, [title]);

  const onChangeText = (key: string, value: string) => {
    const temp = _.cloneDeep(createPage);

    temp[key] = value;

    dispatch(AdminPageActions.setCreatePage(temp));
    dispatch(
      AdminPageActions.setCreatePageErrorMessage({
        [key]: "",
      })
    );
  };

  const onChangeSlug = (e: { target: { value: string } }) => {
    const newSlug = slugify(e.target.value, {
      lower: true,
      remove: /[*+~.()'"!:@{}?#^,=`]/g,
    });
    onChangeText("slug", newSlug);
  };
  return (
    <div>
      <div className="mb-4 pt-4">
        <p className="font-medium">Cấu hình trang</p>
      </div>
      <div className="mb-4">
        <Input
          label="Tiêu đề"
          value={title}
          isInvalid={!!createPageErrorMessage.title}
          errorMessage={createPageErrorMessage.title}
          onChange={(e) => {
            onChangeText("title", e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <Input
          disabled
          label="Đường dẫn"
          value={slug}
          isInvalid={!!createPageErrorMessage.slug}
          errorMessage={createPageErrorMessage?.slug}
          onChange={onChangeSlug}
        />
        <p className="text-danger-500 text-sm mt-2">
          Slug sẻ đi theo tiêu đề phục vụ cho SEO web vui lòng không đặt tên
          tiêu đề đã có
        </p>
      </div>
      <div className="mb-4 pt-4 flex items-center gap-4">
        <p className="font-medium">Nội dung trang</p>
        <AddWidgetModal />
        <ViewPageModal />
      </div>
      <div>
        <CreatePageContent />
      </div>
    </div>
  );
}

export default FormCreatePage;
