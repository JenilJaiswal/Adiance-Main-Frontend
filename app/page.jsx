import { buildMetadata } from "@/seo/pageMetadata";
import {
  JsonLd,
  BreadcrumbJsonLd,
  HOMEPAGE_FAQ,
  HOMEPAGE_WEBPAGE,
} from "@/seo/JsonLd";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/");

export default function Page() {
  return (
    <>
      <JsonLd data={HOMEPAGE_WEBPAGE} />
      <JsonLd data={HOMEPAGE_FAQ} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }]} />
      <ClientPage />
    </>
  );
}
