import { Star } from "@mui/icons-material";
import React from "react";

type Props = {
  qualityRating: number;
};

const QualityRating = (props: Props) => {
  return (
    <>
      {[...Array(props.qualityRating).keys()].map((num) => (
        <Star key={num} />
      ))}
    </>
  );
};

export default QualityRating;
