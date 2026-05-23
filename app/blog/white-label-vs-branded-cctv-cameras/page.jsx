import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/white-label-vs-branded-cctv-cameras");

export default function Page() {
  return <ClientPage />;
}
