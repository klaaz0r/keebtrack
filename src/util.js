import React from 'react';

export const getTag = tag => {
  switch (tag) {
    case "keycaps":
      return (<strong className="d-inline-block mb-2 text-primary">Keycaps</strong>);
      break;
    case "keyboard":
      return (<strong className="d-inline-block mb-2 text-success">Keyboard</strong>);
      break;
    case "parts":
      return (<strong className="d-inline-block mb-2 text-warning">Parts</strong>);
      break;
    case "artisan":
      return (<strong className="d-inline-block mb-2 text-danger">Artisan</strong>);
      break;
  }
}

export const getRegion = tag => {
  switch (tag) {
    case "US":
      return (<strong className="d-inline-block mb-2 text-primary">US</strong>);
      break;
    case "EUROPE":
      return (<strong className="d-inline-block mb-2 text-success">EUROPE</strong>);
      break;
    case "ASIA":
      return (<strong className="d-inline-block mb-2 text-danger">ASIA</strong>);
      break;
  }
}

const dateToString = d => `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`

export const getDates = (from, to) => {
  const a = new Date(from * 1000);
  const b = new Date(to * 1000);
  return (<div className="mb-1 text-muted">{dateToString(a)}
    - {dateToString(b)}</div>)
}
