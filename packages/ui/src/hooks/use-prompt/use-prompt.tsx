"use client";

import type { ReactRoot } from "react-dom/client";
import { createRoot } from "react-dom/client";
import type { RenderPromptProps } from "./render-prompt";
import { RenderPrompt } from "./render-prompt";

type UsePromptProps = Omit<
  RenderPromptProps,
  "onConfirm" | "onCancel" | "open"
>;

type PromptFunction = (props: UsePromptProps) => Promise<boolean>;

const usePrompt = (): PromptFunction => {
  const prompt: PromptFunction = async (
    props: UsePromptProps,
  ): Promise<boolean> => {
    return new Promise<boolean>((resolve: (value: boolean) => void) => {
      let open = true;

      const onCancel: () => void = () => {
        open = false;
        render();
        resolve(false);
      };

      const onConfirm: () => void = () => {
        open = false;
        resolve(true);
        render();
      };

      // eslint-disable-next-line -- unsafe any value
      const mountRoot: ReactRoot = createRoot(document.createElement("div"));

      const render: () => void = (): void => {
        // eslint-disable-next-line -- unsafe any value
        mountRoot.render(
          <RenderPrompt
            onCancel={onCancel}
            onConfirm={onConfirm}
            open={open}
            {...props}
          />,
        );
      };

      render();
    });
  };

  return prompt;
};

export { usePrompt };
