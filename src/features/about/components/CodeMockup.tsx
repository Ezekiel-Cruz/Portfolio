import React from "react";

interface DeveloperInfo {
  name: string;
  role: string;
  location: string;
  education: string;
  passion: string;
  motto: string;
  funFact: string;
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
      <CodeLine prefix="1">const studentDeveloper = &#123;</CodeLine>
      <CodeLine prefix="2">  name: "{developerInfo.name}",</CodeLine>
      <CodeLine prefix="3">  role: "{developerInfo.role}",</CodeLine>
      <CodeLine prefix="4">  location: "{developerInfo.location}",</CodeLine>
      <CodeLine prefix="5">  education: "{developerInfo.education}",</CodeLine>
      <CodeLine prefix="6">  passion: "{developerInfo.passion}",</CodeLine>
      <CodeLine prefix="7">  motto: "{developerInfo.motto}",</CodeLine>
      <CodeLine prefix="8">  funFact: "{developerInfo.funFact}"</CodeLine>
      <CodeLine prefix="9">&#125;;</CodeLine>
    </div>
  );
};
