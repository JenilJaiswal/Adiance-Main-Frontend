import { legacyBlogMetadata, LegacyBlogSchemas } from "@/seo/legacyBlogMeta";
import ClientPage from "./ClientPage";

const SLUG = "white-label-vs-private-label-cctv-cameras";

export const metadata = legacyBlogMetadata(SLUG);

export default function Page() {
  return (
    <>
      <LegacyBlogSchemas slug={SLUG} />
      <ClientPage />
    </>
  );
}
