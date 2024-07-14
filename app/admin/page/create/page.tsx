"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import FormCreatePage from "../components/form-create/FormCreatePage";

function page() {
  return (
    <div>
      <ContainerHeader title={"Tạo một trang mới"} />
      <div>
        <FormCreatePage />
      </div>
    </div>
  );
}

export default page;
