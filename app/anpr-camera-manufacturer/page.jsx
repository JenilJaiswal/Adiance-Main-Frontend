import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/anpr-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
