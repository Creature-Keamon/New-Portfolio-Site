import Button from "./Button";

function TopBar() {
  return (
    <div className="wrap">
      <div className="top-bar"></div>
      <div className="return-button-wrapper">
        <Button onClick={() => console.log("Return Button Clickded")}>
          Open
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
