

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function mobile_link() {
    document.getElementById("mySidebar").style.width = "0";
}


$(document).ready(function () {

    $('.topScroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

    $('.activee').click(function () {
        $("html, body").animate({ scrollTop: "270px" }, 600);
        return false;
    });

    $('.active_2').click(function () {
        $("html, body").animate({ scrollTop: "2350px" }, 600);
        return false;
    });

    $('.active_3').click(function () {
        $("html, body").animate({ scrollTop: "3100px" }, 600);
        return false;
    });



    $("#openBtn").click(function () {
        $("#zeytin-img").animate({ marginTop: "-10px" }, 1000)
            .animate({ marginTop: "0px" }, 1000)

        $(".mini-bar-img").animate({ width: "0px" })
            .animate({ width: "15%" })
            .animate({ marginLeft: "-20px" })
            .animate({ marginLeft: "20px" })
            .animate({ marginLeft: "0px" })

        $(".mini-bar-img").animate({ width: "0px" })
            .animate({ width: "15%" })
            .animate({ marginLeft: "-20px" })
            .animate({ marginLeft: "20px" })
            .animate({ marginLeft: "0px" })
    });
})



