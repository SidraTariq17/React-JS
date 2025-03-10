import redhopeLogo from "../../assets/images/redhope-removebg-preview.png";
import BloodTypeSelector from "../../components/blood_type";
import Name from "../../components/name";
import QueryForm from "../../components/query";
import Birthday from "../../components/birthday";
import Gender from "../../components/gender";
import PhoneEmailForm from "../../components/phoneemail";
import AddressForm from "../../components/address";
import CityStateForm from "../../components/citystate";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col h-fit w-screen bg-white p-0 m-0">
      <div className="flex bg-red-800 h-50 w-screen">
        <img src={redhopeLogo} alt="RedHope Logo" className="h-40 w-50" />
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h2 className="text-5xl font-bold text-white">Sign Up</h2>
          <p className="mt-5 ml-20  text-white">
            Confidential - Please answer the following questions correctly. This
            will help to protect you and the patient who receives your blood.
          </p>
        </div>
      </div>
      <form className="w-screen h-fit justify-center">
        <div className="space-y-12 m-5">
          {/* Profile Section */}

          <div className="">
            {/* Username field */}

            <BloodTypeSelector></BloodTypeSelector>
            <Name></Name>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-left">
              Birthday:
            </h2>
            <Birthday></Birthday>
            <Gender></Gender>
            <PhoneEmailForm></PhoneEmailForm>
            <AddressForm></AddressForm>
            <CityStateForm></CityStateForm>
            <QueryForm></QueryForm>
            <div class=" flex items-center justify-center">
              <Link to="/login">
                <button className="bg-red-800 text-white flex items-center justify-center rounded-md px-8 py-3 text-2xl font-medium">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
