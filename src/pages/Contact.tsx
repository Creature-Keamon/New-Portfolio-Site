import Page from "../components/Page";
import ContentText from "../components/ContentText";

interface Props {
  Navigate: (item: string) => void;
}

function Contact({ Navigate }: Props) {
  return (
    <Page
      title="CONTACT ME"
      backgroundColor="rgb(29,32,33)"
      Navigate={Navigate}
      pageName="Contact"
    >
      <div className="content-grid">
        <ContentText
          content={"Contact me with the LinkedIn link at the top of the page."}
        ></ContentText>
      </div>
    </Page>
  );
}

export default Contact;
