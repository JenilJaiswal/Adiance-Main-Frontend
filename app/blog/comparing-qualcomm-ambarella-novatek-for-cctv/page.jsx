import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/comparing-qualcomm-ambarella-novatek-for-cctv");

export default function Page() {
  return <ClientPage />;
}
