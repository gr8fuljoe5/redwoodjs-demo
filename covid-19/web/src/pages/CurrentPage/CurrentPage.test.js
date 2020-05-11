import { render, cleanup } from '@testing-library/react'

import CurrentPage from './CurrentPage'

describe('CurrentPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CurrentPage />)
    }).not.toThrow()
  })
})
