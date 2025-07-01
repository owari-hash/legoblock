'use client';

import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

interface SnackbarProviderProps {
  children: ReactNode;
}

export default function SnackbarProvider({ children }: SnackbarProviderProps) {
  return <NotistackSnackbarProvider>{children}</NotistackSnackbarProvider>;
}
