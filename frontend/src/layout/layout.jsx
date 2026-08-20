import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
import AppRoutes from "../routes/Routes";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
