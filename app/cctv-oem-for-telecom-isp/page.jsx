import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-oem-for-telecom-isp");

export default function Page() {
  return <ClientPage />;
}
