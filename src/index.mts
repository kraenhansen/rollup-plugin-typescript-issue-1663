import { greeting as jsAliasGreeting } from "some-js-file";
import { greeting as jsonAliasGreeting } from "some-json-file";
import { greeting as tsAliasGreeting } from "some-ts-file";

export const messageAlias = `${jsAliasGreeting} ${jsonAliasGreeting} ${tsAliasGreeting} world!`;

import { greeting as jsGreeting } from "./some-js-file.js";
import { greeting as jsonGreeting } from "./some-json-file.json";
import { greeting as tsGreeting } from "./some-ts-file.js";

export const message = `${jsGreeting} ${jsonGreeting} ${tsGreeting} world!`;
