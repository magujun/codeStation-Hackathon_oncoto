import { render, screen } from '@testing-library/react';
import { Sidebar } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

jest.mock('@chakra-ui/media-query', () => {
  return {
    useBreakpointValue() {
      return true;
    },
  };
});

jest.mock('../../hook/useSidebar', () => {
  return {
    useSidebar() {
      return { isOpen: true, onClose: () => {} };
    },
  };
});

describe('Sidebar component', () => {
  it('renders correctly', () => {
    render(<Sidebar />);

    expect(screen.getAllByText('Dashboard')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Ranking')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Instruções')[0]).toBeInTheDocument();
  });
});
