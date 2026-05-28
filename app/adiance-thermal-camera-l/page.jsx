import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/adiance-thermal-camera-l");

export default function Page() {
  return (
    <>
      <PageSchema path="/adiance-thermal-camera-l" />
      <ClientPage />
    </>
  );
}
