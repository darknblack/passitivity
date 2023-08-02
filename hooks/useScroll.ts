'use client';
import { useSyncExternalStore } from 'react';

const getScroll = () => Math.floor(document.documentElement.scrollTop);

const subscribe = (onStoreChange: () => void) => {
  global.window?.addEventListener('scroll', onStoreChange);
  return () => global.window?.removeEventListener('scroll', onStoreChange);
};

function useScroll() {
  return useSyncExternalStore(subscribe, getScroll, () => undefined) || 0;
}

export default useScroll;
