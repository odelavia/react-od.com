import { OPEN_NAV, CLOSE_NAV } from './types';

export const openNav = () => {
  return {
    type: OPEN_NAV,
    payload: {
      navOpen: true,
      display: 'block',
    }
  }
}

export const closeNav = (navOpen, display) => {
  return {
    type: CLOSE_NAV,
    payload: {
      navOpen: false,
      display: 'none',
    }
  }
}