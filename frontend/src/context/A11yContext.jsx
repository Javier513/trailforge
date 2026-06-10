import React, { createContext, useContext, useState, useEffect } from 'react';

const A11yContext = createContext();

export const useA11y = () => useContext(A11yContext);

export const A11yProvider = ({ children }) => {
  const [a11yMode, setA11yMode] = useState(() => {
    const saved = localStorage.getItem('a11yMode');
    return saved === 'true';
  });

  useEffect(() => {
    if (a11yMode) {
      document.documentElement.setAttribute('data-a11y', 'true');
    } else {
      document.documentElement.removeAttribute('data-a11y');
    }
    localStorage.setItem('a11yMode', a11yMode);
  }, [a11yMode]);

  const toggleA11yMode = () => {
    setA11yMode((prev) => !prev);
  };

  return (
    <A11yContext.Provider value={{ a11yMode, toggleA11yMode }}>
      {children}
    </A11yContext.Provider>
  );
};
