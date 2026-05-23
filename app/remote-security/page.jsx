import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/remote-security");

export default function Page() {
  return <ClientPage />;
}
