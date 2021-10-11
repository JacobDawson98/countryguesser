import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render the world map', () => {
    const rendered = render(<App />);
    expect(rendered.container.querySelector('#worldMap')).toBeDefined();
  });
});
