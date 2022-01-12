import React, { ReactElement } from 'react';

interface TabProps {
  selected?: boolean;
  title: string;
  handler: () => void;
}

export default function Tab({
  selected = false,
  title,
  handler
}: TabProps): ReactElement {
  return (
    <button
      className={`tab-btn ${selected ? 'selected' : ''}`}
      onClick={handler}
    >
      {title}
    </button>
  );
}
