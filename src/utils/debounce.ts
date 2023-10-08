type Func = (...args: any[]) => void;

export const debounce = (func: Func, wait: number): Func => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: any[]): void {
    const later = () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
};
