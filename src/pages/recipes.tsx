import { Autocomplete, TextField, Typography } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import RecipeTable from "../components/recipe-table";
import { Recipe } from "../types";

type Props = {
  data: {
    oneStarRecipes: {
      nodes: Recipe[];
    };
    twoStarRecipes: {
      nodes: Recipe[];
    };
    threeStarRecipes: {
      nodes: Recipe[];
    };
    fourStarRecipes: {
      nodes: Recipe[];
    };
    fiveStarRecipes: {
      nodes: Recipe[];
    };
  };
};

const RecipesPage: React.FC<PageProps<Queries.RecipesPageQuery>> = ({
  data,
}) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [recipes, setRecipes] = useState(data.allContentfulRecipe.nodes);

  useEffect(() => {
    console.log(filter);
    if (!filter) {
      setRecipes(data.allContentfulRecipe.nodes);
    } else {
      setRecipes(
        data.allContentfulRecipe.nodes.filter((recipe) =>
          recipe.name.toLowerCase().startsWith(filter.toLowerCase())
        )
      );
    }
  }, [data, filter]);

  return (
    <>
      <Typography variant="h1">Recipes</Typography>

      <Autocomplete
        freeSolo
        options={data.allContentfulRecipe.nodes.map((recipe) => recipe.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        onChange={(event, newValue) => {
          setFilter(newValue);
        }}
      />
      <RecipeTable recipes={recipes} />
    </>
  );
};

export default RecipesPage;

export const query = graphql`
  fragment Recipe on ContentfulRecipe {
    image {
      description
      gatsbyImageData(
        width: 74
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
    name
    ingredients
    qualityRating
    category
    baseEnergy
    baseSellPrice
  }

  query RecipesPage {
    allContentfulRecipe(sort: [{ qualityRating: ASC }, { name: ASC }]) {
      nodes {
        ...Recipe
      }
    }
  }
`;
