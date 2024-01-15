import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-KXVN1PZ8M6');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const trackButtonClick = (label: string) => {
  ReactGA.event({
    category: 'User Interaction',
    action: 'Clicked Button',
    label: label,
  });
};