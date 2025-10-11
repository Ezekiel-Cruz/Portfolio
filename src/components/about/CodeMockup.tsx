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

export const CodeMockup: React.FC<CodeMockupProps> = ({ developerInfo }) => {
  return (
    <div className="mockup-code w-full max-w-md">
      <pre data-prefix="1">
        <code>const developer = &#123;</code>
      </pre>
      <pre data-prefix="2">
        <code> name: "{developerInfo.name}",</code>
      </pre>
      <pre data-prefix="3">
        <code> role: "{developerInfo.role}",</code>
      </pre>
      <pre data-prefix="4">
        <code> experience: "{developerInfo.experience}",</code>
      </pre>
      <pre data-prefix="5">
        <code> passion: "{developerInfo.passion}",</code>
      </pre>
      <pre data-prefix="6">
        <code> motto: "{developerInfo.motto}"</code>
      </pre>
      <pre data-prefix="7">
        <code>&#125;;</code>
      </pre>
    </div>
  );
};
