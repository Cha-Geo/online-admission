"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer } from "react-toastify";

export function RouteChangeListener({children}: IChildren) {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    NProgress.configure({ easing: "ease", speed: 100 });
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return (
    <>
      <div id="page-transition"></div>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnFocusLoss
        closeOnClick
        pauseOnHover
      />
    </>
  );
}
