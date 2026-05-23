import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/adiance-thermal-camera-n");

export default function Page() {
  return <ClientPage />;
}
