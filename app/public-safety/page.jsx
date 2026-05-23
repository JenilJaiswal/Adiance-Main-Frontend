import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/public-safety");

export default function Page() {
  return <ClientPage />;
}
