"use client";
import { AppSelectors } from "@/services/app/app.slice";
import { useSelector } from "react-redux";
import styles from "./ProcessBar.module.css";

function ProcessBar() {
  const isLoading = useSelector(AppSelectors.isLoading);

  return isLoading ? (
    <div className={styles.progress}>
      <div className={styles.progressBar}></div>
    </div>
  ) : (
    <div className="h-[4px]" />
  );
}

export default ProcessBar;
