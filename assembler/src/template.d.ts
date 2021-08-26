import { Schema } from "./schema";

export type GenPart<T = any> = (schema: Schema) => T[];

export type Gen = (schema: Schema) => [string, object | string];

export type GenPack = (schemas: Schema[]) => [string, object | string][];
