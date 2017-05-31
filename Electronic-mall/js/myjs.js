/**
 * Created by Administrator on 2017/3/11/011.
 */
/*隐藏显示模块*/
$(function () {
    //导航条左侧
    $('.nav_bar_left').mouseover(function () {
        $('.wrap').addClass('l_active');
        $('.locattion_list').css('display','block')
    }).mouseleave(function () {
        $('.wrap').removeClass('l_active');
        $('.locattion_list').css('display','none')
    });
    //导航条右侧
    $('.nav_bar_right>li').mouseover(function () {
        $(this).children('a').addClass('r_active');
        $(this).children('div').css('display','block');
        $(this).find('i').removeClass('t_icon').addClass('act_icon')
    }).mouseleave(function () {
        $(this).children('a').removeClass('r_active');
        $(this).children('div').css('display','none');
        $(this).find('i').removeClass('act_icon').addClass('t_icon')
    });
    //购物车
    $('.cart').mouseover(function () {
        $('.cart_w').addClass('cart_active');
        $('.cart_a').css('display','block');
    }).mouseleave(function () {
        $('.cart_w').removeClass('cart_active');
        $('.cart_a').css('display','none');
    });
    //.list_icon_a
  /*  $('.p_list_detail_l_title').mouseover(function () {
        $(this).css('backgroundColor','red')
    })

    /!*hover(function () {
      alert(1)
    })/!*.mouseover(function () {

        $(this).find('i').removeClass('list_icon').addClass('list_icon_a');
    }.mouseleave(function () {
        $(this).find('i').removeClass('list_icon_a').addClass('list_icon');
    })*!/
    )*!/*/
    /*左侧导航栏*/
        $('.p_electric').mouseover(function () {
            var i = $(this).index();
            $('.product_list_detail>div').eq(i).css('display','block').siblings().css('display','none')
        });
        $('.product_list').mouseleave(function () {
            $('.product_list_detail>div').css('display','none')
        });
    /*促销tabs*/

    $('.product_slider_m_box div').mouseover(function () {
        var i=$(this).index();
        $('.product_slider_m_content div').eq(i).addClass('tab_active').siblings().removeClass('tab_active');
        $('.product_slider_m_box span').stop(false,true).animate({'left':46*i+'px'},300)
    });

    //*slider_tabs*/
    /*$('.toup').mousemove(function () {
        $('.product_slider_b_list').delay('slow').animate({height:0},'slow').css('display','none');
        $('.slider_tabs').css('display','block');
        var i = $(this).index();
        $('.slider_tabs_title').animate({top:0});
        $('.slider_tabs_title>ul').children().eq(i).addClass('has_br_active');
        $('.slider_tabs_content').animate({top:'24px'});
    });
    $('.slider_tabs_title_item').mousemove(function () {
        var i = $(this).index();
        $('.slider_tabs_title_item').eq(i).addClass('has_br_active').siblings().removeClass('has_br_active');
        $('.slider_tabs_content_item').eq(i).addClass('tabs_content_active').siblings().removeClass('tabs_content_active');
        $('.slider_tabs_content').animate({top:'22px',delay:500});
    });
    $('.slider_tabs_content span').click(function () {
        $('.product_slider_b_list').stop(false,true).animate({'height':'210px'}).css('display','block');
        /!*!/!*$('.slider_tabs').fadeOut();*!/
        $('.slider_tabs').css('display','none');
    });

    $('.item_title ul li').mouseover(function () {
        $(this).addClass('li_active').siblings().removeClass('li_active');
        var i= $(this).index();
        $('.slider_tabs_content_item .item_conten').eq(i).addClass('on').siblings().removeClass('on')
    });*/
    /*京东秒杀*/
    $('.seckilling_list').mouseover(function () {
        $('.seckilling_list>span').css('display','block')
    }).mouseleave(function () {
        $('.seckilling_list>span').css('display','none')
    });
    $('.sk_list_item').mouseover(function () {
        $(this).find('img').stop().animate({'margin-top':'-5px'})
    }).mouseleave(function () {
        $(this).find('img').stop().animate({'margin-top':'0'})
    });
    $('.seckilling_list .prev').click(function () {
        var liwidth =$('.sk_list_items').width();
        var len = $('.sk_list_items').length;
        var index  = 0;
        index --;
        if(index=-1){
            index = 0
        }
        $('.seckilling_list .sk_list_items').animate({'left':-liwidth*index},2000)
    });
    $('.seckilling_list .next').click(function () {
        var liwidth =$('.sk_list_items').width();
        var len = $('.sk_list_items').length;
        var index  = 0;
        index ++;
        if(index= len){
            index = len-1
        }
        $('.seckilling_list .sk_list_items').animate({'left':liwidth*index},2000)
    });
    /*发现好货*/
    $('.goods_list_item>a').mouseover(function () {
        $(this).find('img').stop().animate({'margin-left':'-8px'})
    }).mouseleave(function () {
        $(this).find('img').stop().animate({'margin-left':'0'})
    });
    /*品牌头条*/
    $('.firstnew_list_item>a').mouseover(function () {
        $(this).find('img').stop().animate({'margin-left':'-8px'})
    }).mouseleave(function () {
        $(this).find('img').stop().animate({'margin-left':'0'})
    });
    /*排行榜*/
    $('.rank_tabs_wrap .rank_tab').mouseover(function () {
        var i = $(this).index();
        // alert(i)
        var liWidth=$(this).width();
        $('.rank_underline').animate({'left':(i*liWidth/2+10)+'px'},200);
        $('.rank_tab_con>div').eq(i).addClass('on').siblings().removeClass('on');
    });
    //*领劵中心*/
    $('.getCenter_r ul li').mouseover(function () {
        $(this).find('img').stop().animate({'margin-left':'-10px'})
    }).mouseleave(function () {
        $(this).find('img').stop().animate({'margin-left':'0'})
    });

    /*享品质*/

    $('.eqc_item').mouseover(function () {
        $(this).children('a').find('img').stop().animate({'margin-left':'-8px'})
    }).mouseleave(function () {
        $(this).children('a').find('img').stop().animate({'margin-left':'0'})
    });
    /*爱生活*/
    $('.enjoy_life_con a').mouseover(function () {
        $(this).find('img').stop().animate({'margin-left':'-8px'})
    }).mouseleave(function () {
        $(this).find('img').stop().animate({'margin-left':'0'})
    });
    $('.ewm').mouseover(function () {
        $(this).find('.hide_ewm').css('display','block')
    }).mouseleave(function (){
        $(this).find('.hide_ewm').css('display','none')
    });
    /*还没逛够*/
    $('.enjoy_more_content ul li a').mouseover(function () {
        $(this).find('p').addClass('change')
    }).mouseleave(function (){
        $(this).find('p').removeClass('change')
    });

});

/*轮播图banner*/

$(function () {
    var i=0;
    var timer = null;
    function show() {
        $('.img_list>li').eq(i).fadeIn().siblings().fadeOut();
        $('.dote_list>li').eq(i).addClass('dote_item_active').siblings().removeClass('dote_item_active');
    }
    function shows() {
        timer=setInterval(function () {
            if(i<7){
                i++;
            }else {
                i=0;
            }
            show();
        },1000);
    }
    shows();
    $('.banner_t').mouseover(function () {
        $(this).find('span').css('display','block')
    }).mouseleave(function () {
        $(this).find('span').css('display','none')
    });
    $('.banner_prev').click(function () {
        clearInterval(timer);
        i--;
        if(i<0){
            i=7
        }
        show();
        shows();
    });
    $('.banner_next').click(function () {
        clearInterval(timer);
        i++;
        if(i>6){
            i=-1;
        }
        show();
        shows()
    });
    $('.dote_list>li').mousemove(function () {
        clearInterval(timer);
        i=$(this).index();
        show();
    }).mouseleave(function () {
        shows();
    });

});

/*秒杀倒计时*/

/*
$(function () {

    function aa() {
        var nDate = new Date('2017/4/19,11:50:05');
        var date = new Date();
        var second =parseInt((nDate-date)/1000);
        var h= parseInt(second/60/60%24);
        var s =parseInt(second/60%60);
        var m =second%60;
        function num(i) {
            if(i<10){
                return i = '0'+i;
            }
            else {return i;}
        }
        $('.h').text(num(h));
        $('.s').text(num(s));
        $('.m').text(num(m));
        setInterval(aa,1000);
    }
    aa();
});*/
