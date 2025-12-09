import React from "react";

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

// Code line component
const CodeLine: React.FC<{
  prefix: string | number;
  children: React.ReactNode;
}> = ({ prefix, children }) => (
  <pre data-prefix={prefix}>
    <code>{children}</code>
  </pre>
);

export const CodeMockup: React.FC<CodeMockupProps> = ({ developerInfo }) => {
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
    </div>
  );
};
