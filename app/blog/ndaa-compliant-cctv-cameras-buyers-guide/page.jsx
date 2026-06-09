import { legacyBlogMetadata, LegacyBlogSchemas } from "@/seo/legacyBlogMeta";
import ClientPage from "./ClientPage";

const SLUG = "ndaa-compliant-cctv-cameras-buyers-guide";

export const metadata = legacyBlogMetadata(SLUG);

export default function Page() {
  return (
    <>
      <LegacyBlogSchemas slug={SLUG} />
      <ClientPage />
    </>
  );
}
