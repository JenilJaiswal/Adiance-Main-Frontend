import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4k-bullet-anpr-ptz-camera");

export default function Page() {
  return (
    <>
      <PageSchema path="/4k-bullet-anpr-ptz-camera" />
      <ClientPage />
    </>
  );
}
