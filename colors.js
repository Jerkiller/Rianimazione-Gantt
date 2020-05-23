var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  
    return function( obj, callback ){
      if( !obj || !obj.nodeType === 1 ) return; // validation
  
      if( MutationObserver ){
        // define a new observer
        var obs = new MutationObserver(function(mutations, observer){
            callback(mutations);
        })
        // have the observer observe foo for changes in children
        obs.observe( obj, { childList:true, subtree:true });
      }
      
      else if( window.addEventListener ){
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
      }
    }
  })();





  
  function changeColors(){
    let colors = [
        {
            label: "Infermiere",
            old: "#2a56c6", // Blue
            oldText: "#5e97f6",
            oldHover: "#204195",
            new: "#2a56c7" // Blue
        },
        {
            label: "OSS",
            old: "#a52714", // Red
            oldText: "#db4437",
            oldHover: "#7c1d0f",
            new: "#fce700" // Yellow canary
        },
        {
            label: "Infermiere, Tecnico Radiologo, OSS",
            old: "#6a1b9a", // Violet
            oldText: "#ab47bc",
            oldHover: "#501474",
            new: "#ff4dba" //pink
        },
        {
            label: "Infermiere, OSS",
            old: "#ee8100", // Orange
            oldText: "#f2a600",
            oldHover: "#b36100",
            new: "#0b8045" // Green
        },
        {
            label: "Infermiere, Medico",
            old: "#00838f", // Aqua
            oldText: "#00acc1",
            oldHover: "#00626b",
            new: "#ff9d00" //Orange
        },
        {
            label: "Infermiere, Medico, OSS",
            old: "#0b8043", // Green
            oldText: "#0f9d58",
            oldHover: "#086032",
            new: "#222222" // Black
        },
    ]
    for (const color of colors) {
        let oldElements = document.querySelectorAll(`[fill="${color.old}"]`);
        let oldTextElements = document.querySelectorAll(`[fill="${color.oldText}"]`);
        let oldHoverElements = document.querySelectorAll(`[fill="${color.oldHover}"]`);

        for (const elem of [...oldElements,...oldTextElements]) {
            elem.setAttribute("fill", color.new);
        }
        for (const elem of oldHoverElements) {
            elem.setAttribute("fill", color.new);
        }
    }
    
}


