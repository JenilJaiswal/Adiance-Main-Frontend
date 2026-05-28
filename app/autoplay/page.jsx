import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/autoplay");

export default function Page() {
  return (
    <>
      <PageSchema path="/autoplay" />
      <ClientPage />
    </>
  );
}
