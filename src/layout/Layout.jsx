import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <>
          <CustomCursor />
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main>
        {children}
        </main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
