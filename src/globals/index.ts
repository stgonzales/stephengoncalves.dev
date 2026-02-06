import { GlobalConfig } from "payload";
import { defaults } from "./defaults";
import { metadata } from "./metadata";
import { aboutMe } from "./about-me";

export const globals: GlobalConfig[] = [
    metadata,
    defaults,
    aboutMe,
]