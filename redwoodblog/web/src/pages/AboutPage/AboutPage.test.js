import {cleanup, render} from '@testing-library/react'

import AboutPage from './AboutPage'

describe('AboutPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage/>)
    }).not.toThrow()
  })
})
