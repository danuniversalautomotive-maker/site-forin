declare module 'react-burger-menu' {
  import { Component } from 'react';

  interface BurgerMenuProps {
    right?: boolean;
    left?: boolean;
    isOpen?: boolean;
    onStateChange?: (state: { isOpen: boolean }) => void;
    children?: React.ReactNode;
    className?: string;
    customBurgerIcon?: React.ReactNode;
    customCrossIcon?: React.ReactNode;
  }

  export const slide: React.ComponentType<BurgerMenuProps>;
  export const stack: React.ComponentType<BurgerMenuProps>;
  export const elastic: React.ComponentType<BurgerMenuProps>;
  export const bubble: React.ComponentType<BurgerMenuProps>;
  export const push: React.ComponentType<BurgerMenuProps>;
  export const pushRotate: React.ComponentType<BurgerMenuProps>;
  export const scaleDown: React.ComponentType<BurgerMenuProps>;
  export const scaleRotate: React.ComponentType<BurgerMenuProps>;
  export const fallDown: React.ComponentType<BurgerMenuProps>;
  export const reveal: React.ComponentType<BurgerMenuProps>;
}
