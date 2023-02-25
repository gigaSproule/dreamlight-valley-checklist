import { Typography } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import React from "react";
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
  return (
    <>
      <Typography variant="h1">Recipes</Typography>

      <RecipeTable recipes={data.allContentfulRecipe.nodes} />
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
