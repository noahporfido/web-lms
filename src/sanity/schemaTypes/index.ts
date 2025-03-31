import { type SchemaTypeDefinition } from "sanity";
import playerType from "./playerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [playerType],
};
