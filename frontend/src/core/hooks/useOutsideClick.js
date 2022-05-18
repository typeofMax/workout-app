import { useState, useEffect, useRef } from 'react';

const useOutsideClick = (initialVisible) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useOutsideClick;
