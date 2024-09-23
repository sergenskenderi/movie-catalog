export const debounce = (func, delay) => {
    let timeoutId;
  
    const debouncedFunction = (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  
    debouncedFunction.cancel = () => {
      clearTimeout(timeoutId);
    };
  
    return debouncedFunction;
  };