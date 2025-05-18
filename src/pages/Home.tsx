import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh relative bg-amber-100">
      <Navbar />      
      <button type="submit" onClick={() => navigate('/found')} className=" absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#FFFDE3] px-6 py-3 border-2 border-[#C21010] font-bold rounded-xl font-montserrat">
        Mulai
      </button>
    </div>
  );
};

export default Home;
