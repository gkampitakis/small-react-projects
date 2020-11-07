import React from 'react';

interface TabsProps {
  selectTab: (tab: string) => void
}

export default function Tabs ({ selectTab }: TabsProps) {
  return (
    <section className="tabs">
      <button onClick={() => selectTab('all')}>All</button>
      <button onClick={() => selectTab('breakfast')}>Breakfast</button>
      <button onClick={() => selectTab('lunch')}>Lunch</button>
      <button onClick={() => selectTab('shakes')}>Shakes</button>
    </section>
  )
}
