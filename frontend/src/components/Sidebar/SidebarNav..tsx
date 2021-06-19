import { Stack } from '@chakra-ui/react';
import { NavLink } from './NavLink';

export function SidebarNav() {
  return (
    <Stack spacing="6" align="flex-start">
      <NavLink href="/dashboard">
        Dashboard
      </NavLink>
      <NavLink href="/ranking">
        Ranking
      </NavLink>
      <NavLink href="/instructions">
        Instruções
      </NavLink>
    </Stack>
  );
}
