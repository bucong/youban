$(function(){
	var login = true;
	if(!login){
		$('.show-select').show();
	}
	//首页城市选择
	$('.show-select li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.show-select button').click(function(){
		$('.head-body .select .chooseRes').html($('.show-select .active').html());
		$('.show-select').hide();
	})
	$('.show-select img').click(function(){
		$('.show-select').hide();
	})
	$('.choose').click(function(){
		$(this).css('border-bottom','none');
		$('.choose-detail').show();
	})
	$('.choose-detail a').click(function(){
		$('.chooseRes').html($(this).html());
		$('.choose-detail').hide();
		$('.choose').css('border-bottom','1px solid #e0e0e0');
	})
	//全部分类
	$('.all').hover(function(){
		$('.classify').show();
	},function(){
		$('.classify').hide();
	})
	$('.classify .detail label').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().parent().find('div').eq($(this).index()).show().siblings().hide();
		$('.classify .detail p').show();
	})
	//首页brand1轮播
	var i=0;
	var len=$('.brand1 .brand-top div img').length;
	$('.brand1 .brand-top div').width(len*1200);
	$('.brand1 .fa-angle-right').click(function(){
		i++;
		if(i>=len){
			i=len-1;
		}
		$('.brand1 .brand-top div').css('left',-1200*i)
	})
	$('.brand1 .fa-angle-left').click(function(){
		i--;
		if(i<=0){
			i=0;
		}
		$('.brand1 .brand-top div').css('left',-1200*i)
	})
	//首页input加减框
	$('.minus').click(function(){
		var num = $(this).parent().find('.num').val();
		num--;
		if(num<=0){
			num=0;
			$(this).parent().find('.num').css({'color':'#999','font-weight':'100'});
		}
		$(this).parent().find('.num').val(num);
	})
	$('.plus').click(function(){
		var num = $(this).parent().find('.num').val();
		num++;
		$(this).parent().find('.num').css({'color':'#1a77b5','font-weight':'900'});
		$(this).parent().find('.num').val(num);
	})
	//侧边栏
	$(document).scroll(function() {
		var y=$(window).scrollTop();
		var k=0;
//		console.log(y);
		if(y<=300){
			$('aside').css({'position':'absolute','top':'72px'});
		}else if(y>300&&y<=600){
			k=0;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else if(y>600&&y<=1200){
			k=1;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else if(y>1200&&y<=1625){
			k=2;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else if(y>1625&&y<=2050){
			k=3;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else if(y>2050&&y<=2465){
			k=4;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else if(y>2465&&y<=3130){
			k=5;
			$('aside').css({'position':'fixed','top':'450px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}else{
			k=6;
			$('aside').css({'position':'absolute','top':'2918px'});
			$('.floor li').eq(k).addClass('active').siblings().removeClass('active');
		}
	});
	
	//---------------------------优板商城
//	tab
	$('.store .store-tab li').click(function(){
		$('.store .tab-content li').eq($(this).index()).show().siblings().hide();
	})
	//展开，收起
	$('.function .more').toggle(function(){
		$(this).find('.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
		$(this).find('.content').html('更多');
		$(this).parent().find('.function-detail').css('height','30px');
	},function(){
		$(this).find('.fa').addClass('fa-angle-up').removeClass('fa-angle-down');
		$(this).parent().find('.function-detail').css('height','');
		$(this).find('.content').html('收起');
	})
	//选择
	$('.store .function-detail a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//------------------------------------定制说明
	$('.orderExp .tab li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.orderExp .tab-content li').eq($(this).index()).show().siblings().hide();
	})
	//------------------------------------商城详情
	$('.store-detail-body .tab li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.store-detail-body .tab-box>div').eq($(this).index()).show().siblings().hide();
	})
	//-------------------------------------购物车
	$('.cart-body table input').change(function(){
		if($(this).attr('checked')=='checked'){
			$(this).parent().parent().find('td').css({'border-top': '1px solid #148ddd','border-bottom': '1px solid #148ddd'});
			$(this).parent().parent().find('td').eq(0).css({'border-left': '1px solid #148ddd'});
			$(this).parent().parent().find('td').eq(5).css({'border-right': '1px solid #148ddd'});
		}else{
			$(this).parent().parent().find('td').css({'border-top': '1px solid #e0e0e0','border-bottom': '1px solid #e0e0e0'});
			$(this).parent().parent().find('td').eq(0).css({'border-left': '1px solid #e0e0e0'});
			$(this).parent().parent().find('td').eq(5).css({'border-right': '1px solid #e0e0e0'});
		}
	});
	$('.cart-body .choose-all').click(function(){
		if($(this).attr('checked')=='checked'){
			$('.cart-body table input').attr('checked','checked');
		}else{
			$('.cart-body table input').removeAttr('checked');
		}
		$('.cart-body table input').change();
	})
	//------------------------我的订单
	$('.myshoppingCart-title span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	//------------------------帮助详情
	$('.help-detail-left ul a').click(function(){
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
		$('.help-detail-body .nowPage').html($(this).html());
	})
})
