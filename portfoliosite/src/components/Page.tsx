import { useState } from "react";
import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";

function Page() {
  const [alertVisible, alertVisibility] = useState(false);
  const arr = ["Programming", "3D Art", "Game Design", "Video Editing"];
  return (
    <div className="Bg">
      <TopBar />
      <CustomHeader text="PROJECTS" />
      <FilterWrapper filters={arr}></FilterWrapper>
    </div>
  );
}

export default Page;
