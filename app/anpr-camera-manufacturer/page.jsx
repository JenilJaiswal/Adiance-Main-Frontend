import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/anpr-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/anpr-camera-manufacturer" landingSlug="anpr-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
