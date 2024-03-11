import { describe, expect, it } from 'vitest'
import { DeelioEntity, validateDeelioEntity, validateModelsType } from '../../lib'

describe('validateDeelioEntity', () => {
  it('should return true for valid DeelioEntity', () => {
    const validEntity = {
      name: { type: 'string' },
      age: { type: 'number', primaryKey: true }
    }
    expect(validateDeelioEntity(validEntity)).toBe(true)
  })

  it('should return false for invalid DeelioEntity', () => {
    const invalidEntity = {
      name: 'John Doe',
      age: { type: 'number', primaryKey: 'yes' }
    }
    expect(validateDeelioEntity(invalidEntity)).toBe(false)
  })
})

describe('validateModelsType', () => {
  it('should not throw an error for valid models', () => {
    const models: Array<DeelioEntity> = [
      {
        name: 'user',
        fields: {
          name: { type: 'string' },
          age: { type: 'number', primaryKey: true }
        }
      }
    ]

    expect(() => validateModelsType(models)).not.toThrow()
  })

  it('should throw an error for empty models array', () => {
    const models: Array<DeelioEntity> = []
    expect(() => validateModelsType(models)).toThrow('A list of model is required !')
  })

  it('should throw an error for models array with invalid DeelioEntity', () => {
    const models: any = [
      { name: 'John Doe' } // Invalid model
    ]
    expect(() => validateModelsType(models)).toThrow('Please make sure all your model implements DeelioEntity !')
  })
})
