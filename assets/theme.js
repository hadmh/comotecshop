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

    //Get the button:
    var btn = $('#go-top');
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // Select all tabs
    $(".nav-tab a").click(function (e) {
        console.log('tab click');
        e.preventDefault();
        var tab_box = $(this).parent().parent().parent();
        var id = $(this).attr('href');

        // Remove active
        tab_box.find('.nav-tab a').removeClass('active');
        tab_box.find('.tab-content .tab-item').removeClass('active');

        // Add active
        $(this).addClass('active');
        tab_box.find('.tab-content ' + id).addClass('active');
    });
});

$(document).on('click', '.btn-addcart', function () {
    var ID = $(this).attr("product");
    var Quantity = $('.product-' + ID + '-quantity').val();

    $.ajax({
        type: 'POST',
        url: '/cart/add',
        data: {
            quantity: Quantity,
            id: ID
        },
        dataType: 'json',
        success: function (data) {
            window.location.href = "https://comotecshop.myshopify.com/cart";
        }
    });
});

function goBack() {
    window.history.back();
}