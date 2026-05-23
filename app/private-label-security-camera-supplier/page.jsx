import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/private-label-security-camera-supplier");

export default function Page() {
  return <ClientPage />;
}
