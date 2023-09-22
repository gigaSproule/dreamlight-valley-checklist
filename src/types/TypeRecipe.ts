import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRecipeFields {
    name: EntryFieldTypes.Symbol;
    ingredients: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    image?: EntryFieldTypes.AssetLink;
    baseEnergy: EntryFieldTypes.Integer;
    baseSellPrice: EntryFieldTypes.Integer;
    qualityRating: EntryFieldTypes.Integer;
    category: EntryFieldTypes.Symbol<"Appetizer" | "Dessert" | "Entrée">;
}

export type TypeRecipeSkeleton = EntrySkeletonType<TypeRecipeFields, "recipe">;
export type TypeRecipe<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRecipeSkeleton, Modifiers, Locales>;
