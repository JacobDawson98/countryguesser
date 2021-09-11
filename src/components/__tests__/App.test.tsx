import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render the world map', async () => {
    render(<App />);
    const mapOfTheWorld = await screen.findByAltText('Map of the World');
    expect(mapOfTheWorld).toBeInTheDocument();
  });
});
