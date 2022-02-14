// ***************************************  BASES *************************************** \\ 

// le Jquery va retourner un array. parce qu'on peut mettre pleins de méthodes derrière
// du coup forcémenent quand on veut grab un élément dans le tas, au final, on le fait
// comme quand on toppe un truc dans un array ,avec son index. (jusque là bon ça va)
// quand on prends un index particulier dans l'array que nous retourne jquery,
// par contre, nous ne pourrons pas utiliser de methodes

// exemple : const logo = $("#logo")
// console.log(logo)

// si on veut topper une id :
// <div id="lead-banner">
// $("#lead-banner")
// si on veut chopper tous les p dans lead-banner, simplement :
// const pis = $("#lead-banner p")
// console.log(pis)

// on peut du coup faire des trucs comme ça :
// .css est ici une methode qui applique, attention du css
// $("h3").css({ border: "3px solid blue" })
// $(".wrapper").css({ border: "2px solid red" })
// $("#clients").css({ border: "5px solid yellowgreen" })


// ********************************* ******  FILTERS *************************************** \\ 

// yen a vraiment beaucoup, et tous les selecteurs sont rangés ici :
// https://api.jquery.com/category/selectors/ (et yen a beaucoup)

// first and last
//$("header nav li:first").css({ border: "2px solid grey" })
// $("header nav li:last").css({ border: "2px solid grey" })

// first and last child
// $("#contact ul:first-child").css({ border: "2px solid red" })
// $("#contact ul:last-child").css({ border: "2px solid red" })

// even
// $("header nav li:even").css({ border: "2px solid yellow" })
// $("header nav li:odd").css({ border: "2px solid green" })

// NOT
// selectionne par exemple, toutes les sections en HTML sauf celui
// qui a l'ID de CONTACT (cool ? cool)
//$("section:not('#contact')").css({ border: "2px solid purple" })

// less than // greater than (s'écris lt(i), gt(i))
// $("#social-nav li:lt(3)").css({ border: "2px solid blue" })
// $("#social-nav li:gt(2)").css({ border: "2px solid green" })

// attributes filter, la il filtre toutes les div qui ont un attribut de "class" ça c'est cool non ?
// ça peut etre l'id, les requiered, etc etc
// $("div[class]").css({ border: "2px solid pink" })

// on peut même aller plus loin avec les attributs avec une valeurs spécifique
//$("img[alt=quote]").css({ border: "2px solid red" })


// ***************************************  METHODS *************************************** \\ 

// les méthods spécifique pour manipulation du dom

// .next() va aller prendre l'élément APRES l'élément selectionné
// $("#contact-methods").next().css({ border: "3px solid red" })

// .prev() va aller prendre l'élément AVANT l'élément selectionné
//$("#contact-methods").prev().css({ border: "3px solid blue" })

// .parent() va selectionner un élement et prendre son parent
// .parentS va séléction tout les parents de l'element
// $(".banner-title").parent().css({ border: "3px solid blue" })
// $(".banner-title").parents().css({ border: "3px solid yellow" })

// .children() sans surprise va chopper les éléments enfants
// $("#social-nav").children().css({ border: "3px solid yellow" })

// .find() va chercher un élément spécifique dans un autre element
// $("#contact").find(".facebook").css({ border: "3px solid yellow" })

// .closest()
// va chopper le parent le plus proche (en remontant l'arbre du dom) et prendre le premier élément qu'il trouve
// $("#social-nav").closest(".wrapper").css({ border: "3px solid yellow" })


// ***************************************  CHAINING *************************************** \\ 

// on peut enchainer plusieurs methods les unes après les autres dans jquerry, bon on le fait déjà super
// souvent dans les éléments suivants =)

// $("#contact-methods")
//     .css({ border: "2px solid red" })
//     .next()
//     .css({ border: "2px solid grey" })
//     .closest("section")
//     .css({ border: "2px solid blue" })


// ********************* RAJOUTER DU CONTENU DANS LE DOM AVEC JQUERRY ******************* \\ 

// let tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> Gros Tweet en let </div>"

//$("#tweets div").append(tweet)
//$("#tweets div").prepend(tweet)
//$("#tweets div p").before(tweet)
// $("#tweets div p").after(tweet)
//$("#tweets div p").html(tweet)
//$("#tweets div p").text(tweet) // bon là ça n'a aucun sens parce qu'il y a de l'html dans la variable tweet, mais c'est faisable

// .append() rajoute du contenu en dessous de l'element
// .prepend()rajoute du contenu au dessus de l'element
// .before() rajoute du contenu avant l'élément
// .after() rajoute du contenu après l'élément
// .html() change le contenue de l'html
// .text() change le texte de l'element


// ********************* EMBALLER ET DEBALLER ELEMENTS ******************* \\
// ********************* WRAP && UNWRAP ******************* \\ 

// .wrap() emballe tous les éléments qui matchent dans le query et les emballe dans le même tag
// $("section").wrap("<div>") // la on prends tous les elements section et on les entour d'une div

// .unwrap() déballe tous les élements qui matchent le query 
//$("section").unwrap() // même pas besoin de présiser ce avec quoi on veut unwrap, 
// il va regarder son/ses parents immédiats et enlever tous les tags
// peu importe ce que c'est

// .wrappAll() emballe tous les elements cominés avec un seul element
//$("section").wrapAll("<div>") // donc ici avec le wrapall il va topper toutes les sections div et en encapsuler dans une div (ou ce qu'on veut)


// const wrapper = "<div class='wrapper'>"
// const button = $(".button")
// let wrapped = true
// 
// button[0].onclick = function () {
//     if (wrapped) {
//         $("section").unwrap()
//         wrapped = false
//         button.text("Wrap")
//     } else {
//         $("section").wrapAll(wrapper)
//         wrapped = true
//         button.text("UnWrap")
//     }
// }

// ********************* ENLEVER DU CONTENU ******************* \\

// .empty() enleve le innerHTML d'un élement
// .removes() enlève l'élément complètement

// const wrapper = "<div class='wrapper'>"
// const button = $(".button")
// let wrapped = true

//$(".button").empty() // choppe donc class=button et enlève l'innerHTM (Ici en l'occurence c'est que du texte)
// $(".button").remove() // vire tout ce qui a une classe button

// $("#lead-banner").remove() $("#lead-banner").empty()

// $("#contact img[alt=map]").remove()


// ********************* CHANGER LES ATTRIBUTS ******************* \\

// .removeAttr() enlève un attribut complètement
// .attr() peut lire ou mettre un attribut

// $("#contact img").removeAttr("alt")
// $("#contact img").attr("class", "enabled") // on rajoute un attribut en premier arguement et le nom de cet attribut en second argument
// console.log($("#contact img").attr("alt")) // peut simplement lire l'attribut si on ne mets qu'un argument


// ********************* CSS en JQUERY ******************* \\

// on peut donc avec la method css checker les differents attributs css des éléments en les passant simplement en arguement.
// console.log($("#social-nav").css("position"))
// console.log($("#social-nav").css("top"))

// $("#social-nav").css("top", "-200px") // pour donc changer un attribut et sa valeur on le passe en 2nd argument
// $("#social-nav").css("top", "-200px").css("left", "100px").css("etc", "etc", "etc")
// bon c'est long et degeulassse de mettre quarante lignes de css comme ça les unes après les autres, alors le mieux c'est de mettre tout ça dans un objet

// $("#social-nav").css({
//     "top": "-400px",
//     "left": "100px",
//     "opacity": "0.5",
//     "border-top": "4px solid red"
// })

// ********************* CLASSES ******************* \\ 

// .removeClass() enlève une classe en particulier à l'élément qu'on appelle
// .addClass() rajoute une classe particulière à l'élémént qu'on appelle
// .toggleClass() fait un bouton on off sur l'élément qu'on appelle

// $("header .wrapper").removeClass("wrapper")
// $("header > div").addClass("wrapper")

// const button = $("#lead-banner a")
// 
// button[0].onclick = function () {
//     $("#points-of-sale").toggleClass("open")
//     return false
// }


// ********************* EVENTS BINDING AND UNBINDING ******************* \\ 

// .on() - lie un evement à l'élémént
// .off() - delie un évement à l'élément

// const lists = $("#points-of-sale li")
// 
// lists.on("click", function (e) { // choppe tous les éléments lists et ajoute une fonction .on(), la en l'occurence click et lance la fonction
// 
//     // on peut chopper l'élémént précis avec le this dans la fonction (avec e probablement aussi ?)
//     $(this).css({ "background": "red" })
//      genre 
//      $(e.target).css({ "background": "pink" })
// 
//     // puis on l'éteinds en mode, on ne veut plus que l'évement soit clickable.
//     lists.off("click")
// 
// })


// ********************* EVENTS HELPERS ******************* \\ 

// jusque là on faisait comme ça : 
// element.on("click", function() {}) => magie
// on peut aussi l'écrire element.click(function() {}) => magie

// $("#lead-banner").click(function () {
//     alert("arrggghhh")
// })
// tous les events sont là, c'est les mêmes, a peu de choses près qu'on utlise en js vanilla, mais en methodes
// https://www.w3schools.com/jquery/jquery_ref_events.asp

// $("#lead-banner").dblclick(function () {
//     alert("arrggghhh")
//     $("#lead-banner").off() // puis on peut toujours unbind
// })


// ********************* DOCUMENT READY vs WINDOW LOAD ******************* \\ 

// fonctions qu'on utilise quand on mets les scripts de JS en haut du HTML. 

// le document c'est pour quand tout le html est chargé, les éléments pas les images par exemple, juste le code

// $(document).on("ready", function () {
//     // quand le document est pret => fait ça.
//     // do stuff.
// 
// })

// on peut du coup aussi l'écrire comme ça : 
// $(document).ready(function () {
//     // do stuff
// })
// 
// // on peut même faire encore plus court ! 
// $(function () {
//     // do stuff
// })

// le window on load c'est quand tout à fini de charger
// pour recalculer par exemple la taille des images une fois qu'elles sont affichées.

//$(window).on("load", function () {
//    // do stuff
//})
//
//// même chose que ce truc là
//$(window).load(function () {
//    // do stuff
//})


// ********************* EVENT OBJETS (le e en gros) ******************* \\ 

// $(document).ready(function () {
// 
//     $("*").on("click", function (e) {
//         console.log("TARGET", e.target)
//         console.log("EVENT TYPE ", e.type)
//         console.log("X COORDONNATE", e.pageX)
//         console.log("Y COORDONNATE", e.pageY)
//         e.stopPropagation()
//     })
// 
// })


// ********************* ANIMATION ******************* \\ 

// $(function () {
// 
//     $("section > h2").on("click", function () {
// 
//         // cette version va, au click, changer le css
//         //$(this).css({ "widht": "500px", "height": "100px" })
//         // cette version va, au click, animer le css pour devenir comme le css l'indique
//         // alors on peut généralement animer des trucs avec des valeurs numériques
//         // l'animation, de base en jquery va prendre 400ms on peut la changer en second arguement
//         // le troisième paramètres est le type d'aniamtion, "swing" est le défault, ou "linear" pas par défautl, doit yen avoir d'autres, à checker
//         // le quatrième argument peut être une callback function
//         $(this)
//             .animate({ "widht": "500px", "height": "100px" }
//                 , 1000
//                 , "linear"
//                 , function () {
//                     alert("animation terminée")
//                 })
// 
//     })
// })

// ********************* ANIMATION FADE IN FADE OUT ******************* \\ 

// $(function () {
// 
//     $("section > h2").click(function () {
// 
//         // une fois que c'est fadeOut par contre, ça enlève l'élément
//         // on peut enchainer avec un fadeIn()
//         // on peut passer des temps en milisecondes pour voir le temps que prends l'animation
//         // $(this).fadeOut(2000).fadeIn(500)
// 
//         // on peut faire ça aussi : 
//         $(this)
//             .fadeTo(1000, 0.5)
//             .fadeTo(1000, 0.8)
//             .fadeTo(1000, 0.5)
//             .fadeTo(1000, 0.8)
//             .fadeTo(1000, 0.5)
//             .fadeTo(1000, 0.8)
//             .fadeTo(1000, 0.5)
//             .fadeTo(1000, 0.8)
//             .fadeTo(1000, 0.5)
//             .fadeTo(1000, 0.8)
// 
//     })
// 
// })


// ********************* HIDE AND SHOW ELEMENTS ******************* \\ 

// $(function () {
// 
//     $("section > h2").click(function () {
// 
//         // .hide() cache le truc, comme si le display=none
//         // $(this).hide()
//         // on peut lui passer un argument, du coup, il rapetisse, il bouge et il fadeout avec hide (ouais ça fait beaucoup)
//         // .show() est la fonction inverse de hide(), on peut également lui passer un arguement
//         // $(this)
//         //     .hide(1000)
//         //     .show(1000)
//         // .toggle() n'est à pas confondre avec la fonction toggle class qu'on a vu plus haut. Il va prendre l'état de l'objet, et lui appliquer soit
//         // hide soit show en fonction de son état initial
//         $(this).toggle(1000)
//     })
// 
// })




// ok alors la on a fait un truc un peu plus long : on s'est crée
// des petits boutons dans le html puis en les appellant on a mis quel element on voulait slideup ou slidedown
// avec la methode .slideUp() ou .slideDown()
// en argument on peut passer le vitesse de l'animation
// en second arguement on peut passer une fonction

// $(document).ready(function () {// 

//     // $(".slide-button-up").click(function () {
//     //     $("#lead-banner").slideUp(100, function () {
//     //         console.log("on peut passer une fonction une fois que l'animation est terminée")
//     //     })
//     // })
//     // 
//     // $(".slide-button-down").click(function () {
//     //     $("#lead-banner").slideDown(4000)
//     // })
//     // // 

//     // toggle va faire l'animation dépéndant de l'état initial de l'élément. 
//     // toujours en fonction de slide hein =) (enfin là, c'est écris dedans)
//     $(".slide-button-up").click(function () {
//         $("#lead-banner").slideToggle(1000)
//     })
// })


// ********************* FADING ANIMATION EXAMPLE ******************* \\ 

// animation de fade/in/fade/out

// $(document).ready(function () {
// 
//     const allQuotes = $("blockquote")
//     let currentQuote = 0;
// 
//     function changeQuote() {
// 
//         $(allQuotes[currentQuote]).fadeOut(400, function () {
// 
//             if (currentQuote === allQuotes.length - 1) {
//                 currentQuote = 0;
//             }
//             else {
//                 currentQuote++;
//             }
//             $(allQuotes[currentQuote]).fadeIn(400)
//         })
// 
//     }
// 
//     setInterval(changeQuote, 1500)
// 
// })
// 


// *********************  CLICK TO EXPAND ANIMATION ******************* \\ 

// avec slideToggle
// on choppe donc une liste avec le jquery
// on va topper le "p" à l'interieure
// et on glisse un slideToggle (fastoche)

// $(document).ready(function () {
// 
//     let items = $("#points-of-sale li")
// 
//     items.click(function () {
//         $(this)
//             .find("p")
//             .slideToggle(300)
//     })
// 
// })


// *********************  PLUGINS JQUERRY ******************* \\ 

// ça c'est un truc qu'on s'est mis en plus dans les script sur le HTML
// pas se gourer dans l'ordre : 

// <script src="/script/jquery.js"></script>
// <script src="/script/responsiveSlides.js"></script>
// <script src="/script/script.js"></script>

// ce script est disponible ici : 
// https://github.com/viljamis/ResponsiveSlides.js/
// 
// ya la doc de ce slide juste ici : 
// http://responsiveslides.com/

$(document).ready(function () {

    $(".rslides").responsiveSlides();

})