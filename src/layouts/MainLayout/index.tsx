import Head from "next/head";
import { Footer, Navbar, Sidebar } from "./components";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Talents Valley platform",
  withoutNavbar = false,
  withoutFooter = false,
  contentClassName = "",
  withSidebar = false,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {withSidebar && <Sidebar />}

      {!withoutNavbar && (
        <header>
          <Navbar />
        </header>
      )}
      <main
        className={`flex-1 flex justify-center items-center min-h-fit ${contentClassName}`}
      >
        {children}
      </main>
      {!withoutFooter ? <Footer /> : null}
    </div>
  );
};

export default MainLayout;
