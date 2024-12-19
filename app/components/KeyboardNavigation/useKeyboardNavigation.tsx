import { useEffect } from 'react';

type NavigationConfig = {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  isEnabled?: boolean;
};

export const useKeyboardNavigation = ({
  onUp,
  onDown,
  onLeft,
  onRight,
  onEnter,
  onEscape,
  isEnabled = true,
}: NavigationConfig) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isEnabled) return;

      switch (event.key) {
        case 'ArrowUp':
          onUp?.();
          break;
        case 'ArrowDown':
          onDown?.();
          break;
        case 'ArrowLeft':
          onLeft?.();
          break;
        case 'ArrowRight':
          onRight?.();
          break;
        case 'Enter':
          onEnter?.();
          break;
        case 'Escape':
          onEscape?.();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnabled, onUp, onDown, onLeft, onRight, onEnter, onEscape]);
};
