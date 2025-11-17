interface Props {
  ImgURL: string;
  PageURL: string;
  Name: string;
  Year: number;
  Tags: string[];
  Right: Boolean;
}

function ContentItem({ ImgURL, PageURL, Name, Year, Tags, Right }: Props) {
  return (
    <div className={Right === true ? "content-item-right" : "content-item"}>
      <img className="content-image" src={"src/assets/" + "Linus.jpg"}></img>
    </div>
  );
}

export default ContentItem;
