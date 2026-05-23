import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/thermal-camera");

export default function Page() {
  return <ClientPage />;
}
