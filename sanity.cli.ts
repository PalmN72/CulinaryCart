/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId = "m9c5ybdd";
const dataset = "production";
// const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });
