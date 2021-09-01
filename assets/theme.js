function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }
    return tempArray;
}
function loadstyleTV() {
    $('.list-prooduct').each(function () {
        var pro_list = [];
        $(this).find('.product-item').each(function () {
            pro_list.push($(this).html());
        });
        if (pro_list.length > 0) {
            var pro_group = chunkArray(pro_list, 4);
            var html = '';
            for (var i = 0; i < pro_group.length; i++) {
                var active = '';
                if (i == 0) active = 'active';
                html = html + "<div class='group-pro " + active + "'>";
                for (var j = 0; j < pro_group[i].length; j++) {
                    html = html + '<div class="product-item row">' + pro_group[i][j] + "</div>";
                }
                html = html + "</div>";
            }
            $(this).html(html);
        }
    });


    var cart_list = [];
    $('.cart .cart__row').each(function () {
        cart_list.push($(this).html());
    });
    if (cart_list.length > 0) {
        var pro_group = chunkArray(cart_list, 3);
        var html = '';
        var pagi = '<div class="local-navigation"><a class="page-numbers prev" href="#"><span>前へ</span></a>';
        for (var i = 0; i < pro_group.length; i++) {
            var active = '';
            if (i == 0) active = 'active';
            html = html + "<div class='group_cart__row " + active + "' data-number='" + (i + 1) + "'>";
            for (var j = 0; j < pro_group[i].length; j++) {
                html = html + '<div class="cart__row">' + pro_group[i][j] + "</div>";
            }
            html = html + "</div>";

            pagi = pagi + '<a class="page-numbers ' + active + '" href="#" data-number="' + (i + 1) + '">' + (i + 1) + '</a>';
        }

        pagi = pagi + '<a class="page-numbers next" href="#"><span>次へ</span></a></div>';

        $('.cart .cart-line-items').html(html);
        $('.cart .cart-row').prepend(pagi);



        $('a.page-numbers:not(.next, .prev)').click(function (e) {
            e.preventDefault();
            var current = $(this).data('number');
            $('.group_cart__row, a.page-numbers:not(.next, .prev)').removeClass('active');
            $('.group_cart__row[data-number=' + current + ']').addClass('active');
            $(this).addClass('active');
        });

        $('a.page-numbers.prev').click(function (e) {
            e.preventDefault();
            var current = $('a.page-numbers.active').data('number');
            if (current > 1) {
                $('.group_cart__row, a.page-numbers').removeClass('active');
                $('.group_cart__row[data-number=' + (current - 1) + '], a.page-numbers[data-number=' + (current - 1) + ']').addClass('active');
            }
        });

        $('a.page-numbers.next').click(function (e) {
            e.preventDefault();
            var current = $('a.page-numbers.active').data('number');
            if (current < $(this).prev().data('number')) {
                $('.group_cart__row, a.page-numbers').removeClass('active');
                $('.group_cart__row[data-number=' + (current + 1) + '], a.page-numbers[data-number=' + (current + 1) + ']').addClass('active');
            }
        });
    }

}

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
    $(".nav-tab a:not(.paging-btn)").click(function (e) {
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

    $('.paging-btn.prev').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $('.paging-btn.next').removeClass('active');

        var _this = $('.tab-item.active .group-pro.active');
        if (_this.prev().length > 0) {
            _this.removeClass('active');
            _this.prev().addClass('active');
        }
    });

    $('.paging-btn.next').click(function (e) {
        e.preventDefault();

        $(this).addClass('active');
        $('.paging-btn.prev').removeClass('active');

        var _this = $('.tab-item.active .group-pro.active');
        if (_this.next().length > 0) {
            _this.removeClass('active');
            _this.next().addClass('active');
        }
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

    $('.address-edit-toggle').click(function () {
        var id = $(this).attr('aria-owns');
        $('#' + id).toggleClass('hide');
    });

    $('.device-tv .product-item').click(function () {
        console.log($(this).find('.btn-readmore').attr('href'));
        window.location.href = window.location.origin + $(this).find('.btn-readmore').attr('href');
    });

    $('.btn-addcart').click(function () {
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
});

function goBack() {
    window.history.back();
}