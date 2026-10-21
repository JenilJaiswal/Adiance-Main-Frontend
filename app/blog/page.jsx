import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";
import BlogArchiveLinks from "@/components/BlogArchiveLinks";

export const metadata = buildMetadata("/blog");

export default function Page() {
  return (
    <>
      <ClientPage archive={<BlogArchiveLinks />} />
      <PageSchema path="/blog" />
    </>
  );
}
