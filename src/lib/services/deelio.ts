import { DeelioConfig} from '@/lib'
import { applyRouter, buildRouter } from '@/lib/services/builder'
import { validateModelsType } from '@/lib/services/validate'

export const deelio = (options: DeelioConfig) => {
  validateModelsType(options?.models ?? [])
  const router = buildRouter(options.models)

  return {
    registerDeelioRouter: (app: any) => {
      applyRouter(router, app)
    }
  }
}
