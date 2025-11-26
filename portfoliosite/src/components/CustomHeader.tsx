import Button from "./Button";

interface Props {
  text: string;
  subheader: string;
  font: string;
  textColor: string;
  buttonRedirects: string[];
}

function CustomHeader({
  text,
  subheader = "",
  font,
  textColor,
  buttonRedirects,
}: Props) {
  return (
    <div className="header-wrapper">
      <h1
        className="custom-header text header-text"
        style={{ fontFamily: font, color: textColor }}
      >
        {text}
      </h1>
      <h3
        className="sub-header text header-text"
        style={{ fontFamily: font, color: textColor }}
      >
        {subheader}
      </h3>
      {buttonRedirects.length > 0 && <Button onClick={()} colour="secondary">Hello</Button>}
    </div>
  );
}

export default CustomHeader;
