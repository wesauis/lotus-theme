import { Schema } from "./schema";

export type GenPack = (schemas: Schema[]) => [string, object | string][];
