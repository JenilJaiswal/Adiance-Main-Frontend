import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/complete-surveillance-solutions");

export default function Page() {
  return <ClientPage />;
}
