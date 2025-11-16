import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (
      <div className="h-dvh w-dvw flex flex-col overflow-auto">
        <Navbar />

        <div className="w-11/12 flex-grow mx-auto">
          <Outlet />
        </div>

        <Footer />
      </div>
  );
}

export default MainLayout;
