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

import {Layout} from './Layout';

/**
 * Helper class for Polylines
 *
 * @author Jean-Christophe Taveau
 */
export class LineLayout extends Layout {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.type = 'line';
    this.attributes = {
      fill: 'none',
      stroke: 'none'
    };
  }
  
  generate(dataset) {
    // generate subgraph
    let self = this;
    return dataset.reduce( (path,data,index) => {
      path += (index === 0) ? 'M': 'L';
      path += `${self.xFunc(data)},${self.yFunc(data)}`;
      return path;
    },
    '');
  }
  
  x(func) {
    this.xFunc = func;
    return this;
  }
  
  y(func) {
    this.yFunc = func;
    return this;
  }
  

} // End of class LineLayout



