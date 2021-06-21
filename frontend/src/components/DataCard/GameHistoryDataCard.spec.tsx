import { render, screen } from '@testing-library/react';
import { GameHistoryDataCard } from './GameHistoryDataCard';

describe('RankingDataCard component', () => {
  it('renders correctly', () => {
    const rows = [
      {
        id: 'fake-player-id',
        date: '20/12/2021',
        level: 'easy',
        score: 1000,
        time: '01:30',
      }
    ];

    render(
      <GameHistoryDataCard
        rows={rows}
        columnId="id"
        templateColumns="1fr"
      />,
    );

    const gameDate = screen.getByText('20/12/2021');
    const gameDifficultyLevel = screen.getByText('easy');
    const playerScore = screen.getByText('1000');
    const gameElapsedTime = screen.getByText('01:30');

    expect(gameDate).toBeInTheDocument();
    expect(gameDifficultyLevel).toBeInTheDocument();
    expect(playerScore).toBeInTheDocument();
    expect(gameElapsedTime).toBeInTheDocument();
  });
});
