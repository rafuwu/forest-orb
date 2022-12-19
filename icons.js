const icons = {
  ban: 'm9 0a9 9 90 1 0 9 9 9 9 90 0 0 -9 -9zm0 2.1a6.9 6.9 90 0 1 4.1 1.3l-9.7 9.7a6.9 6.9 90 0 1 5.6 -11zm0 13.8a6.9 6.9 90 0 1 -4.1 -1.3l9.6-9.6a6.9 6.9 90 0 1 -5.5 10.9z',
  dev: 'm9.5 6.5l-8 8c-1 1.5 1 3 2 2l8-8c6 0.5 7-3.5 5.5-5.5l-2.5 2.5h-0.5l-1.5-1.5v-0.5l2.5-2.5c-2.5-1-6 0.5-5.5 5.5',
  edit: 'm12.25 3h-8.25q-2 0-2 2v10q0 2 2 2h10q2 0 2-2v-7.75l-2 2.25v3.5c0 2 0 2-2 2h-6c-2 0-2 0-2-2v-6c0-2 0-2 2-2h4.5l1.75-2m3.75-2l-7 8-1 3 3-1 7-8q0-2-2-2m-0.875 1l2 2-0.8125 0.9375-2-2m-5.3125 6.0625l2 2m-2.75 0.25l0.5 0.5',
  expedition: 'm0 9l6.5-1.5-1.5-2.5 2.5 1.5 1.5-6.5 1.5 6.5 2.5-1.5-1.5 2.5 6.5 1.5-6.5 1.5 1.5 2.5-2.5-1.5-1.5 6.5-1.5-6.5-2.5 1.5 1.5-2.5-6.5-1.5m7.75-6q-4.75 0-4.75 4.75m7.25-4.75q4.75 0 4.75 4.75m-7.25 7.25q-4.75 0-4.75-4.75m7.2656 4.75q4.7344 0 4.7344-4.75m-6-2.75a1 1 90 0 0 0 3 1 1 90 0 0 0 -3',
  global: 'm0.5 6h6l8.625-3.75q0.375 0 0.375 0.375v12.75q0 0.375-0.375 0.375l-8.625-3.75h-3c-3.75 0-3.75-6 0-6m12.375 1.5h0.375q0.75 0 0.75 0.75v1.5q0 0.75-0.75 0.75h-0.375v-3m-9.75 4.875-0.9375 2.8125q-0.1875 0.5625-0.5625 0.5625h-1.6875q-0.1875 0 0-0.5625l0.9375-2.8125h2.25',
  info: 'm9 0a1 1 90 0 0 0 18 1 1 90 0 0 0 -18m-2 15.5v-1q1 0 1-1v-4q0-1-1-1v-1h4v6q0 1 1 1v1m-3-9c-1.625 0-2-1.5-2-2s0.375-2 2-2 2 1.5 2 2-0.375 2-2 2',
  important: 'm7 1h4v12h-4v-12m0 14h4v3h-4v-3',
  join: 'm2 5v-3q0-2 2-2h10q2 0 2 2v14q0 2-2 2h-10q-2 0-2-2v-3h2v1c0 2 0 2 2 2h6c2 0 2 0 2-2v-10c0-2 0-2-2-2h-6c-2 0-2 0-2 2v1h-2m-2 2h6v-3l5 5-5 5v-3h-6v-4',
  leave: 'm16 5v-3q0-2-2-2h-10q-2 0-2 2v14q0 2 2 2h10q2 0 2-2v-3l-2 2c0 1-0.25 1-2 1h-6c-2 0-2 0-2-2v-10c0-2 0-2 2-2h6c2 0 2 0.25 2 1l2 2m-9 2h6v-3l5 5-5 5v-3h-6v-4',
  locked: 'm13 7c0-4 0-6-4-6s-4 2-4 6h2c0-4 0-4 2-4s2 0 2 4h2q2 0 2 2v6q0 2-2 2h-8q-2 0-2-2v-6q0-2 2-2h6m-2 3a1 1 90 0 0 0 2 1 1 90 0 0 0 -2m-0.5 1.875l-0.5 1.875q0 0.125 0.125 0.125h1.75q0.125 0 0.125-0.125l-0.5-1.875q-0.5 0.25-1 0',
  mod: 'm2 2q5 0 7-2 2 2 7 2 0 9-7 16-7-7-7-16m2 2q3 0 5-2 2 2 5 2-1 7-5 12-4-5-5-12',
  muted: 'm 4.5 5.5 h 3 l 5 -5 v 16 l -5 -5 h -3 c -0.5523 0 -1 -0.4477 -1 -1 v -4 c 0 -0.5523 0.4477 -1 1 -1 z m 10.5 -4.5 L 17 1 l -12 16 L 3 17 Z',
  party: 'm9 4a1 1 90 0 0 0 5 1 1 90 0 0 0 -5m-4 13c0-5 1-7 4-7s4 2 4 7q-4 2-8 0m0-17a1 1 90 0 0 0 5 1 1 90 0 0 0 -5m-4 13c0-5 1-7 4-7 0.375 0 0.5 0 1.25 0.125-0.25 1.625 1.25 3.125 2.5 3.125q0.125 0.25 0.125 0.5c-1.75 0-3.625 1-3.875 4.125q-2.375 0-4-0.875m12-13a1 1 90 0 1 0 5 1 1 90 0 1 0 -5m4 13c0-5-1-7-4-7-0.375 0-0.5 0-1.25 0.125 0.25 1.625-1.25 3.125-2.5 3.125q-0.125 0.25-0.125 0.5c1.75 0 3.625 1 3.875 4.125q2.375 0 4-0.875',
  partyCreate: 'm9 4a1 1 90 0 0 0 5 1 1 90 0 0 0-5m-4 13c0-5 1-7 4-7 1.625 0 2.5313 0.6875 2.75 1.125v0.625h-3v3.5h3v2.25q-3.2344 1.2344-6.75-0.5m0-17a1 1 90 0 0 0 5 1 1 90 0 0 0-5m-4 13c0-5 1-7 4-7 0.375 0 0.5 0 1.25 0.125-0.25 1.625 1.25 3.125 2.5 3.125q0.125 0.25 0.125 0.5c-1.75 0-3.625 1-3.875 4.125q-2.375 0-4-0.875m12-13a1 1 90 0 1 0 5 1 1 90 0 1 0-5m4 11.75c-0.125-3.625-1-5.75-4-5.75-0.375 0-0.5 0-1.25 0.125 0.25 1.625-1.25 3.125-2.5 3.125q-0.125 0.25-0.125 0.5c1.75 0 2.5 0.875 2.625 1v-2h3.5v3h1.75m-2 6.25v-3h3v-3h-3v-3h-3v3h-3v3h3v3h3',
  partyDisband: 'm9 4c0.4375 0 1.375 0.1875 1.9062 0.875l-1.9062 1.875-1.9063-1.875c0.6563-0.75 1.4688-0.875 1.9063-0.875m-4 11.25l4-4 3.9375 3.9375s0.0625 0.25 0.0625 1.8125q-4 2-8 0-0.0625-1.5 0-1.75m0-15.25m1.6562 4.4063c2.2813-2.4688-0.4687-5.2813-2.7812-4.1563q-0.5 0.3125-0.7813 0.625l3.5625 3.5313m-5.6562 8.5937c0.5 0.25 0.9375 0.4375 1.25 0.5l4.5-4.5-2.875-2.875c-3.1875 0.5-2.875 6.125-2.875 6.875m10.344-8.5937c-2.2813-2.4688 0.4687-5.2813 2.7812-4.1563q0.5 0.3125 0.7813 0.625l-3.5625 3.5313m5.6562 8.5937c-0.5 0.25-0.9375 0.4375-1.25 0.5l-4.5-4.5 2.875-2.875c3.1875 0.5 2.875 6.125 2.875 6.875m-14-12l6 6 7-7 2 2-7 7 7 7-2 2-7-7-7 7-2-2 7-7-6-6 2-2',
  partyMember: 'm9 0a1.275 1.25 90 0 0 0 6.25 1.25 1.25 90 0 0 0 -6.25m-5 16.75c0-6.5 1.25-9 5-9s5 2.5 5 9.25q-5 2.25-10-0.25',
  partyOwner: 'm2 6a1 1 90 0 0 0 3 1 1 90 0 0 0 -3m14 3a1 1 90 0 0 0 -3 1 1 90 0 0 0 3m-7-2a1 1 90 0 0 0 -3 1 1 90 0 0 0 3m-5.75 1.25c0.75 0.75 3.75 0.75 5-1.5q0.75 0.5 1.5 0c1.25 2.25 4.25 2.25 5 1.5q0.25 0.5 1 0.75-1 3-1 6h-11.75q0-4-0.75-6 0.75-0.25 1-0.75',
  playerLocation: 'm9 0a1 1 0 0 0 0 18 1 1 0 0 0 0-18v18q-10-9 0-18 10 9 0 18m-7.5-4q7.5-3 15 0m-15-10q7.5 2 15 0m-16.5 5h18',
  save: 'm0 1.5q0-1.5 1.5-1.5h11.25l2.25 2.25v12.75q0 1.5-1.5 1.5h-12q-1.5 0-1.5-1.5v-13.5m4.5-1.5v3.75q0 0.75 0.75 0.75h4.5q0.75 0 0.75-0.75v-3.75m-1.75 1v2.5h0.75v-2.5h-0.75m-5.75 15.5v-6.75q0-0.75 0.75-0.75h7.5q0.75 0 0.75 0.75v6.75m-7.5-6h6m-6 2.25h6m-6 2.25h6',
  saveDownload: 'm12.75 10.5v3.75h-2.25l3.75 3.75 3.75-3.75h-2.25v-3.75h-3m-12.75-9q0-1.5 1.5-1.5h11.25l2.25 2.25v8.25m-2.25 6h-11.25q-1.5 0-1.5-1.5v-13.5m4.5-1.5v3.75q0 0.75 0.75 0.75h4.5q0.75 0 0.75-0.75v-3.75m-1.75 1v2.5h0.75v-2.5h-0.75m-5.75 15.5v-6.75q0-0.75 0.75-0.75h7.5q0.75 0 0.75 0.75v4.5m0 1.5v0.75m-7.5-6h6m-6 2.25h6m-6 2.25h6',
  saveUpload: 'm12.75 18v-3.25h-2.25l3.75-4.25 3.75 4.25h-2.25v3.25h-3m-12.75-16.5q0-1.5 1.5-1.5h11.25l2.25 2.25v9.1m-2.25 5.15h-11.25q-1.5 0-1.5-1.5v-13.5m4.5-1.5v3.75q0 0.75 0.75 0.75h4.5q0.75 0 0.75-0.75v-3.75m-1.75 1v2.5h0.75v-2.5h-0.75m-5.75 15.5v-6.75q0-0.75 0.75-0.75h7.5q0.75 0 0.75 0.75v3.25m0 1.75v1.75m-7.5-6h6m-6 2.25h6m-6 2.25h6',
  star: 'm9 0.5 2 6.5h7l-5.5 4 2 6.5-5.5-4-5.5 4 2-6.5-5.5-4h7z',
  starHalf: 'm9 0.5v13l-5.5 4 2-6.5-5.5-4h7z',
  transferPartyOwner: 'm2 2a1 1 90 0 0 0 3 1 1 90 0 0 0 -3m14 3a1 1 90 0 0 0 -3 1 1 90 0 0 0 3m-7-2a1 1 90 0 0 0 -3 1 1 90 0 0 0 3m-5.75 1.25c0.75 0.75 3.75 0.75 5-1.5q0.75 0.5 1.5 0c1.25 2.25 4.25 2.25 5 1.5q0.25 0.5 1 0.75-1 3-1 6h-11.75q0-4-0.75-6 0.75-0.25 1-0.75m-0.25 9.75h8v-2l4 3-4 3v-2h-8v-2'
};

function getSvgIcon(iconId, fill) {
  if (!icons.hasOwnProperty(iconId))
    return null;
  
  const icon = document.createElement('div');
  icon.classList.add(`${iconId}Icon`);
  icon.classList.add('icon');
  if (fill)
    icon.classList.add('fillIcon');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 18 18');
  
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', icons[iconId]);

  svg.appendChild(path);
  icon.appendChild(svg);

  return icon;
}
