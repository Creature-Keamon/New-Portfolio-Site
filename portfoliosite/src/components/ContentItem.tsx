import FilterButton from "./FilterButton";

interface Props {
  ImgName: string;
  PageURL: string;
  Name: string;
  Year: number;
  Tags: string[];
  Right: boolean;
}

function ContentItem({ ImgName, PageURL, Name, Year, Tags, Right }: Props) {
  if (Right === true) {
    return (
      <div className={"content-wrapper-right content-wrapper"}>
        <div className="main-content-right main-content">
          <img className="content-image " src={"src/assets/" + ImgName}></img>
          <div className="tag-wrapper">
            {Tags.map((item) => (
              <FilterButton onClick={() => {}}>{item}</FilterButton>
            ))}
          </div>
          <h1 className="project-name text header-text">{Name}</h1>
          <h3 className="year text">{Year}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"content-wrapper content-wrapper-left"}>
        <div className="main-content-left main-content">
          <img className="content-image " src={"src/assets/" + ImgName}></img>
          <div className="tag-wrapper">
            {Tags.map((item) => (
              <FilterButton onClick={() => {}}>{item}</FilterButton>
            ))}
          </div>
          <h1 className="project-name text header-text">{Name}</h1>
          <h3 className="year text">{Year}</h3>
        </div>
      </div>
    );
  }
}

export default ContentItem;
