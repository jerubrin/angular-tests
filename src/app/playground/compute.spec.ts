import { compute } from './compute'

describe('compute', () => {
  it('should return 0 it negative input', () => {
    expect(compute(-1)).toBe(0)
  })

  it('should increment input if positive', () => {
    expect(compute(1)).toBe(2)
  })
})