import { render, cleanup } from '@testing-library/react'

import ByStatePage from './ByStatePage'

describe('ByStatePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ByStatePage />)
    }).not.toThrow()
  })
})
