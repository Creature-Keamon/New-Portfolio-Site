import { useState } from "react";
import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";
import ContentItem from "./ContentItem";

function Page() {
  const [alertVisible, alertVisibility] = useState(false);
  const arr = ["Programming", "3D Art", "Game Design", "Video Editing"];
  const testTags = ["Programming", "3D Art", "Game Design"];
  return (
    <div className="Bg">
      <TopBar />
      <CustomHeader text="PROJECTS" />
      <FilterWrapper filters={arr}></FilterWrapper>
      <div className="content-grid">
        <ContentItem
          Right={false}
          Name="Linus Sex Tips"
          Year={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
        />
        <ContentItem
          Right={true}
          Name="Linus Sex Tips"
          Year={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
        />
        <ContentItem
          Right={false}
          Name="Linus Sex Tips"
          Year={2069}
          ImgName="Linus.jpg"
          Tags={testTags}
        />
      </div>
    </div>
  );
}

export default Page;
