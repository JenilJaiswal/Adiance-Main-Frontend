import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-argentina");

export default function Page() {
  return (
    <>
      <PageSchema path="/cctv-camera-manufacturer-argentina" />
      <ClientPage />
    </>
  );
}
