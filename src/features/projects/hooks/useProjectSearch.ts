import { useMemo } from 'react';

// Hook for searching and filtering
export function useProjectSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  query: string
) {
  return useMemo(() => {
    if (!query.trim()) return items;

    const lowercaseQuery = query.toLowerCase();
    
    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowercaseQuery);
        }
        if (Array.isArray(value)) {
          return value.some((v) =>
            typeof v === 'string' && v.toLowerCase().includes(lowercaseQuery)
          );
        }
        return false;
      })
    );
  }, [items, searchFields, query]);
}