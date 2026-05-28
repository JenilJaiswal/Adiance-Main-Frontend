import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/wifi-ptz-camera");

export default function Page() {
  return (
    <>
      <PageSchema path="/wifi-ptz-camera" />
      <ClientPage />
    </>
  );
}
