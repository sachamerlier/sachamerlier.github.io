$(document).ready(function()
{
    $(function() 
    {
        var menuIsIn = false;
        $(".BoutonMenu").click(function () {
            if(!menuIsIn)
            {
                $(".menuContainer").css({ transform: "translateY(0%)" });
                menuIsIn = true;
            }
            else
            {
                $(".menuContainer").css({ transform: "translateY(100%)" });
                menuIsIn = false;
            }
        });
        $(".lien1").hover(
          function () {
            $(".menuContainer").addClass("firstLienColor");
          },
          function () {
            // on mouseout, reset the background colour
            $(".menuContainer").removeClass("firstLienColor");
          }
        );
        $(".lien2").hover(
          function () {
            $(".menuContainer").addClass("secondLienColor");
          },
          function () {
            // on mouseout, reset the background colour
            $(".menuContainer").removeClass("secondLienColor");
          }
        );
        $(".lien3").hover(
          function () {
            $(".menuContainer").addClass("thirdLienColor");
          },
          function () {
            // on mouseout, reset the background colour
            $(".menuContainer").removeClass("thirdLienColor");
          }
        );
        
    })

})