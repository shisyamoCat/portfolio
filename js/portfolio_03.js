$(window).ready(function () {
    // 付箋部がクリックされた時の処理
    $(".sticky").click(function () {

        // 全てのページを非表示にする
        $(".page").each(function () {
            $(this).css({
                "display": "none"
            });
        });

        // 全ての付箋を不透明にする
        $(".sticky").css({
            "opacity": 1
        });

        // クリックされた付箋のidを取得
        let name = $(this).attr("id");

        // 付箋と同期したページを表示状態に
        // 当該付箋より上の付箋を透明にする
        if (name == "sticky-1") {
            $(".p1").css({
                "display": "block"
            });
        }
        if (name == "sticky-2") {
            $(".p2").css({
                "display": "block"
            });
            $("#sticky-1").css({
                "opacity": 0
            });
        }
        if (name == "sticky-3") {
            $(".p3").css({
                "display": "block"
            });
            $("#sticky-1, #sticky-2").css({
                "opacity": 0
            });
        }
        if (name == "sticky-4") {
            $(".p4").css({
                "display": "block"
            });
            $("#sticky-1, #sticky-2, #sticky-3").css({
                "opacity": 0
            });
        }
        if (name == "sticky-5") {
            $(".p5").css({
                "display": "block"
            });
            $("#sticky-1, #sticky-2, #sticky-3, #sticky-4").css({
                "opacity": 0
            });
        }
        if (name == "sticky-6") {
            $(".p6").css({
                "display": "block"
            });
            $("#sticky-1, #sticky-2, #sticky-3, #sticky-4, #sticky-5").css({
                "opacity": 0
            });
        }
        if (name == "sticky-7") {
            $(".p7").css({
                "display": "block"
            });
            $("#sticky-1, #sticky-2, #sticky-3, #sticky-4, #sticky-5, #sticky-6").css({
                "opacity": 0
            });
        }

        // 全ての付箋のz-indexをノート(z-index:2)より低くする
        $(".sticky").css({
            "z-index": 1
        });

        // クリックされた付箋だけz-indexをノート(z-index:2)より高くする
        $(this).css({
            "z-index": 3
        });
    });
});