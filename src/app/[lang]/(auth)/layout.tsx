"use client";

import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="h-[90vh] overflow-y-auto">{children}</div>
    </div>
  );
};

export default layout;
