import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/oem-cctv-camera-moq-explained");

export default function Page() {
  return <ClientPage />;
}
