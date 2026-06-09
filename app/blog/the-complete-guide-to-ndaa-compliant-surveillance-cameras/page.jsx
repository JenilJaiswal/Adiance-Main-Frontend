import { legacyBlogMetadata, LegacyBlogSchemas } from "@/seo/legacyBlogMeta";
import ClientPage from "./ClientPage";

const SLUG = "the-complete-guide-to-ndaa-compliant-surveillance-cameras";

export const metadata = legacyBlogMetadata(SLUG);

export default function Page() {
  return (
    <>
      <LegacyBlogSchemas slug={SLUG} />
      <ClientPage />
    </>
  );
}
