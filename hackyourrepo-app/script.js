'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
import { Nav } from './DOM-sections/header-select-repo.js';

const header = new Nav(
  document.createElement('div'),
  document.createElement('h1'),
  document.createElement('select'),
);
header.append();
header.manipulate();
header.style();
