import { redirect } from "next/navigation";

export default function Home() {
  redirect("/main-screen/main");
  return null;
}
