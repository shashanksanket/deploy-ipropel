"use client";

import * as React from "react";

type StateType = [boolean, () => void, () => void, () => void] & {
  state: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const useToggleState = (initial = false): StateType => {
  const [state, setState] = React.useState<boolean>(initial);

  const close = (): void => {
    setState(false);
  };

  const open = (): void => {
    setState(true);
  };

  const toggle = (): void => {
    setState((prevState) => !prevState);
  };

  const hookData = [state, open, close, toggle] as StateType;
  hookData.state = state;
  hookData.open = open;
  hookData.close = close;
  hookData.toggle = toggle;
  return hookData;
};

export { useToggleState };
