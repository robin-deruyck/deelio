import {DeelioConfig} from "../types";
import {validateModelsType} from "./validate";
import {applyRouter, buildRouter} from "./builder";

export const deelio = (options: DeelioConfig) => {
	validateModelsType(options?.models ?? [])
	const router = buildRouter(options.models)
	return {
		registerDeelioRouter: (app: any) => {
			applyRouter(router, app)
		}
	}
}
