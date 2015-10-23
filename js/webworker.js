  var w;
  function startWorker(valor) {
      //alert("el valor es:"+valor);
      if(typeof(Worker) !== "undefined") { // check whether the user's browser supports Web Workers
          if(typeof(w) == "undefined") {   // checks if the worker already exists
            w = new Worker("js/convertidor.js"); // creates a new web worker and runs
            convertir(valor);
          }
          w.onmessage = function(event) {
              document.getElementById("result").innerHTML = event.data;
          };
      } else {
          document.getElementById("result").innerHTML = "Lo sentimos, su explorador no acepta Web Workers";
      }
  }
