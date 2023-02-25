import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import QualityRating from "./quality-rating";

type Props = {
  recipes: readonly Queries.RecipeFragment[];
};

const RecipeTable = (props: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Collected</TableCell>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Quality Rating</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Base Energy</TableCell>
            <TableCell>Base Sell Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.recipes.map((recipe: Queries.RecipeFragment) => (
            <TableRow>
              <TableCell sx={{ width: 60, maxWidth: 60 }} align="center">
                <Checkbox />
              </TableCell>
              <TableCell sx={{ width: 74, maxWidth: 74, padding: 0 }}>
                {recipe.image ? (
                  <GatsbyImage
                    image={getImage(recipe.image)!}
                    alt={recipe.image.description || ""}
                  />
                ) : null}
              </TableCell>
              <TableCell>{recipe.name}</TableCell>
              <TableCell>
                {[...recipe.ingredients]
                  .sort((a, b) => (a > b ? 1 : -1))
                  .join(", ")}
              </TableCell>
              <TableCell sx={{ width: 120, minWidth: 120 }}>
                {<QualityRating qualityRating={recipe.qualityRating} />}
              </TableCell>
              <TableCell>{recipe.category}</TableCell>
              <TableCell sx={{ width: 90, minWidth: 90 }} align="right">
                {recipe.baseEnergy}
              </TableCell>
              <TableCell sx={{ width: 100, minWidth: 100 }} align="right">
                {recipe.baseSellPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecipeTable;
