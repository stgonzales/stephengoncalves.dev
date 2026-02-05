import { GlobalConfig } from "payload";
import { defaults } from "./defaults";
import { metadata } from "./metadata";

export const globals: GlobalConfig[] = [
    metadata,
    defaults,
]