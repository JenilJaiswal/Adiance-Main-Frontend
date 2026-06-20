import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-new-zealand");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/cctv-camera-manufacturer-new-zealand" />
    </>
  );
}
