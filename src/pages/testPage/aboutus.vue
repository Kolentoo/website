<template>
    <div class="about" id="about">
        <head-nav ref="header"></head-nav>
        <tab1 class="section1" slot="info1"></tab1>


        <div class="substance sub2">
            <div class="sborder">
                <div class="subcon">
                    <div class="stitle">
                        <h2>关于我们</h2>
                        <p class="english">ABOUT US</p>
                        <div class="shape"></div>
                    </div>
                    <div class="stxt clearfix">
                        <img class="logo2 vm smallpic" src="../../assets/img/logo2.jpg" alt="">
                        <dl class="text">
                            <dt>上海麦迈互联网科技有限公司</dt>
                            <dd>公司秉承一带一路的先进理念，积极布局区块链产业，2017年公司已在人才，技术，资源整合方面积极筹备。当前我们平台服务仅开拓海外市场(北美为主)，现有市场活跃用户800万人，1549万浏览点击量。预计未来2-3年我们海外市场用户将直线上升，并在四五年内覆盖到全球范围。麦迈科技立志成为区块链技术的全球化社会互助平台及主流媒体。</dd>
                            <dd>麦迈科技总部位于加拿大。在中国，加拿大，美国等地设有分支机构，是一家全球化，创新性的区块链平台，业务已囊括整个亚太区。2018麦迈科技将区块链与自身其他版块产业相结合，并以区块链的思维和技术重新进行资源重组，打破产业边界，积极打造麦迈区块链数字资产，使各版块价值有效互通和流动，管理更加便捷，高效，力求打造区块链经济的典范样式 。</dd>
                        </dl>
                        <img class="g10 vm pic2" src="../../assets/img/pic2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="cultrue">
            <img class="pic3 vm g10" src="../../assets/img/cultrue.jpg" alt="">
            <div class="cultrue-txt">
                <p class="cul-btn">企业文化</p>
                <p class="cul-txt">团结、互助、敏锐、精进，共创共利共益，互助互信，可编程共享社会，共同携手迈入互联网新时代。</p>
            </div>
        </div>
        <div class="contact newsub clearfix">
            <div class="contact-left clearfix fl">
                <div class="contact-txt">
                    <p class="p1">联系我们</p>
                    <p class="p2">CONTACT US</p>
                    <div class="line"></div>
                </div>
                <div class="imgbox fr">
                    <img class="decorate1 vm g10" src="../../assets/img/icon4.jpg" alt="">
                </div>
            </div>
            <div class="contact-right fl clearfix">
                <div class="ctitle">CONTACT US</div>
                <div class="company fr">
                    <div class="p1">上海麦迈互联网科技有限公司</div>
                    <div class="p2"><img class="icon2 vm icon" src="../../assets/img/icon2.png" alt=""><span class="s1">021-33666006</span></div>
                    <div class="p2"><img class="icon1 vm icon" src="../../assets/img/icon1.png" alt=""><span class="s1">Info@wheatwatch.com</span></div>
                    <div class="p2"><img class="icon3 vm icon" src="../../assets/img/icon3.png" alt=""><span class="s1">上海市黄浦区南京西路288号创兴金融中心706室</span></div>
                </div>
            </div>
        </div>

        <foot-nav></foot-nav>
    </div>
</template>

<script>
    import HeadNav from '@/pages/header/myHeader'
    import FootNav from '@/pages/footer/myFooter'
    import tab1 from '@/pages/testPage/tab1'
    export default {
        data(){
            return{
                showHeader:false,
                isPhoneSize:false
            }
        },
        created(){

        },
        mounted(){
            let page =this;
            window.addEventListener("scroll",function () {
                if(page.isPhoneSize == true)return;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop>=0){
                if(page.showHeader==false && scrollTop>=300){
                    showHeader(false)
                }else if(page.showHeader==true && scrollTop<300){
                    showHeader(true);
                }else{
                    //console.log("err:"+scrollTop+" "+page.showHeader);
                }
                }
            });

            reziceCallBack();
            window.onresize = function () {
                reziceCallBack();
            }

            function reziceCallBack() {
                //console.log("resize:"+document.body.clientWidth );
                if(document.body.clientWidth <=900){
                page.isPhoneSize = true;
                showHeader(false);
                }else{
                page.isPhoneSize = false;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(page.showHeader==true && scrollTop<300){
                    showHeader(true);
                }
                }
            }

            function  showHeader(flag) {
                page.showHeader = !flag;
                //console.log("showHeader:"+flag+" "+page.showHeader)
                page.$refs.header.showHeader(flag);
            }
        },
        components:{
            HeadNav,FootNav,tab1
        },
        methods:{
            scrollTo(ele, speed){
                //console.log("last:"+ele.getAttribute("id"));
                if(!speed) speed = 500;
                if(!ele){
                $("html,body").animate({scrollTop:0},speed);
                }else{
                $("html,body").animate({scrollTop:$(ele).offset().top-80},speed);
                }
                return false;
            }
        }
    }
</script>

<style>
    @import "../../assets/css/subTab.css";
    body,html {background: #f1f1f1;}
    /* .about .contentContainer {min-height: 50vh;} */
    .section1 {background:#152d39;}
    .section1 .content {display: none;}
    .info1 {display: flex;justify-content: space-between;margin-top: 120px;align-items: center;z-index:1;}
    .info1 .chart{width: 30%;}
    .info1 .chart img{display: block;}
    .info1 .p1 {font-size: 16px;color:#fff;}
    .about .picbox {display: none;}

    /* .sub {background: #f1f1f1;} */
    .substance {position: relative;z-index:1000;margin-top:-480px;margin-bottom: 8px;}
    .sborder {border:3px solid #fff;}
    .subcon {background: #fff;box-shadow:0 0 20px 2px rgba(0,0,0,0.1);}
    .subcon h2 {color:#173444;font-size: 32px;margin-bottom: 8px;}
    .subcon .english {color:#9e9e9e;margin:0;font-size: 16px;}
    .subcon .shape {width: 72px;height: 2px;background: #000;margin:7px auto 0;}

    .stxt {position: relative;}
    .stxt .logo2 {position: absolute;top: -90px;left: 50px;}
    .stxt dl{text-align: left;margin-top: 70px;}
    .stxt dt{font-size: 20px;color:#4A4A4A;font-weight: bold;margin-bottom: 20px;}
    .stxt dd{font-size: 16px;color:#4A4A4A;line-height: 30px;margin-left: 0;margin-bottom: 40px;}
    .stxt .pic2 {margin-top: 50px;}

    .cultrue {margin-top: 80px;position: relative;}
    .cultrue-txt {position: absolute;top: 0;left: 0;width: 100%;height: 100%;flex-direction: column ;display: flex;justify-content: center;align-items: center;
    background: rgba(0,0,0,0.5);}
    .cul-btn {width: 290px;height: 90px;transition:all ease 0.3s;color:#fff;text-align: center;font-size: 32px;line-height: 90px;border:2px solid #fff;cursor: pointer;}
    .cul-btn:hover {background: #5a6eaa;border-color:#5a6eaa;}
    .cul-txt {font-size: 18px;color:#fff;margin-top: 30px;}

    .contact {margin: 40px 0;display: flex;align-items: center;}
    .contact-left {width: 40%;background: #152d39;color:#fff;padding:60px 0 20px 0;}
    .contact-left .contact-txt {text-align: left;width: 40%;text-align: center;}
    .contact-left .p1 {font-size: 32px;font-weight: bold;margin-bottom: 5px;}
    .contact-left .p2 {font-size: 16px;}
    .contact-left .line {width: 70px;height: 2px;background: #fff;margin:5px auto;}
    .contact-left .imgbox {width: 60%;margin-right: 10%;}

    .contact-right {background: #f1f1f1;width: 60%;padding: 60px 0;}
    .contact-right .ctitle {font-size: 80px;color: #152C39;opacity: 0.6;font-weight: bold;}
    .contact-right .company {margin-top: 70px;text-align: left;margin-right: 60px;}
    .contact-right .p1 {font-size: 20px;color: #173444;margin-bottom: 15px;}
    .contact-right .p2 {margin-bottom: 5px;}
    .contact-right .icon {width: 13px;vertical-align: middle;margin-right: 8px;position: relative;top: -2px;}
    .contact-right .s1 {font-size: 16px;color: #173444;line-height: 30px;}

    @media screen and (max-width: 750px){
        .stxt dt {text-align: center;}
        .info1 {margin-top: 60px;}
        .substance {margin-top: -420px;}
        .contact-left {padding:30px 0 10px 0;}
        .contact-left .line {margin-bottom: 50px;}
        .contact-left .contact-txt {text-align: center;width: 100%;}
        .contact-left .p1 {font-size: 16px;}

        .contact-right {padding:20px 0;}
        .contact-right .ctitle {font-size: 20px;}
        .contact-right .company {margin:20px 10px 0;text-align: left;}
        .contact-right .p1 {font-size: 14px;margin-bottom: 10px;}
        .contact-right .s1 {font-size: 12px;line-height: 24px;}
        .contact-right .icon {top: 0;}

        .cul-btn {width: 120px;height: 32px;transition:all ease 0.3s;color:#fff;text-align: center;font-size: 16px;line-height: 30px;border:1px solid #fff;cursor: pointer;}
        .cul-txt {font-size: 12px;color:#fff;margin-top: 10px;}
    }


</style>


