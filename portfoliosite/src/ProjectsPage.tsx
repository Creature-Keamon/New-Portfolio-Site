import Page from "./components/Page";
import ContentItem from "./components/ContentItem";
import { useState } from "react";

interface Props {
  Navigate: (item: string) => void;
}

function ProjectsPage({ Navigate }: Props) {
  const Projects = [
    {
      Right: false,
      Name: "Re-Make",
      Content: "Ongoing",
      ImgName: "Re-Make.png",
      Tags: ["Game Design", "3D Art", "Programming", "Video Editing"],
      PageURL: "Project1",
      Navigate: Navigate,
    },
    {
      Right: true,
      Name: "Linus Tech Tips",
      Content: "2069",
      ImgName: "Linus.jpg",
      Tags: ["Game Design", "3D Art", "Programming"],
      PageURL: "Project1",
      Navigate: Navigate,
    },
    {
      Right: false,
      Name: "Linus Tech Tips",
      Content: "2069",
      ImgName: "Linus.jpg",
      Tags: ["Game Design", "3D Art", "Programming"],
      PageURL: "Project1",
      Navigate: Navigate,
    },
    {
      Right: true,
      Name: "Linus Tech Tips",
      Content: "2069",
      ImgName: "Linus.jpg",
      Tags: ["Game Design", "3D Art", "Programming"],
      PageURL: "Project1",
      Navigate: Navigate,
    },
  ];
  const [content, setContent] = useState(Projects);

  const filterItem = (filter: number) => {
    if (filter === 5) {
      setContent(Projects);
    } else {
      const filteredPage = Projects.filter((Project: any) => {
        return filter in Project.Tags;
      });
      setContent(filteredPage);
    }
  };

  return (
    <Page
      title="PROJECTS"
      filter={true}
      backgroundColor="rgb(29,32,33)"
      filterItem={filterItem}
    >
      <div className="content-grid">
        {content.map((Project) => {
          return (
            <ContentItem
              Right={Project.Right}
              Name={Project.Name}
              Content={Project.Content}
              ImgName={Project.ImgName}
              Tags={Project.Tags}
              PageURL={Project.PageURL}
              Navigate={Project.Navigate}
            />
          );
        })}
      </div>
    </Page>
  );
}

export default ProjectsPage;
