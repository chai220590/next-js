"use client";
import { useDrag, useDrop } from "react-dnd";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./style.css";
const ItemTypes = {
  BOX: "box",
};
const BoxContent = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-[20px] h-[20px]`}
    ></div>
  );
};
const Box = ({ id, content, index, canDrop, moveBox }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    canDrop: (draggedItem) => canDrop.includes(draggedItem.id),
    hover: (draggedItem) => {
      if (draggedItem.index !== index && canDrop.includes(draggedItem.id)) {
        moveBox(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`item ${isDragging ? "dragging" : ""}`}
    >
      {content}
    </div>
  );
};

const initialData = [
  {
    id: "1",
    content: <BoxContent color={"red"} />,
    canDrop: ["2"],
  },
  { id: "2", content: <BoxContent color={"blue"} />, canDrop: [] },
  { id: "3", content: <BoxContent color={"green"} />, canDrop: ["2"] },
  { id: "4", content: <BoxContent color={"pink"} />, canDrop: ["2"] },
];

const DraggableComponent = () => {
  const [items, setItems] = useState(initialData);

  const moveBox = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="droppable">
        {items.map((item, index) => (
          <Box
            key={item.id}
            id={item.id}
            content={item.content}
            index={index}
            canDrop={item.canDrop}
            moveBox={moveBox}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableComponent;
