import { legacyBlogMetadata, LegacyBlogSchemas } from "@/seo/legacyBlogMeta";
import ClientPage from "./ClientPage";

const SLUG = "geopolitics-of-guts-why-non-chinese-soc-is-new-baseline";

export const metadata = legacyBlogMetadata(SLUG);

export default function Page() {
  return (
    <>
      <LegacyBlogSchemas slug={SLUG} />
      <ClientPage />
    </>
  );
}
