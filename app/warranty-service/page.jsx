import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/warranty-service");

export default function Page() {
  return <ClientPage />;
}
