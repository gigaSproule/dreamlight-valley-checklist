import { TypeRecipe, TypeRecipeSkeleton } from "../types";
import getContentfulClient from "./getContentfulClient";

export const getRecipeData = async (): Promise<
  TypeRecipe<"WITHOUT_UNRESOLVABLE_LINKS", string>[]
> => {
  const pages =
    await getContentfulClient.withoutUnresolvableLinks.getEntries<TypeRecipeSkeleton>(
      {
        content_type: "recipe",
        include: 10,
      }
    );
  return pages.items;
};
