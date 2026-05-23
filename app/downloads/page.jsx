import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/downloads");

export default function Page() {
  return <ClientPage />;
}
