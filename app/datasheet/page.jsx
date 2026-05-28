import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/datasheet");

export default function Page() {
  return (
    <>
      <PageSchema path="/datasheet" />
      <ClientPage />
    </>
  );
}
