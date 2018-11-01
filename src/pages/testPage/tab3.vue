<template>
  <section class="contentContainer">
    <div class="content" id="newadd">

      <div class="mainGroup clearfix">
        <div class="titleHint">01.3<div></div>Scene</div>

        <div class="logoY">
          <img src="../../assets/img/tab3/logoY.png">
        </div>
        <div class="logoX">
          <img src="../../assets/img/img_logo.png">
        </div>

        <div class="textbox realfr">
          <dl class="textcon">
            <dt class="dt1">应用案例1：活使用TOKEN 经济</dt>
            <dd>跨平台灵活使用Token 经济</dd>
            <dd>多劳多得，公平公正的激励机制</dd>
          </dl>
          <dl class="textcon">
            <dt class="dt2">生活服务TOKEN经济: <em>商家+所有用户 共享</em></dt>
            <dd>秉承共建共利的原则，全民参与，提高平台互动，留言/转发推荐/点赞明星产品）都有Token ! </dd>
            <dd>商家优质产品上排行榜有Token !热门店铺可获得外部赞助商的Token！</dd>
            <dd>跨店跨平台灵活使用Token！盈利模式最大化</dd>
            <dd>赋权众包：激励公众人群和成为（公链）推广交易的超级节点*</dd>
            <dd>新商户入社区   -- 免费</dd>
            <dd>任何社区交易   -- 免费</dd>
            <dd>金融交易服务   -- 免费</dd>
            <dd class="tips">今后还会有更多的应用模块上链，计划中超级节点:打车、外送服务等……</dd>
          </dl>
        </div>

        <div class="floatContainer clearfix fr">

          <div class="floatItemTrans hide" id="trans1" style="float: right">
            <p class="titleText" style="margin-top: -15px">落地的&nbsp;&nbsp;&nbsp;</p>
            <p class="titleText">应用场景</p>
          </div>

          <div class="floatItem leftCol realfr">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle hide">打车、拼车应用</div>
              <div class="floatItemContent">实现陌生人之间的信任交易，数字货币与法币的自由转换，无法盗取；交易获利迅速稳定，支付方式更安全便捷。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_01.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem realfr">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle hide">社交</div>
              <div class="floatItemContent">所有的商家，企业及个人都可以作为一个独立的商业主体，运行使用服务和应用，有效降低运营成本。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_02.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem leftCol hide">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">共享</div>
              <div class="floatItemContent">利用闲置资源、实现最有匹配消除资金提供方与资金需求方之间冗长的中介环节，让双方最直接地交易。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_03.png"/>
              </div>
            </mu-ripple>
          </div>



          <div class="floatItemTrans hide" id="trans2"></div>

          <div class="floatItem hide">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">发行 Token</div>
              <div class="floatItemContent">代表的是生活平台资源拥有权，用于平台各种应用的支付与对用户的奖励等，方便流通。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_04.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem leftCol hide">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">赋权众包</div>
              <div class="floatItemContent">将激励公众人群和小众人才社区成为平台（公链）推广和交易的超级节点。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_05.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem realfr">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle hide">外送服务应用</div>
              <div class="floatItemContent">各行各业的新社区 （购物，打车，外卖，维修等） 跨行业，跨地区无边界的资金，资源整合，实时支付便捷。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_06.png"/>
              </div>
            </mu-ripple>
          </div>

          <div style="clear: both"></div>
        </div>

        <div class="rightBottomBtn" @click="gotoTab('tab4')">
          <span>技术实现</span>
          <img src="../../assets/img/tab1/icon_rightbottom.png"/>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "tab3",
      methods:{
        gotoTab(target){
          this.$emit("gotoTab",target);
        },
      }
    }
</script>

<style scoped>
  @import "../../assets/css/subTab.css";
  .fl {float:left;}
  .fr {float:right;}
  .realfr {float:right;}
  .clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}
  #newadd .hide {display: none;}
  .logoX{
    opacity: 0.1;
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 0px;
    width: 203px;
    display: none;
  }
  .logoX img{
    width: 100%;
  }
  .logoY{
    opacity: 0.1;
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 20px;
    width: 180px;
  }
  .logoY img{
    width: 100%;
  }

  .titleText{
    font-size: 44px;
    line-height: 65px;
    color: white;
    font-family: PingFangSC-Semibold,Microsoft YaHei;
    margin: 0;
    text-align: right;
  }

  .floatContainer{
    width: 100%;
    /* padding-left: 12vw; */
    margin-top: 40px;
    margin-bottom: 20px;
    z-index: 2;
  }
  .floatItem{
    transition: all 0.3s;
    /* float: left; */
    width: 21%;
    margin-left: 4%;
    height: 300px;
    margin-bottom: 36px;
    position: relative;
    cursor: pointer;
    z-index: 9;
  }
  .floatItem:hover{
    transform: scale(1.05);
  }
  .floatItemContainer{
    border: 1px solid rgba(173, 173, 173, 0.6);
    width: 100%;
    height: 100%;
    padding: 0 10%;
    text-align: center;
  }
  .floatItemTitle{
    width: 100%;
    white-space:nowrap;
    overflow:hidden;
    word-break:keep-all;
    text-overflow:ellipsis;
    color: white;
    margin-top: 30px;
    line-height: 24px;
    font-size: 16px;
    font-family: PingFangSC-Semibold,Microsoft YaHei;
    margin-bottom: 30px;
  }
  .floatItemImg{
    width: 34%;
    position: absolute;
    left: 33%;
    bottom: 35px;
  }
  .floatItemImg img{
    width: 100%;
  }
  .floatItemContent{
    width: 100%;
    font-size: 13px;
    color: white;
    line-height: 30px;
    text-align: left;
    padding-top: 40px;
  }
  .floatItemTrans{
    border: transparent;
    float: left;
    width: 21%;
    margin-left: 4%;
    height: 300px;
    margin-bottom: 36px;
    display: block;
  }

  .contentContainer{
    background-color: #152C39 ;
  }
  .titleHint{
    color: white;
  }
  .titleHint div{
    border: 1px solid white;
  }

  .rightBottomBtn{
    position: absolute;
    right: 0;
    height: 30px;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;
    color: white;
    line-height: 20px;
  }
  .rightBottomBtn span{
    float: left;
  }
  .rightBottomBtn img{
    margin-left: 10px;
    height: 16px;
  }
  .rightBottomBtn:hover{
    padding-top: 15px;
  }

  .mainGroup{
    padding-bottom: 30px;
  }

  .textbox {color:#fff;width: 71%;margin-top: 50px;}
  .textbox .dt1 {font-size: 18px;}
  .textbox .dt2 {font-size: 22px;margin-top: 20px;}
  .textbox .dt2 em{font-size: 14px;}
  .textbox .textcon {line-height: 30px;}
   .textbox .tips {margin-top: 5px;}

  @media screen and (max-width: 1500px){
  }
  @media screen and (max-width: 1279px){
  }
  @media screen and (max-width: 1160px){
    .floatContainer{
      padding-left: 0;
    }
    .floatItem{
      margin-left: 4%;
      width: 25%;
      margin-right: 4%;
    }
    .floatItemTrans{
      width: 92%;
      margin-right: 4%;
      height: auto;
    }
    #trans2{
      display: none;
    }
    /* .leftCol{
      margin-top: -100px;
    } */
    .logoY{
      display: none;
    }
    .logoX{
      display: block;
    }
  }
  @media screen and (max-width: 750px){
    .content{
      padding:0 5px;
    }
    .titleText{
      font-size: 26px;
      line-height: 40px;
    }
    .floatItem{
      height: 260px;
    }
    .floatItemImg{
      bottom: 20px;
      width: 35%;
      left: 30%;
    }
    .realfr{
      float:none;width: 80%;margin:20px auto 10px;
    }

  }
</style>
