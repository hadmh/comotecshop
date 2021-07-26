// JavaScript Document

$(document).ready(function () {
    // Tab
    $(function () {
        $(".js-tab-link")
            .click(function () {
                $(".js-tab-box").hide().filter(this.hash).fadeIn();
                $(".js-tab-link, .paging-btn, .item-box-link, .side-item").removeClass("selected");
                $(this).addClass("selected");
                return false;
            })
            .filter(":eq(0)")
            .click();
    });

    //ページネーション
    $(".paging-btn").on("click", function () {
        $(".paging-btn").removeClass("selected");
        $(this).toggleClass("selected");
    });

    //商品
    $(".item-select01, .select-item01").on("click", function () {
        $(".item-select01, .select-item01").toggleClass("selected");
    });

    $(".item-select02, .select-item02").on("click", function () {
        $(".item-select02, .select-item02").toggleClass("selected");
    });

    $(".item-select03, .select-item03").on("click", function () {
        $(".item-select03, .select-item03").toggleClass("selected");
    });

    $(".item-select04, .select-item04").on("click", function () {
        $(".item-select04, .select-item04").toggleClass("selected");
        //$(".item-select04, .select-item04").removeClass("selected");
    });

    // $(".item-select").on("click", function () {
    //     $(".item-select").removeClass("selected");
    //     $(this).toggleClass("selected");
    // });

    //購入ボタン
    $(".purchase-btn").on("click", function () {
        $(this).toggleClass("selected");
    });

    //削除ボタン
    $(".cart-select").on("click", function () {
        $(".cart-select").removeClass("selected");
        $(this).toggleClass("selected");
    });

    //ページネーション
    $(".page-numbers").on("click", function () {
        $(".page-numbers").removeClass("selected");
        $(this).toggleClass("selected");
    });

    //フッター地上デジタルボタン
    $(".footer-btn").on("click", function () {
        $(".footer-btn").removeClass("selected");
        $(this).toggleClass("selected");
    });
});
