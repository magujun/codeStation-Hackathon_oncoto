import { render, screen } from '@testing-library/react';
import { Header } from '.';

// mockando a lib next/router para que não apresente erros
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [{
        user: {
          email: 'test@gmail.com',
        },
      }];
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

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Ranking')).toBeInTheDocument();
    expect(screen.getByText('Instruções')).toBeInTheDocument();
  });
});
