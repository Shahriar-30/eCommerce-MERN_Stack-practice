import React from "react";
import LinkPage from "../../../layout/LinkPage";

function ProfileContainer() {
  return (
    <>
      <div className=" bg-Bg absolute top-[40px] right-0">
        <div className="bg-black p-1 px-4 ">
          <LinkPage
            path={"/"}
            txt={"My Account"}
            className={"text-white font-bold "}
          />
        </div>
        <div className=" p-1 px-4  hover:pl-5 duration-500">
          <LinkPage
            path={"/"}
            txt={"Log Out"}
            className={"font-semibold hover:text-red-600 duration-300"}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileContainer;
