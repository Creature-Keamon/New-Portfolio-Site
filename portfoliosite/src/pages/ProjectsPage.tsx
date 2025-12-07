import Page from "../components/Page";
import ContentItem from "../components/ContentItem";
import { useState } from "react";
import Projects from "../assets/ProjectList";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }: Props) {
  const [content, setContent] = useState(Projects);

  const filterItem = (filter: string) => {
    if (filter === "All") {
      setContent(Projects);
    } else {
      setContent(
        Projects.filter((Project: any) => {
          return Project.Tags.find((tag: string) => {
            return tag === filter;
          });
        })
      );
    }
  };

  return (
    <Page
      title="PROJECTS"
      backgroundColor="rgb(29,32,33)"
      filterItem={filterItem}
      Navigate={Navigate}
      pageName="Projects"
    >
      <div className="content-grid">
        {content.map((Project, index) => {
          return (
            <ContentItem
              Right={(index + 1) % 2 === 0 ? true : false}
              Name={Project.Name}
              Content={Project.Year}
              ImgName={Project.ImgName}
              Tags={Project.Tags}
              PageURL={Project.PageURL}
              Navigate={Navigate}
              key={index}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default ProjectsPage;
