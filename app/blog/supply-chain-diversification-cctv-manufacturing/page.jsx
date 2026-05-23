import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/supply-chain-diversification-cctv-manufacturing");

export default function Page() {
  return <ClientPage />;
}
