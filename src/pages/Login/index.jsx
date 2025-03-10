import React from "react";
import LeftSection from "../../components/leftsection";
import LoginForm from "../../components/LoginForm";

const SplitScreen = () => (
  <div className="flex h-screen">
    <LeftSection></LeftSection>
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
      <LoginForm></LoginForm>
    </div>
  </div>
);

export default SplitScreen;
