import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/h-series");

export default function Page() {
  return <ClientPage />;
}
