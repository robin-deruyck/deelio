import { DeelioEntity } from '@/lib'

export const validateModelsType = (models: Array<DeelioEntity>) => {
  if (!models.length) throw new Error('A list of model is required !')
  if (models.some((m) => !m.name)) throw new Error('Please provide a name for all of your entities !')
  if (models.some((m) => !validateDeelioEntity(m.fields)))
    throw new Error('Please make sure all your model implements DeelioEntity !')
}

export const validateDeelioEntity = (entity: any): entity is DeelioEntity => {
  // TODO: add name as required
  // TODO: add dupes on main validation
  if (typeof entity !== 'object' || entity === null) {
    return false
  }

  for (const key in entity) {
    const field = entity[key]

    // Check if the field is an object
    if (typeof field !== 'object' || field === null) {
      return false
    }

    // Check if the type property exists and has a valid value
    if (!('type' in field) || (field.type !== 'string' && field.type !== 'number')) {
      return false
    }

    // Check if the primaryKey property exists, and if it does, ensure it's a boolean
    if ('primaryKey' in field && typeof field.primaryKey !== 'boolean') {
      return false
    }
  }

  return true
}
