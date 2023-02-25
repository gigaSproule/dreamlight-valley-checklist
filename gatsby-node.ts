import { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type ContentfulRecipe implements Node @dontInfer {
      name: String!
      ingredients: [String!]!
      image: ContentfulAsset @link(from: "image___NODE")
      baseEnergy: Int!
      baseSellPrice: Int!
      qualityRating: Int!
      category: String!
    }
  `;
    createTypes(typeDefs);
  };
