import { render, screen } from '@testing-library/react';
import WorldMap from '../WorldMap';

describe('WorldMap', () => {
  it('should render the world map', async () => {
    render(<WorldMap />);
    const mapOfTheWorld = await screen.findByAltText('Map of the World');
    expect(mapOfTheWorld).toBeInTheDocument();
  });
});
