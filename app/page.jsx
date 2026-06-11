import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, HOMEPAGE_FAQ, HOMEPAGE_WEBPAGE } from "@/seo/JsonLd";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/");

export default function Page() {
  return (
    <>
      <JsonLd data={HOMEPAGE_WEBPAGE} />
      <JsonLd data={HOMEPAGE_FAQ} />
      <ClientPage />
      <PageSchema path="/" />
    </>
  );
}
