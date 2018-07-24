import React from 'react';

const IndexTab = () => (
  <div className="body-text-container">
    <code className="line-1-text">
      <span className="html-keyword">import</span>
      React
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'react'</span>
      ;
    </code>
    <code className="line-2-text">
      <span className="html-keyword">import</span>
      ReactDOM
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'react-dom'</span>
      ;
    </code>
    <code className="line-2-text">
      <span className="html-keyword">import</span>
      App
      <span className="html-keyword pad-space">from</span>
      <span className="html-path">'./App'</span>
      ;
    </code>
    <code className="line-3-text commented-out" />
      <code className="line-4-text"><span className="html-object">ReactDOM</span><span className="html-method">.render</span>(</code>
        <article className="pad1 line-5-text html-tag">&lt;<span className="html-element">App</span>&gt;</article>
      <code className="line-13-text pad1 html-tag"><span className="html-object">document</span><span className="html-method">.getElementById</span>(<span className="html-path">'root'</span>),</code>
      <code className="line-14-text">)
      ;
    </code>
  </div>
);

export default IndexTab;