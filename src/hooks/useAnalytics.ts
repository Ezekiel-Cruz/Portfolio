import { useEffect } from 'react';
import { initGA } from '../lib/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    initGA();
  }, []);
};