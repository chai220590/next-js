"use client";
import { AppSelectors } from "@/services/app/app.slice";
import { useSelector } from "react-redux";
import styles from "./ProcessBar.module.css";
import { Modal, ModalBody, ModalContent, Progress } from "@nextui-org/react";

function ProcessBar() {
  const isLoading = useSelector(AppSelectors.isLoading);

  return isLoading ? (
    <div className={styles.progress}>
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  ) : (
    <div className="h-[4px]" />
  );
}

export default ProcessBar;
