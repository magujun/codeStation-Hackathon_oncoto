import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { createContext } from 'use-context-selector';

interface SidebarProps {
  children: React.ReactNode;
}

type SidebarContextData = UseDisclosureReturn;

export const SidebarContext = createContext({} as SidebarContextData);

export const SidebarProvider = ({
  children,
}: SidebarProps) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}
