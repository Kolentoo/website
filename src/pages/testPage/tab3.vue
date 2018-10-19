<template>
  <section class="contentContainer">
    <div class="content">

      <div class="mainGroup">
        <div class="titleHint">01.3<div></div>Scene</div>

        <div class="logoY">
          <img src="../../assets/img/tab3/logoY.png">
        </div>
        <div class="logoX">
          <img src="../../assets/img/img_logo.png">
        </div>

        <div class="floatContainer">

          <div class="floatItemTrans" id="trans1" style="float: right">
            <p class="titleText" style="margin-top: -15px">落地的&nbsp;&nbsp;&nbsp;</p>
            <p class="titleText">应用场景</p>
          </div>

          <div class="floatItem leftCol">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">打车、拼车应用</div>
              <div class="floatItemContent">“劳动者”与“消费者”共享的平台，中心化的打车平台可能被去中心化的区块链技术颠覆</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_01.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">社交</div>
              <div class="floatItemContent">在区块链环境下，用户信息高度保密。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_02.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem leftCol">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">共享</div>
              <div class="floatItemContent">利用闲置资源、实现最有匹配消除资金提供方与资金需求方之间冗长的中介环节，让双方最直接地交易。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_03.png"/>
              </div>
            </mu-ripple>
          </div>



          <div class="floatItemTrans" id="trans2"></div>

          <div class="floatItem">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">发行 Token</div>
              <div class="floatItemContent">代表的是生活平台资源拥有权，用于平台各种应用的支付与对用户的奖励等，方便流通。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_04.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem leftCol">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">赋权众包</div>
              <div class="floatItemContent">将激励公众人群和小众人才社区成为平台（公链）推广和交易的超级节点。</div>
              <div class="floatItemImg">
                <img src="../../assets/img/tab3/img_05.png"/>
              </div>
            </mu-ripple>
          </div>

          <div class="floatItem">
            <mu-ripple class="floatItemContainer">
              <div class="floatItemTitle">外送服务应用</div>
              <div class="floatItemContent">网上订餐、跑腿、帮餐厅提供配送服务。</div>
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
    padding-left: 12vw;
    margin-top: 40px;
    margin-bottom: 20px;
    z-index: 2;
  }
  .floatItem{
    transition: all 0.3s;
    float: left;
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
    line-height: 15px;
    text-align: left;
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
      width: 42%;
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
    .leftCol{
      margin-top: -100px;
    }
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
      width: 40%;
      left: 30%;
    }

  }
</style>
