import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/anpr-camera");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/anpr-camera" />
    </>
  );
}
