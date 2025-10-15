import React, { useState } from "react";

interface DeveloperInfo {
  name: string;
  role: string;
  experience: string;
  passion: string;
  motto: string;
}

interface CodeMockupProps {
  developerInfo: DeveloperInfo;
}

// Constants
const DEFAULT_FACT =
  "Einstein couldn't speak fluently until after his 9th birthday. His parents thought he was mentally retarded.";
const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
const MAX_LINE_LENGTH = 50;

// Utility function to split text into lines
const splitTextIntoLines = (
  text: string,
  maxLength: number = MAX_LINE_LENGTH
): string[] => {
  if (!text) return [];

  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    if (currentLine.length + word.length + 1 <= maxLength) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines;
};

// Code line component
const CodeLine: React.FC<{
  prefix: string | number;
  children: React.ReactNode;
}> = ({ prefix, children }) => (
  <pre data-prefix={prefix}>
    <code>{children}</code>
  </pre>
);

// Dice button component
const DiceButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="hover:scale-110 transition-transform cursor-pointer bg-transparent border-none text-lg disabled:cursor-not-allowed"
    title="Click to get a new random fact!"
  >
    🎲
  </button>
);

export const CodeMockup: React.FC<CodeMockupProps> = ({ developerInfo }) => {
  const [fact, setFact] = useState(DEFAULT_FACT);
  const [loading, setLoading] = useState(false);

  const fetchRandomFact = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFact(data.text || DEFAULT_FACT);
    } catch (error) {
      console.error("Error fetching fact:", error);
      setFact(DEFAULT_FACT);
    } finally {
      setLoading(false);
    }
  };

  // Calculate dynamic line numbers
  const factLines = loading
    ? ["Loading new fact..."]
    : splitTextIntoLines(fact);
  const closingLineNumber = 12 + factLines.length;
  const emptyLineNumber = closingLineNumber + 1;
  const diceLineNumber = emptyLineNumber + 1;
  return (
    <div className="mockup-code w-full max-w-xl">
      {/* Developer Object */}
      <CodeLine prefix="1">const developer = &#123;</CodeLine>
      <CodeLine prefix="2"> name: "{developerInfo.name}",</CodeLine>
      <CodeLine prefix="3"> role: "{developerInfo.role}",</CodeLine>
      <CodeLine prefix="4"> experience: "{developerInfo.experience}",</CodeLine>
      <CodeLine prefix="5"> passion: "{developerInfo.passion}",</CodeLine>
      <CodeLine prefix="6"> motto: "{developerInfo.motto}"</CodeLine>
      <CodeLine prefix="7">&#125;;</CodeLine>

      {/* Empty Line */}
      <CodeLine prefix="8"> </CodeLine>

      {/* Random Facts API Object */}
      <CodeLine prefix="9">const randomFactsApi = &#123;</CodeLine>
      <CodeLine prefix="10"> name: "Random Facts",</CodeLine>
      <CodeLine prefix="11">
        {" "}
        desc: "Discover fascinating useless information"
      </CodeLine>

      {/* Dynamic Facts Lines */}
      {loading ? (
        <CodeLine prefix="12"> facts: "Loading new fact..."</CodeLine>
      ) : (
        factLines.map((line, index) => (
          <CodeLine key={index} prefix={12 + index}>
            {index === 0 ? ` facts: "${line}` : `         ${line}`}
            {index === factLines.length - 1 ? '"' : ""}
          </CodeLine>
        ))
      )}

      {/* Closing Brace and Interactive Elements */}
      <CodeLine prefix={closingLineNumber}>&#125;;</CodeLine>
      <CodeLine prefix={emptyLineNumber}> </CodeLine>
      <CodeLine prefix={diceLineNumber}>
        <DiceButton onClick={fetchRandomFact} disabled={loading} />
      </CodeLine>
    </div>
  );
};
