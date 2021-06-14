import { Schema } from "./schema";

export type Gen = (schema: Schema) => [string, object | string];

export type GenPack = (schemas: Schema[]) => [string, object | string][];
