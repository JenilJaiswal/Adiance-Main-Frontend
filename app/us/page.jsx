import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/us");

export default function Page() {
  return <ClientPage />;
}
