import Seo from "@/components/Seo";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  isOnModal?: boolean;
}

export default function Layout({ title, children, isOnModal }: LayoutProps) {
  return (
    <>
      <Seo templateTitle={title} />
      <div className={`m-0 mx-auto max-w-[1440px] p-0`}>
        {!isOnModal ? <Header /> : null}
        <main>{children}</main>
        {!isOnModal ? <Footer /> : null}
      </div>
    </>
  );
}
