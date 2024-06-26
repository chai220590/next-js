"use client";
import { AppActions } from "@/services/app/app.slice";
import { useAppDispatch } from "@/services/hooks/hook";
import { useEffect } from "react";

function MainComponent({ children }: any) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSystemSetting();
  }, []);
  const getSystemSetting = () => {
    dispatch(AppActions.getSystemSetting());
  };
  return (
    <main className="container mx-auto max-w-7xl pt-4 md:px-6 px-2 flex-grow fade-in">
      {children}
    </main>
  );
}

export default MainComponent;
