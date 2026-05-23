import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/education");

export default function Page() {
  return <ClientPage />;
}
