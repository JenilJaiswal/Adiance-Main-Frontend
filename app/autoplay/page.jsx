import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/autoplay");

export default function Page() {
  return <ClientPage />;
}
