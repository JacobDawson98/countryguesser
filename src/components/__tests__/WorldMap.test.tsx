import { render } from '@testing-library/react';
import WorldMap from '../WorldMap';

describe('WorldMap', () => {
  it('should render the world map', () => {
    const rendered = render(<WorldMap />);
    const worldMap = rendered.getByTestId('worldMap');

    expect(worldMap).toBeDefined();
  });
});
