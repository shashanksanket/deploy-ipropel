"use client";

import * as React from "react";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Prompt } from "../../components/prompt";

export interface RenderPromptProps {
  open: boolean;
  title: string;
  description: string;
  verificationText?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function RenderPrompt({
  open,
  /**
   * The prompt's title.
   */
  title,
  /**
   * The prompt's description.
   */
  description,
  /**
   * The text the user has to input in order to confirm the action.
   */
  verificationText,
  /**
   * The label for the Cancel button.
   */
  cancelText = "Cancel",
  /**
   * Label for the Confirm button.
   */
  confirmText = "Confirm",
  onConfirm,
  onCancel,
}: RenderPromptProps): JSX.Element {
  const [userInput, setUserInput] = React.useState("");

  const handleUserInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserInput(event.target.value);
  };

  const validInput = React.useMemo(() => {
    if (!verificationText) {
      return true;
    }

    return userInput === verificationText;
  }, [userInput, verificationText]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!verificationText) {
      return;
    }

    if (validInput) {
      onConfirm();
    }
  };

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && open) {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onCancel, open]);

  return (
    <Prompt open={open}>
      <Prompt.Content>
        <form onSubmit={handleFormSubmit}>
          <Prompt.Header>
            <Prompt.Title>{title}</Prompt.Title>
            <Prompt.Description>{description}</Prompt.Description>
          </Prompt.Header>
          {verificationText ? (
            <div className="border-ui-border-base mt-6 flex flex-col gap-y-4 border-y p-6">
              <Label className="text-ui-fg-subtle" htmlFor="verificationText">
                Please type{" "}
                <span className="text-ui-fg-base txt-compact-medium-plus">
                  {verificationText}
                </span>{" "}
                to confirm.
              </Label>
              <Input
                autoComplete="off"
                // autoFocus
                id="verificationText"
                onChange={handleUserInput}
                placeholder={verificationText}
              />
            </div>
          ) : null}
          <Prompt.Footer>
            <Prompt.Cancel onClick={onCancel}>{cancelText}</Prompt.Cancel>
            <Prompt.Action
              disabled={!validInput}
              onClick={verificationText ? undefined : onConfirm}
              type={verificationText ? "submit" : "button"}
            >
              {confirmText}
            </Prompt.Action>
          </Prompt.Footer>
        </form>
      </Prompt.Content>
    </Prompt>
  );
}
RenderPrompt.displayName = "RenderPrompt";
