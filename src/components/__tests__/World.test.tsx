import { render } from '@testing-library/react';
import WorldMap from '../WorldMap';

describe('WorldMap', () => {
  it('should render the world map', async () => {
    const rendered = render(<WorldMap />);
    expect(rendered.container.querySelector('#worldMap')).toBeDefined();
  });
});
