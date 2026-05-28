import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/adiance-thermal-camera-f");

export default function Page() {
  return (
    <>
      <PageSchema path="/adiance-thermal-camera-f" />
      <ClientPage />
    </>
  );
}
