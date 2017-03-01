  var persons = [ { nombre : "Arabela",
                    apellido : "Rojas", rol : "T.A",
                    cumpleanios : "23 de enero" },
                  { nombre : "Michelle",
                    apellido : "Seguil",
                    rol : "T.A",
                    cumpleanios : "25 de noviembre" },
                  { nombre : "Meche",
                    apellido : "Zubieta",
                    rol : "T.A",
                    cumpleanios : "02 de marzo" },
                  { nombre : "Papu",
                    apellido : "Rivariola",
                    rol : "Psicóloga",
                    cumpleanios : "10 de octubre" },
                  { nombre : "Gian",
                    apellido : "Corzo",
                    rol : "Profesor",
                    cumpleanios : "23 de enero" } ];

    var resultado = "";

    persons.forEach(function(elemento){
     resultado += "<div><ul> <li> Nombre: "+elemento.nombre+ "</li>"+
      "<li> Apellido : "+elemento.apellido+"</li> "+
      "<li> Rol"+elemento.rol+"</li>"+
      "<li> cumpleanios"+elemento.cumpleanios+"</li>  </ul></div>";
   }
   );
   var mostrar = document.getElementById("mostrarResultado");
   mostrar.innerHTML = resultado;
