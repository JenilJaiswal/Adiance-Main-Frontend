import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@/components/NotFound"), { ssr: false });

export const metadata = {
  title: "Page Not Found | Adiance",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <NotFound />;
}
