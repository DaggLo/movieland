import { Outlet, ScrollRestoration } from "react-router";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";

import { ThemeConst, useTheme } from "@entities";
import { cn } from "@shared";
import { Header } from "@widgets";

import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const BASE_COLOR_LIGHT = "#ebebeb";
const HIGHLIGT_COLOR_LIGHT = "#f5f5f5";

const BASE_COLOR_DARK = "#202020";
const HIGHLIGT_COLOR_DARK = "#44444480";

const block = cn("layout");

export function Layout() {
  const { theme } = useTheme();
  const baseColor =
    theme === ThemeConst.LIGHT ? BASE_COLOR_LIGHT : BASE_COLOR_DARK;
  const highlightColor =
    theme === ThemeConst.LIGHT ? HIGHLIGT_COLOR_LIGHT : HIGHLIGT_COLOR_DARK;

  return (
    <div className={block()}>
      <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <Header />

        <main className={block("content")}>
          <Outlet />
        </main>

        <ScrollRestoration />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </SkeletonTheme>
    </div>
  );
}
