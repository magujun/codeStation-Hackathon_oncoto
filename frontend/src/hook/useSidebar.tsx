import { SidebarContext } from '../context/SidebarContext';
import { useContextSelector } from 'use-context-selector';

export const useSidebar = () => {
  const isOpen = useContextSelector(SidebarContext, data => data.isOpen);
  const isControlled = useContextSelector(SidebarContext, data => data.isControlled);
  const getButtonProps = useContextSelector(SidebarContext, data => data.getButtonProps);
  const getDisclosureProps = useContextSelector(SidebarContext, data => data.getDisclosureProps);
  const onClose = useContextSelector(SidebarContext, data => data.onClose);
  const onOpen = useContextSelector(SidebarContext, data => data.onOpen);
  const onToggle = useContextSelector(SidebarContext, data => data.onToggle);

  return {
    isOpen,
    isControlled,
    getButtonProps,
    getDisclosureProps,
    onClose,
    onOpen,
    onToggle
  };
};
