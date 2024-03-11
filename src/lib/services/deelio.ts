import { DeelioConfig, validateModelsType, applyRouter, buildRouter } from '@/lib'

export const deelio = (options: DeelioConfig) => {
  validateModelsType(options?.models ?? [])
  const router = buildRouter(options.models)
  return {
    registerDeelioRouter: (app: any) => {
      applyRouter(router, app)
    }
  }
}
