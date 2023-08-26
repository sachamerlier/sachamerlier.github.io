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

    })

})