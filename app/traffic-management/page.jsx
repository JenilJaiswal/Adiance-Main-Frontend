import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/traffic-management");

export default function Page() {
  return <ClientPage />;
}
