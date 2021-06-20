import { Text } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { RankingDataCard } from './RankingDataCard';

describe('RankingDataCard component', () => {
  it('renders correctly', () => {
    const rows = [
      {
        positionIcon: 1,
        position: 1,
        user: (<Text>John Doe</Text>),
        level: 1,
        score: 1000,
      }
    ];

    render(
      <RankingDataCard
        rows={rows}
        columnId="id"
        templateColumns="1fr"
      />,
    );

    const playerPosition = screen.getByTestId('user-position');
    const playerName = screen.getByText('John Doe');
    const playerDifficultyLevel = screen.getByTestId('user-difficulty-level');
    const playerScore = screen.getByText('1000');

    expect(playerPosition).toBeInTheDocument();
    expect(playerName).toBeInTheDocument();
    expect(playerDifficultyLevel).toBeInTheDocument();
    expect(playerScore).toBeInTheDocument();
  });
});
