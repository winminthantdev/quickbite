import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";


function MainLayout() {
  return (
    <div>
      <div className="h-dvh w-dvw flex flex-col overflow-auto">
        <div className="w-11/12 mx-auto">
          <Navbar />
        </div>

        <div className="w-11/12 flex-grow mx-auto">
          <Outlet />
        </div>

        <div className="w-11/12 mx-auto">
          <Footer/>
        </div>

        
      </div>
    </div>
  );
}

export default MainLayout;
