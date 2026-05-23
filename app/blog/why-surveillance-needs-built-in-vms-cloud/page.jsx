import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/why-surveillance-needs-built-in-vms-cloud");

export default function Page() {
  return <ClientPage />;
}
