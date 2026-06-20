import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4gcamera");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/4gcamera" />
    </>
  );
}
