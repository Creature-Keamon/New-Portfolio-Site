import CustomHeader from "./CustomHeader";
import TopBar from "./TopBar";
import FilterWrapper from "./FilterWrapper";
import type React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  filter: boolean;
  subtitle: string;
  font: string;
  textColor: string;
  backgroundColor: string;
  buttonLinks: string[];
  buttonText: string[];
  buttonImages: string[];
  filterItem: (filter: number) => void;
}

/*creates a page within some formatting rules and populates it with 
it's given props*/
function Page({
  children,
  title,
  filter = false,
  subtitle = "",
  font,
  textColor,
  backgroundColor,
  buttonLinks,
  buttonText,
  buttonImages,
  filterItem,
}: Props) {
  const arr = [
    "Programming",
    "3D Art",
    "Game Design",
    "Video Editing",
    "Web Development",
    "All",
  ];
  return (
    <div className="Bg" style={{ backgroundColor: backgroundColor }}>
      <div className="grid-item">
        <TopBar />
        {filter === true ? (
          <FilterWrapper filters={arr} filterItem={filterItem}></FilterWrapper>
        ) : (
          <div className="filter-wrapper"></div>
        )}
        {children}
      </div>
      <div className="grid-item">
        <div className="header">
          <CustomHeader
            buttonLinks={buttonLinks}
            buttonImages={buttonImages}
            buttonText={buttonText}
            text={title}
            subheader={subtitle}
            font={font}
            textColor={textColor}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
