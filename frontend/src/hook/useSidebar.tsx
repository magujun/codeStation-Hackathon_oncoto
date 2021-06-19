import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

export const useSidebar = () => {
  return useContext(SidebarContext);
};
