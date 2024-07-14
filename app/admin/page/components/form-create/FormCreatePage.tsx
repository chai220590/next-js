"use client";
import { Input } from "@nextui-org/input";
import AddWidgetModal from "./AddWidgetModal";
import CreatePageContent from "./CreatePageContent";
import ViewPageModal from "./ViewPageModal";

function FormCreatePage() {
  return (
    <div>
      <div className="mb-4 pt-4">
        <p className="font-medium">Cấu hình trang</p>
      </div>
      <div className="mb-4">
        <Input label="Tiêu đề trang" />
      </div>
      <div className="mb-4">
        <Input label="Đường dẫn" />
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
