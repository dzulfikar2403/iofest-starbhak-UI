import { useState } from "react";
import Navbar from "../components/Navbar";
import ModalWarnCancel from "../components/ModalWarnCancel";
import { useNavigate } from "react-router";

const Found = () => {
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-svh relative font-montserrat">
      <Navbar />
      <div className="absolute bottom-0 w-full py-4 bg-primary-green border-4 border-t-secondary-red rounded-t-4xl">
        <h1 className="text-center text-2xl font-bold">Monas</h1>
        <p className="bg-primary-cream rounded-lg overflow-y-auto p-4 m-4">
          Monas (Monumen Nasional) adalah sebuah monumen peringatan setinggi 132
          meter yang terletak di Jakarta Pusat,
        </p>
        <div className="text-end pr-4">
          <p className="font-medium">Total Jarak ~ 15KM</p>
          <small>*from your location</small>
        </div>
        <div className="flex justify-center gap-6 py-3 text-primary-cream">
          <button
            onClick={() => setIsCancel((prev) => !prev)}
            className="bg-primary-red px-6 py-3 rounded-lg font-semibold text-lg shadow"
          >
            Cancel
          </button>
          <button onClick={() => navigate('/article/monas')} className="bg-primary-cream text-black px-6 py-3 rounded-lg font-semibold text-lg shadow ">
            Baca Artikel
          </button>
        </div>
      </div>
      {isCancel && (
        <ModalWarnCancel onclick={() => setIsCancel((prev) => !prev)} />
      )}
    </div>
  );
};

export default Found;
