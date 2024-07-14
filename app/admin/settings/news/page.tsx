"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React from "react";
import HotNews from "../components/HotNews";

function NewsSetting() {
  const onSave = () => {};

  return (
    <div>
      <ContainerHeader
        title={"Cài đặt tin tức"}
        right={
          <div>
            <Button onClick={onSave} type="submit" color="primary" isIconOnly>
              <CloudArrowUpIcon className="size-4 text-white" />
            </Button>
          </div>
        }
      />
      <HotNews />
    </div>
  );
}

export default NewsSetting;
