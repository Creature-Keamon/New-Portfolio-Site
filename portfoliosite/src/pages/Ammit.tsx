import Page from "../components/Page";
import ContentItem from "../components/ContentItem";

interface Props {
  Navigate: (item: string) => void;
}

function Ammit({ Navigate }: Props) {
  const arr = ["Itch.io"];
  const images = ["itchiologo"];
  const links = ["https://mythspire-interactive.itch.io/ammit-the-truth"];

  return (
    <Page
      title="AMMIT THE TRUTH"
      subtitle="2025"
      font=""
      textColor="rgba(255, 255, 255, 1)"
      backgroundColor="rgba(36, 110, 18, 1)"
      buttonLinks={links}
      buttonText={arr}
      buttonImages={images}
      Navigate={Navigate}
    >
      <ContentItem
        Content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et auctor turpis. Nulla viverra lacus in magna commodo lobortis. Sed cursus purus massa, ut aliquet mi varius in. Donec vitae sollicitudin lectus, vel tristique nulla. Vivamus nunc quam, faucibus finibus congue eget, condimentum a orci. Maecenas tristique vel ante quis commodo." +
          " Integer sed erat sem. Ut mi neque, pulvinar eu vulputate in, ornare ac sem."
        }
        ImgName="Decommission.png"
      />
    </Page>
  );
}

export default Ammit;
