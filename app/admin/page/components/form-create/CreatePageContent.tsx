"use client";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";
import RenderWidget from "../render-widget/RenderWidget";
import { useSelector } from "react-redux";
import { AdminPageActions, AdminPageSelectors } from "../../service/slice";
import { useDispatch } from "react-redux";
import DndList from "@/components/dnd/DndList";
import _ from "lodash";

function CreatePageContent() {
  const body = useSelector(AdminPageSelectors.body);

  const dispatch = useDispatch();

  const onChange = (changedWidget: any) => {
    dispatch(AdminPageActions.changeContentWidget(changedWidget));
  };
  const onRemove = (removeWidget: any) => {
    dispatch(AdminPageActions.removeContentWidget(removeWidget.id));
  };

  return (
    <div>
      {!_.isEmpty(body) && (
        <DndList
          setList={(newList) => {
            const temp = newList.map((x: any) => {
              const tempX = _.cloneDeep(x);
              delete tempX.content;
              return tempX;
            });
            dispatch(AdminPageActions.setHeader(temp));
          }}
          list={body.map((oneItem) => {
            return {
              ...oneItem,
              content: (
                <RenderWidget
                  onRemove={onRemove}
                  onChange={onChange}
                  item={oneItem}
                />
              ),
            };
          })}
        />
      )}
    </div>
  );
}

export default CreatePageContent;
