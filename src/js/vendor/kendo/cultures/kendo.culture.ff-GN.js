/** 
 * Kendo UI v2020.1.219 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2020 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["ff-GN"] = {
        name: "ff-GN",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Guinean Franc",
                abbr: "GNF",
                pattern: ["-n $","n $"],
                decimals: 0,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "FG"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["dewo","aaɓnde","mawbaare","njeslaare","naasaande","mawnde","hoore-biir"],
                    namesAbbr: ["dew","aaɓ","maw","nje","naa","mwd","hbi"],
                    namesShort: ["dew","aaɓ","maw","nje","naa","mwd","hbi"]
                },
                months: {
                    names: ["siilo","colte","mbooy","seeɗto","duujal","korse","morso","juko","siilto","yarkomaa","jolal","bowte"],
                    namesAbbr: ["sii","col","mbo","see","duu","kor","mor","juk","slt","yar","jol","bow"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    g: "d/M/yyyy HH:mm",
                    G: "d/M/yyyy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));