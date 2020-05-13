import { render, cleanup } from '@testing-library/react';

import AllStatesPage from './AllStatesPage';

describe('AllStatesPage', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders successfully', () => {
    expect(() => {
      render(<AllStatesPage />);
    }).not.toThrow();
  });
});
