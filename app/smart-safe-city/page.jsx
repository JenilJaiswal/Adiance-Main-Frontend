import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-safe-city");

export default function Page() {
  return <ClientPage />;
}
