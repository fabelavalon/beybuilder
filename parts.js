/*==========================================================*
 * BeyBuilder v1.0 for Dynamite Battle and Burst Ultimate   *
 * Author: Fabel                                            *
 * Copyright 2022                                           *
 *==========================================================*/

var blades = [

    //Greatest Rapheal's weight is stored in it's core listing
    {"name":"Astral", "spin":"both", "weight":11.75, "abbv":"A", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Burst", "spin":"both", "weight":15.60, "abbv":"Br", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"Barricade", "spin":"both", "weight":14.80, "abbv":"Brc", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Chain", "spin":"right", "weight":14.84, "abbv":"Ch", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"Cyclone", "spin":"right", "weight":8.30, "abbv":"C", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Dangerous", "spin":"right", "weight":10.00, "abbv":"Dn", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Dangerous F", "spin":"right", "weight":15.21, "abbv":"Dn+F", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Devil", "spin":"right", "weight":5.32, "abbv":"Dv", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Devil F", "spin":"right", "weight":10.73, "abbv":"Dv+F", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"Divine", "spin":"right", "weight":9.36, "abbv":"Dvn", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Divine A", "spin":"right", "weight":13.69, "abbv":"Dvn+A", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Divine F", "spin":"right", "weight":14.76, "abbv":"Dvn+F", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Dynamite", "spin":"right", "weight":5.50, "abbv":"D", "wins":0, "losses":0, "draws":0, "id":12},
    {"name":"Dynamite F", "spin":"right", "weight":10.71, "abbv":"D+F", "wins":0, "losses":0, "draws":0, "id":13},
    {"name":"Gatling", "spin":"right", "weight":16.20, "abbv":"Gt", "wins":0, "losses":0, "draws":0, "id":14},
    {"name":"Greatest Rapheal", "spin":"right", "weight":0, "abbv":"", "wins":0, "losses":0, "draws":0, "id":15},
    {"name":"Guilty", "spin":"left", "weight":17.06, "abbv":"G", "wins":0, "losses":0, "draws":0, "id":16},
    {"name":"King M", "spin":"both", "weight":16.00, "abbv":"K M", "wins":0, "losses":0, "draws":0, "id":17},
    {"name":"King MR", "spin":"both", "weight":15.80, "abbv":"K MR", "wins":0, "losses":0, "draws":0, "id":18},
    {"name":"King R", "spin":"both", "weight":15.60, "abbv":"K R", "wins":0, "losses":0, "draws":0, "id":19},
    {"name":"Prominance", "spin":"right", "weight":14.71, "abbv":"P", "wins":0, "losses":0, "draws":0, "id":20},
    {"name":"Roar", "spin":"left", "weight":12.10, "abbv":"R", "wins":0, "losses":0, "draws":0, "id":21},
    {"name":"Savior", "spin":"right", "weight":10.82, "abbv":"S", "wins":0, "losses":0, "draws":0, "id":22},
    {"name":"Super M", "spin":"both", "weight":15.80, "abbv":"S M", "wins":0, "losses":0, "draws":0, "id":23},
    {"name":"Super MR", "spin":"both", "weight":15.73, "abbv":"S MR", "wins":0, "losses":0, "draws":0, "id":24},
    {"name":"Super R", "spin":"both", "weight":15.40, "abbv":"S R", "wins":0, "losses":0, "draws":0, "id":25},
    {"name":"SuperKing M", "spin":"both", "weight":15.89, "abbv":"SK M", "wins":0, "losses":0, "draws":0, "id":26},
    {"name":"SuperKing MR", "spin":"both", "weight":15.70, "abbv":"SK MR", "wins":0, "losses":0, "draws":0, "id":27},
    {"name":"SuperKing R", "spin":"both", "weight":15.53, "abbv":"SK R", "wins":0, "losses":0, "draws":0, "id":28},
    {"name":"SuperKing RM", "spin":"both", "weight":15.70, "abbv":"SK RM", "wins":0, "losses":0, "draws":0, "id":29},
    {"name":"Ultimate", "spin":"right", "weight":11.20, "abbv":"U", "wins":0, "losses":0, "draws":0, "id":30},
    {"name":"Vanish", "spin":"left", "weight":12.50, "abbv":"V", "wins":0, "losses":0, "draws":0, "id":31},
    {"name":"Wind", "spin":"right", "weight":13.05, "abbv":"Wn", "wins":0, "losses":0, "draws":0, "id":32},
    {"name":"Xiphiod", "spin":"right", "weight":13.00, "abbv":"Xp", "wins":0, "losses":0, "draws":0, "id":33},
    {"name":"Zest Attack L", "spin":"left", "weight":10.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":34},
    {"name":"Zest Attack R", "spin":"right", "weight":10.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":35},
    {"name":"Zest Defence L", "spin":"left", "weight":10.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":36},
    {"name":"Zest Defence R", "spin":"right", "weight":10.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":37},
    {"name":"Zest Speed L", "spin":"left", "weight":6.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":38},
    {"name":"Zest Speed R", "spin":"right", "weight":6.00, "abbv":"Zs", "wins":0, "losses":0, "draws":0, "id":39}
    
];

var cores = [

    //Lucifer isn't out yet, we don't know it's weight, so it's listed as 0 for now
    {"name":"Achilles", "spin":"both", "weight":8.09, "abbv":"AC", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Bahamut", "spin":"left", "weight":7.80, "abbv":"Bahamut", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"Belial", "spin":"right", "weight":7.00, "abbv":"BL", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Belial 2", "spin":"right", "weight":8.10, "abbv":"BL2", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"Belial 3", "spin":"right", "weight":9.36, "abbv":"BL3", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Dragon", "spin":"right", "weight":7.80, "abbv":"Dragon", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Fafnir", "spin":"left", "weight":7.21, "abbv":"FF", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Greatest Rapheal", "spin":"right", "weight":30.70, "abbv":"GRP", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Helios", "spin":"left", "weight":7.18, "abbv":"HL", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"Hello Kitty", "spin":"both", "weight":7.44, "abbv":"HK", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Hyperion", "spin":"right", "weight":7.44, "abbv":"HY", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Kerbeus", "spin":"right", "weight":8.05, "abbv":"KR", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Knight", "spin":"right", "weight":7.62, "abbv":"KN", "wins":0, "losses":0, "draws":0, "id":12},
    {"name":"Loginus", "spin":"left", "weight":10.08, "abbv":"LN", "wins":0, "losses":0, "draws":0, "id":13},
    {"name":"Lucifer", "spin":"left", "weight":7.20, "abbv":"LC", "wins":0, "losses":0, "draws":0, "id":14},
    {"name":"Perseus", "spin":"right", "weight":10.70, "abbv":"PR", "wins":0, "losses":0, "draws":0, "id":15},
    {"name":"Pheonix", "spin":"right", "weight":7.45, "abbv":"PH", "wins":0, "losses":0, "draws":0, "id":16},
    {"name":"Ragnaruk", "spin":"right", "weight":6.70, "abbv":"RG", "wins":0, "losses":0, "draws":0, "id":17},
    {"name":"Spriggan", "spin":"right", "weight":7.90, "abbv":"SP", "wins":0, "losses":0, "draws":0, "id":18},
    {"name":"Spriggan 2", "spin":"right", "weight":7.45, "abbv":"SP2", "wins":0, "losses":0, "draws":0, "id":19},
    {"name":"Valkyrie", "spin":"right", "weight":7.86, "abbv":"VL", "wins":0, "losses":0, "draws":0, "id":20},
    {"name":"Valkyrie 2", "spin":"right", "weight":7.50, "abbv":"VL2", "wins":0, "losses":0, "draws":0, "id":21},
    {"name":"Xcalibur", "spin":"right", "weight":10.47, "abbv":"XC", "wins":0, "losses":0, "draws":0, "id":22}
    
];

var forgeDiscs = [

    //Almight and Shot have their weights stored in their driver listings
    {"name":"Almight", "weight":0, "abbv":"Al", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Almight+V", "weight":0, "abbv":"Al+V", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"Fortress", "weight":31.04, "abbv":"Ft", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Giga", "weight":32.41, "abbv":"Gg", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"Illegal", "weight":31.82, "abbv":"Il", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Karma", "weight":23.20, "abbv":"Kr", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Legacy", "weight":30.30, "abbv":"Lg", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Moon", "weight":31.50, "abbv":"Mn", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Nexus", "weight":30.73, "abbv":"Nx", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"Nexus+D", "weight":34.67, "abbv":"Nx+D", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Nexus+S", "weight":35.05, "abbv":"Nx+S", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Over", "weight":33.48, "abbv":"Ov", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Shot", "weight":0, "abbv":"Sh", "wins":0, "losses":0, "draws":0, "id":12},
    {"name":"Spread'", "weight":33.00, "abbv":"S'", "wins":0, "losses":0, "draws":0, "id":13},
    {"name":"Tapered", "weight":28.83, "abbv":"Tp", "wins":0, "losses":0, "draws":0, "id":14},
    {"name":"Wing'", "weight":31.90, "abbv":"W'", "wins":0, "losses":0, "draws":0, "id":15},
    {"name":"Xanthas", "weight":32.48, "abbv":"Xn", "wins":0, "losses":0, "draws":0, "id":16}
    
];

var drivers = [

    //if weight is 0 the driver has not been offcially released yet.
    {"name":"Adventure", "weight":8.10, "abbv":"Ad", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"Adventure+V", "weight":13.70, "abbv":"Ad+V", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":" Adventure+VS", "weight":15.70, "abbv":"Ad+VS", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"Almight", "weight":38.10, "abbv":"", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"Almight+V", "weight":42.70, "abbv":"", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"Atomic'", "weight":7.60, "abbv":"At'", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"Bearing'", "weight":6.40, "abbv":"Br'", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"Bounce", "weight":6.66, "abbv":"Bn", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"Charge Metal'", "weight":16.30, "abbv":"Cm'", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"High Charge'", "weight":16.80, "abbv":"HCh", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"Destroy'", "weight":6.86, "abbv":"Ds'", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"Metal Destroy", "weight":8.81, "abbv":"MDs", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Metal Dimension", "weight":9.30, "abbv":"MDm", "wins":0, "losses":0, "draws":0, "id":12},
    {"name":"Bearing Drift", "weight":10.40, "abbv":"BDr", "wins":0, "losses":0, "draws":0, "id":13},
    {"name":"Metal Drift", "weight":12.10, "abbv":"MDr", "wins":0, "losses":0, "draws":0, "id":14},
    {"name":"Metal Bearing Drift", "weight":12.30, "abbv":"MBDr", "wins":0, "losses":0, "draws":0, "id":15},
    {"name":"High Eternal", "weight":7.60, "abbv":"HEt", "wins":0, "losses":0, "draws":0, "id":16},
    {"name":"High Hold'", "weight":8.40, "abbv":"HH'", "wins":0, "losses":0, "draws":0, "id":17},
    {"name":"Just'", "weight":8.0, "abbv":"Js'", "wins":0, "losses":0, "draws":0, "id":18},
    {"name":"Kick", "weight":9.46, "abbv":"Kc", "wins":0, "losses":0, "draws":0, "id":19},
    {"name":"High Massive", "weight":7.10, "abbv":"HM", "wins":0, "losses":0, "draws":0, "id":20},
    {"name":"Bearing Mobius", "weight":7.80, "abbv":"BMb", "wins":0, "losses":0, "draws":0, "id":21},
    {"name":"Moment", "weight":7.20, "abbv":"Mn", "wins":0, "losses":0, "draws":0, "id":22},
    {"name":"Moment'", "weight":7.4, "abbv":"Mn'", "wins":0, "losses":0, "draws":0, "id":23},
    {"name":"Never", "weight":7.60, "abbv":"Nv", "wins":0, "losses":0, "draws":0, "id":24},
    {"name":"Metal Never", "weight":9.69, "abbv":"MNv", "wins":0, "losses":0, "draws":0, "id":25},
    {"name":"Planet'", "weight":0, "abbv":"Pl'", "wins":0, "losses":0, "draws":0, "id":26},
    {"name":"Quattro", "weight":10.60, "abbv":"Qt", "wins":0, "losses":0, "draws":0, "id":27},
    {"name":"Quattro'", "weight":10.82, "abbv":"Qt'", "wins":0, "losses":0, "draws":0, "id":28},
    {"name":"Revolve'", "weight":5.98, "abbv":"R'", "wins":0, "losses":0, "draws":0, "id":29},
    {"name":"High Revolve", "weight":7.20, "abbv":"HR", "wins":0, "losses":0, "draws":0, "id":30},
    {"name":"Shot", "weight":42.42, "abbv":"", "wins":0, "losses":0, "draws":0, "id":31},
    {"name":"Metal Survive", "weight":7.80, "abbv":"MS", "wins":0, "losses":0, "draws":0, "id":32},
    {"name":"Sword'", "weight":9.36, "abbv":"Sw'", "wins":0, "losses":0, "draws":0, "id":33},
    {"name":"Metal Universe", "weight":11.10, "abbv":"MUn", "wins":0, "losses":0, "draws":0, "id":34},
    {"name":"Venture", "weight":7.80, "abbv":"Vn", "wins":0, "losses":0, "draws":0, "id":35},
    {"name":"Venture+V", "weight":13.40, "abbv":"Vn+V", "wins":0, "losses":0, "draws":0, "id":36},
    {"name":"Venture+VS", "weight":15.40, "abbv":"Vn+VS", "wins":0, "losses":0, "draws":0, "id":37},
    {"name":"Wave'", "weight":8.60, "abbv":"Wv'", "wins":0, "losses":0, "draws":0, "id":38},
    {"name":"High Wave'", "weight":9.79, "abbv":"HWv'", "wins":0, "losses":0, "draws":0, "id":39},
    {"name":"Wedge'", "weight":7.30, "abbv":"Wd'", "wins":0, "losses":0, "draws":0, "id":40},
    {"name":"Xceed'+Z", "weight":9.00, "abbv":"Xc'+Z", "wins":0, "losses":0, "draws":0, "id":41},
    {"name":"High Xtend'", "weight":9.40, "abbv":"HXt'", "wins":0, "losses":0, "draws":0, "id":42},
    {"name":"High Xtend+'", "weight":9.30, "abbv":"HXt+'", "wins":0, "losses":0, "draws":0, "id":43},
    {"name":"Metal Xtreme", "weight":7.40, "abbv":"MX", "wins":0, "losses":0, "draws":0, "id":44},
    {"name":"Xplosion", "weight":6.69, "abbv":"Xp", "wins":0, "losses":0, "draws":0, "id":45},
    {"name":"Xplosion'", "weight":0, "abbv":"Xp'", "wins":0, "losses":0, "draws":0, "id":46},
    {"name":"Yard'", "weight":7.40, "abbv":"Yd'", "wins":0, "losses":0, "draws":0, "id":47},
    {"name":"Zeal", "weight":6.67, "abbv":"Zl", "wins":0, "losses":0, "draws":0, "id":48},
    {"name":"Zone'+X", "weight":10.30, "abbv":"Zn'+X", "wins":0, "losses":0, "draws":0, "id":49},

    {"name":"Xtreme'", "weight":5.60, "abbv":"X'", "wins":0, "losses":0, "draws":0, "id":50},
    {"name":"Quick'", "weight":5.80, "abbv":"Qc'", "wins":0, "losses":0, "draws":0, "id":51}

];

var armors = [

    //Greatest Rapheal's weight is stored in it's core listing
    {"name":"0", "weight":13.89, "abbv":"0", "wins":0, "losses":0, "draws":0, "id":0},
    {"name":"1", "weight":13.09, "abbv":"1", "wins":0, "losses":0, "draws":0, "id":1},
    {"name":"2", "weight":13.47, "abbv":"2", "wins":0, "losses":0, "draws":0, "id":2},
    {"name":"3", "weight":13.22, "abbv":"3", "wins":0, "losses":0, "draws":0, "id":3},
    {"name":"4", "weight":13.96, "abbv":"4", "wins":0, "losses":0, "draws":0, "id":4},
    {"name":"6", "weight":13.31, "abbv":"6", "wins":0, "losses":0, "draws":0, "id":5},
    {"name":"7", "weight":13.41, "abbv":"7", "wins":0, "losses":0, "draws":0, "id":6},
    {"name":"8", "weight":13.00, "abbv":"8", "wins":0, "losses":0, "draws":0, "id":7},
    {"name":"9", "weight":13.90, "abbv":"9", "wins":0, "losses":0, "draws":0, "id":8},
    {"name":"10", "weight":13.25, "abbv":"10", "wins":0, "losses":0, "draws":0, "id":9},
    {"name":"L Gear", "weight":13.25, "abbv":"L", "wins":0, "losses":0, "draws":0, "id":10},
    {"name":"H Gear", "weight":13.25, "abbv":"H", "wins":0, "losses":0, "draws":0, "id":11},
    {"name":"Greatest Rapheal", "weight":0, "abbv":"", "wins":0, "losses":0, "draws":0, "id":12}

];