"use client";
import { Highlight, themes } from "prism-react-renderer";
import * as React from "react";
import { cn } from "../../lib/utils";
import { Copy } from "../copy";

export interface CodeSnippet {
  /**
   * The label of the code snippet's tab.
   */
  label: string;
  /**
   * The language of the code snippet. For example, `tsx`.
   */
  language: string;
  /**
   * The code snippet.
   */
  code: string;
  /**
   * Whether to hide the line numbers shown as the side of the code snippet.
   */
  hideLineNumbers?: boolean;
  /**
   * Whether to hide the copy button.
   */
  hideCopy?: boolean;
}

type CodeBlockState = {
  snippets: CodeSnippet[];
  active: CodeSnippet;
  setActive: (active: CodeSnippet) => void;
} | null;

const CodeBlockContext = React.createContext<CodeBlockState>(null);

const useCodeBlockContext = (): {
  snippets: CodeSnippet[];
  active: CodeSnippet;
  setActive: (active: CodeSnippet) => void;
} => {
  const context = React.useContext(CodeBlockContext);

  if (context === null)
    throw new Error(
      "useCodeBlockContext can only be used within a CodeBlockContext",
    );

  return context;
};

interface RootProps {
  snippets: CodeSnippet[];
}

/**
 * This component is based on the `div` element and supports all of its props
 */
function Root({
  /**
   * The code snippets.
   */
  snippets,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & RootProps): JSX.Element {
  const [active, setActive] = React.useState(snippets[0]);

  return (
    <CodeBlockContext.Provider value={{ snippets, active, setActive }}>
      <div
        className={cn(
          "border-ui-code-border flex flex-col overflow-hidden rounded-lg border",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </CodeBlockContext.Provider>
  );
}
Root.displayName = "CodeBlock";

interface HeaderProps {
  hideLabels?: boolean;
}

/**
 * This component is based on the `div` element and supports all of its props
 */
function HeaderComponent({
  children,
  className,
  /**
   * Whether to hide the code snippets' labels.
   */
  hideLabels = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & HeaderProps): JSX.Element {
  const { snippets, active, setActive } = useCodeBlockContext();
  return (
    <div
      className={cn(
        "border-b-ui-code-border bg-ui-code-bg-header flex items-center gap-2 border-b px-4 py-3",
        className,
      )}
      {...props}
    >
      {!hideLabels &&
        snippets.map((snippet) => (
          <div
            className={cn(
              "text-ui-code-text-subtle txt-compact-small-plus cursor-pointer rounded-full border border-transparent px-3 py-2 transition-all",
              {
                "text-ui-code-text-base border-ui-code-border bg-ui-code-bg-base cursor-default":
                  active.label === snippet.label,
              },
            )}
            key={snippet.label}
            onClick={() => {
              setActive(snippet);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setActive(snippet);
              }
            }}
            role="button"
            tabIndex={0}
          >
            {snippet.label}
          </div>
        ))}
      {children}
    </div>
  );
}
HeaderComponent.displayName = "CodeBlock.Header";

/**
 * This component is based on the `div` element and supports all of its props
 */
function Meta({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn("text-ui-code-text-subtle ml-auto", className)}
      {...props}
    />
  );
}
Meta.displayName = "CodeBlock.Header.Meta";

const Header = Object.assign(HeaderComponent, { Meta });

/**
 * This component is based on the `div` element and supports all of its props
 */
function Body({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const { active } = useCodeBlockContext();
  return (
    <div
      className={cn(
        "bg-ui-code-bg-base relative h-full overflow-y-auto p-4",
        className,
      )}
      {...props}
    >
      {!active.hideCopy && (
        <Copy
          className="text-ui-code-icon absolute right-4 top-4"
          content={active.code}
        />
      )}
      <div className="max-w-[90%]">
        <Highlight
          code={active.code}
          language={active.language}
          theme={{
            ...themes.palenight,
            plain: {
              color: "rgba(249, 250, 251, 1)",
              backgroundColor: "rgb(17,24,39)",
            },
            styles: [
              ...themes.palenight.styles,
              {
                types: ["keyword"],
                style: {
                  fontStyle: "normal",
                  color: "rgb(187,160,255)",
                },
              },
              {
                types: ["punctuation", "operator"],
                style: {
                  fontStyle: "normal",
                  color: "rgb(255,255,255)",
                },
              },
              {
                types: ["constant", "boolean"],
                style: {
                  fontStyle: "normal",
                  color: "rgb(187,77,96)",
                },
              },
              {
                types: ["function"],
                style: {
                  fontStyle: "normal",
                  color: "rgb(27,198,242)",
                },
              },
              {
                types: ["number"],
                style: {
                  color: "rgb(247,208,25)",
                },
              },
              {
                types: ["maybe-class-name"],
                style: {
                  color: "rgb(255,203,107)",
                },
              },
              {
                types: ["string"],
                style: {
                  color: "rgb(73,209,110)",
                },
              },
              {
                types: ["comment"],
                style: {
                  color: "rgb(52,211,153)",
                },
              },
            ],
          }}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                "txt-compact-small whitespace-pre-wrap bg-transparent font-mono",
                {
                  "grid grid-cols-[auto,1fr] gap-x-4": !active.hideLineNumbers,
                },
              )}
              style={{
                ...style,
                background: "transparent",
              }}
            >
              {/* eslint-disable --  There is no issue in using index */}
              {!active.hideLineNumbers && (
                <div className="flex flex-col text-right" role="presentation">
                  {tokens.map((_, i) => (
                    <span
                      className="text-ui-code-text-subtle tabular-nums"
                      key={i}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              )}
              <div>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
              {/* eslint-enable  */}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
Body.displayName = "CodeBlock.Body";

const CodeBlock = Object.assign(Root, { Body, Header, Meta });

export { CodeBlock };
