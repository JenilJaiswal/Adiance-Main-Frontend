import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/pcb-assembly-service");

export default function Page() {
  return <ClientPage />;
}
