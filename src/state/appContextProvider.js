import React from "react";
import { combineComponents } from "./combineComponents";
import { ChatContextProvider } from "./contextProviders/chatContext/chatContext";

const providers = [ChatContextProvider];
export const AppContextProvider = combineComponents(...providers);
