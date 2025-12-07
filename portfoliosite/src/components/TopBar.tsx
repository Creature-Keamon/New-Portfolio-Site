import Button from "./Button";

interface Props {
  Navigate: (item: string) => void;
  buttonLinks?: string[];
  buttonImages?: string[];
  buttonText?: string[];
}

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function TopBar({
  Navigate,
  buttonLinks,
  buttonText = [],
  buttonImages = [],
}: Props) {
  return (
    <div className="top-bar-wrapper">
      <div className="return-button-wrapper">
        <Button onClick={() => Navigate("Home")}>Open</Button>
        <Button onClick={() => Navigate("Projects")}>Return to Projects</Button>
        {buttonLinks != null && (
          <div className="external-buttons">
            {buttonLinks.map((link: string, i: number) => (
              <Button
                colour="secondary"
                key={i}
                onClick={() => openLink(link)}
                imageFile={buttonImages[i]}
              >
                {buttonText[i]}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
