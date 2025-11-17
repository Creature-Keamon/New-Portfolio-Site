import Button from "./Button";

function TopBar() {
  return (
    <div className="Wrap">
      <div className="TopBar"></div>
      <div className="ReturnButtonWrapper">
        <Button onClick={() => console.log("Return Button Clickded")}>
          Open
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
