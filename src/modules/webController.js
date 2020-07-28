//object to insert default functionallitys to every website

export class webController{

    constructor (){

    }

    menu() {
        //containts the whole menu as a string
        const menubar = '<div id="sidebar"> \
                        <a id="closeBtn" class="motion" href="#">X</a> \
                        <a href="index.html">Home</a>\
                        <a href="projects.html">Projects</a>\
                        <a href="benny.html">Benny</a>\
                    </div> \
                        <div id="menulist" class="motion">\
                            <div class="menuIcon">\
                                <div class="bar1"></div>\
                                <div class="bar2"></div>\
                                <div class="bar3"></div>\
                            </div>\
                        </div>\
                    <div id="greyWall"></div>';
        
        //inserts the menu as html into the website
        document.querySelector("#menu").innerHTML = menubar;
        
        //selects all necessary elements from the website and adds the visibility function for the sidebar
        var btns = document.querySelectorAll('.motion');
        let sidebar = document.getElementById("sidebar");
        let greyWall = document.getElementById("greyWall");

        for(let i = 0, l = btns.length; i < l; i++ ){
            btns[i].addEventListener("click", function(){
                
                //change the visibility from the sidebar
                if(sidebar.style.width == "200px"){
                    sidebar.style.width = "";    
                    greyWall.style.opacity = "0";
                    greyWall.style.visibility = "hidden";
                    
                } else{
                    sidebar.style.width = "200px";    
                    greyWall.style.opacity = "0.8";
                    greyWall.style.visibility = "visible";
                }
            });    
        }

        //if the greywall is clicked, the menubar will closed
        greyWall.addEventListener('click', function(){
            sidebar.style.width = "";    
            greyWall.style.opacity = "0";
            greyWall.style.visibility = "hidden";
        })
        
    };
}