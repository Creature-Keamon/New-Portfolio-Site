import Page from "./components/Page";
import ContentItem from "./components/ContentItem";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }: Props) {
  const testTags = ["Hello", "I", "Am", "A", "Tag", "Yes"];
  return (
    <Page title="PROJECTS" filter={true}>
      <div className="content-grid">
        <ContentItem
          Right={false}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="Project1"
          Navigate={Navigate}
        />
        <ContentItem
          Right={true}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="/Project1.tsx"
          Navigate={Navigate}
        />
        <ContentItem
          Right={false}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="/Project1.tsx"
          Navigate={Navigate}
        />
        <ContentItem
          Right={true}
          Name="Linus Tech Tips"
          Content="2069"
          ImgName="Linus.jpg"
          Tags={testTags}
          PageURL="/App.tsx"
          Navigate={Navigate}
        />
      </div>
    </Page>
  );
}

export default ProjectsPage;
