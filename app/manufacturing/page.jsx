import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/manufacturing");

export default function Page() {
  return <ClientPage />;
}
