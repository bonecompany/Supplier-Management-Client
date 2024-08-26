import SupplierProfile from "../../components/admin.components/Suppliers/SupplierProfile";
import LatexData from "../../components/admin.components/Suppliers/LatexData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SupplierDetailsPage = () => {
  const navigate = useNavigate();
  const supplier = {
    Bone_id: 1,
    name: "1-MOOSA HAJI N",
    phone: "9539507184",
    address: "NEDUMBA HOUSE, ODOMPATTA",
    location: "odompata",
    category: "daily collection",
    account_no: "112345875462454",
    IFCE_code: "FDRL0001120",
  };

  return (
    <div className="min-h-screen bg-[#F1F5F8] px-6 pb-6">
      <div className="py-3 flex items-center gap-2">
        <span onClick={() => navigate(-1)} className="text-2xl p-2 rounded-full hover:bg-slate-300">
          <IoMdArrowRoundBack />
        </span>
        <h1 className="text-3xl font-bold text-cyan-900">Supplier Profile</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <SupplierProfile supplier={supplier} />
        </div>
        <div className="col-span-2 ">
          <LatexData supplier={supplier} />
        </div>
      </div>
    </div>
  );
};

export default SupplierDetailsPage;
