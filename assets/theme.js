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


    $('#nav-tab').change(function () {
        var id = $(this).val();
        $('.tab-content').find('.tab-item').removeClass('active');
        $('.tab-content').find('#' + id).addClass('active');
    })

    $('.navbar-toggler').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('body').removeClass('menu-open').css('top', '0');;
            $('.navbar-box').removeClass('open');
            $('html,body').animate(
                { scrollTop: $('body').text() },
                10
            );
        } else {
            $(this).addClass('open')
            $('body').addClass('menu-open');
            $('.navbar-box').addClass('open').css('top', '-' + scrollTop + 'px');
        }
    });

    $('.address-new-close').click(function () {
        $('#AddressNewForm').hide();
    });

    $('.address-new-open').click(function () {
        $('#AddressNewForm').show();
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
            window.location.href = window.location.origin + "/cart";
        }
    });
});

$(document).on('click', '.device-tv .product-item', function () {
    window.location.href = window.location.origin + $(this).find('.btn-readmore').attr('href');
});


function goBack() {
    window.history.back();
}