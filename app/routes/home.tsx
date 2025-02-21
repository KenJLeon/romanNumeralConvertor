import type { Route } from "./+types/home";
import { MainPage } from "~/mainPage/mainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roman Numeral Convertor" },
    { name: "This is a convertor that ", content: "" },
  ];
}

export default function Home() {
  return <MainPage />;
}
