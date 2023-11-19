import React from 'react';
import ReactDOM from 'react-dom';

const JSXRules = (props) => {
  return <blockquote>{props.text}</blockquote>;
};

const FancyTable = (props) => {
  const list = Array.from({ length: props.n }, (_, index) => (
    <li>Item {index + 1}</li>
  ));

  return <ul>{list}</ul>;
};

const Multiple = (props) => {
  const list = Array.from({ length: props.number }, (_, index) => (
    <li>Item {index + 1}</li>
  ));

  return (
    <>
      <h2>{props.name}</h2>
      <ol>{list}</ol>
    </>
  );
};

const App = () => {
  return (
    <>
      <JSXRules text="JSX Rules!" />
      <FancyTable n={5} />
      <Multiple name="Multipla" number={3} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
