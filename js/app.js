window.onload=function(){
// hamburger menu

document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);


// coders con Javascript
var chicasLaboratoria=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Burga",
                  "Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme",
                  "Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez",
                 "Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia",
                 "Fiorella Cisneros","Geraldine Chauca","Yelitza Rivera","Stephanie Hiyagon",
                 "Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
                 "Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
                 "Leslie Avendaño", "Cindy Mendoza","Annia Flores","Betsi Loayza",
                 "Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor",
                 "Maia Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez",
                 "Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo",
                 "Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes",
                 "Cinthia Stark","Maria Grecia Cutipa","Ana Durand","Glisse Jorge",
                 "Neiza Nuñez","Sandra Solorzano"];

var  chicasLabo = document.getElementById("coders");
chicasLabo.innerHTML="";
  // se pone desde uno para la primera imagen
	for(var i=1 ;i<=54;i++){

    var creandoDiv =document.createElement('div');
    creandoDiv.classList.add("grid");

		var figure = document.createElement("figure");
		figure.classList.add("chicas");

		var creandoDivDos =document.createElement("div");
		creandoDivDos.classList.add("overlay");

		var img =document.createElement("img");
		img.classList.add("img-box");

		var figurita =document.createElement("figcaption");
		figurita.classList.add("text");
// se pone -1 por los arrays comienzan de cero
		var nombre = document.createTextNode(chicasLaboratoria[i-1]);
		img.setAttribute("src","img/students/"+ i+".png");

						figurita.appendChild(nombre)
						figure.appendChild(figurita);
						figure.appendChild(img);
  					figure.appendChild(creandoDivDos);
  					creandoDiv.appendChild(figure);

  					chicasLabo.appendChild(creandoDiv) ;
		}

  };
