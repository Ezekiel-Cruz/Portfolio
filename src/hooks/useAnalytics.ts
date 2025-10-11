import { useEffect } from 'react';
import { initGA } from '../utils/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    initGA();
  }, []);
};