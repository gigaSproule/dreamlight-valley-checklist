import { Autocomplete, TextField, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import RecipeTable from "../components/recipe-table";
import { TypeRecipe } from "../types";
import { getRecipeData } from "../utils/getRecipeData";

export const getStaticProps: GetStaticProps = async () => {
  const recipes = await getRecipeData();
  return { props: { recipes }, revalidate: 60 };
};

const RecipesPage = (data: {
  recipes: TypeRecipe<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
}) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [recipes, setRecipes] = useState(data.recipes);

  useEffect(() => {
    console.log(filter);
    if (!filter) {
      setRecipes(data.recipes);
    } else {
      setRecipes(
        data.recipes.filter((recipe) =>
          recipe.fields.name.toLowerCase().startsWith(filter.toLowerCase())
        )
      );
    }
  }, [data, filter]);

  return (
    <main>
      <Head>
        <title>Recipes</title>
      </Head>
      <Typography variant="h1">Recipes</Typography>
      <Autocomplete
        freeSolo
        options={data.recipes.map((recipe) => recipe.fields.name)}
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
    </main>
  );
};

export default RecipesPage;
