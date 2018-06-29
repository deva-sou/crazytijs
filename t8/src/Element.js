/*
 *  TIJS: Tools for ImageJ JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIJS, module t8
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIJS.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
'use strict';

import {CrazyPlot} from './CrazyPlot';

 // Element
export class Element {
  constructor(element) {
    this.anchor = element;
    this.children = [];
  }

  append(type) {
    const creators = {
      svg: new CrazyPlot('svg',this)
    };
    let element = creators[type];
    this.children.push(element);
    return element;
  }
  
  toSVG() {
    let xml = '';
    this.children.forEach( (child) => xml += child.toSVG());
    if (window.IJ) {
      // Non sense, just display SVG source code
      return xml;
    }
    else {

    }
    return xml;
  }
}
