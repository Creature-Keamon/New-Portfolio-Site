import React from "react";
import PropTypes from "prop-types";

interface Props {
  ImgURL: string;
  PageURL: string;
  Name: string;
  Year: number;
  Tags: string[];
}

function ContentItem({ ImgURL, PageURL, Name, Year, Tags }: Props) {
  return <div>ContentItem</div>;
}

export default ContentItem;
