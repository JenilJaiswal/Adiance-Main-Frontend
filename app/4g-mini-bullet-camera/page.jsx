import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4g-mini-bullet-camera");

export default function Page() {
  return (
    <>
      <PageSchema path="/4g-mini-bullet-camera" />
      <ClientPage />
    </>
  );
}
