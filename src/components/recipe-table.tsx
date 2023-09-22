import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TypeRecipe } from "../types";
import Image from "./contentful-image";
import QualityRating from "./quality-rating";

type Props = {
  recipes: readonly TypeRecipe<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
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
          {props.recipes.map((recipe) => (
            <TableRow key={recipe.fields.name}>
              <TableCell sx={{ width: 60, maxWidth: 60 }} align="center">
                <Checkbox />
              </TableCell>
              <TableCell sx={{ width: 74, maxWidth: 74, padding: 0 }}>
                {recipe.fields.image ? (
                  <Image
                    src={recipe.fields.image.fields.file!.url}
                    width={74}
                    height={74}
                    alt={
                      recipe.fields.image.fields.description ||
                      `${recipe.fields.name} image`
                    }
                  />
                ) : null}
              </TableCell>
              <TableCell>{recipe.fields.name}</TableCell>
              <TableCell>
                {[...recipe.fields.ingredients]
                  .sort((a, b) => (a > b ? 1 : -1))
                  .join(", ")}
              </TableCell>
              <TableCell sx={{ width: 120, minWidth: 120 }}>
                {<QualityRating qualityRating={recipe.fields.qualityRating} />}
              </TableCell>
              <TableCell>{recipe.fields.category}</TableCell>
              <TableCell sx={{ width: 90, minWidth: 90 }} align="right">
                {recipe.fields.baseEnergy}
              </TableCell>
              <TableCell sx={{ width: 100, minWidth: 100 }} align="right">
                {recipe.fields.baseSellPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecipeTable;
