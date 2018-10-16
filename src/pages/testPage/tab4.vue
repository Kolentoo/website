<template>
  <section class="contentContainer">
    <div class="content">

      <div class="mainGroup">
        <div class="smallLogo"><img src="../../assets/img/tab2/img_logo.png"></div>
        <div class="titleHint">01.4<div></div>Technology</div>

        <div class="floatContainer">
          <div class="floatItem" id="mainTitle">
            <div class="mainTitle-title">技术实现</div>
            <div class="mainTitle-btn" id="t-btn1">P2P\加密算法\智能合约</div>
            <div class="mainTitle-btn" id="t-btn2">开发语言 C++\Go</div>
          </div>
          <div class="floatItem" id="mainContent">目前的物联网生态体系，依赖中心化的网络管理架构，所有的设备都是通过云服务器连接。随着网络规模的扩大，中心化云服务器、大型服务器和网络设备的基础设施在维护方面将占用高昂成本。在去中心化的物联网愿景中，区块链是发生互动的设备间促进交易处理和协作的框架，网络上的每个设备都可以作为一个独立、微型的商业主体运行。</div>
          <div class="floatItem" id="mainImg">
            <!-- <img src="../../assets/img/tab4/main.png"/> -->
            <div id="large-header" class="large-header">
                <canvas id="demo-canvas" ></canvas>
            </div>



          </div>
          <div style="clear: both"></div>
        </div>

        <div class="floatContainer" style="margin-top: 50px;margin-bottom: 10px">
          <div class="nav-floatItem" id="leftNav">
            <div class="nav-title">去中心化</div>
            <div class="nav-content">中心化的分布式结构，可节省大量的中介成本</div>
            <div class="nav-border"></div>
          </div>
          <div class="nav-floatItem" id="midNav">
            <div class="nav-title">高可信不可篡改</div>
            <div class="nav-content">可解决数据追踪与信息的防伪问题</div>
            <div class="nav-border"></div>
          </div>
          <div class="nav-floatItem" id="rightNav">
            <div class="nav-title">可编程特性</div>
            <div class="nav-content">可以帮助规范现有的市场秩序</div>
          </div>
          <div style="clear: both"></div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "tab4"
    }
</script>

<style scoped>
  @import "../../assets/css/subTab.css";

  .nav-floatItem{
    transition: all 0.3s;
    float: left;
    width: 28%;
    text-align: center;
    position: relative;
    min-height: 150px;
  }
  .nav-title{
    max-width: 260px;
    font-size: 32px;
    line-height: 80px;
    text-align: center;
    color: #173444;
    margin: 0 auto;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .nav-content{
    max-width: 260px;
    font-size: 16px;
    line-height:30px;
    margin: 0 auto;
    margin-bottom: 5px;
    text-align: center;
    color: #173444;
  }
  .nav-border{
    width: 0px;
    height: 90px;
    position: absolute;
    top: 30px;
    right: 0;
    display: block;
    border: 1px solid #173444;
    margin: 0 !important;
  }
  #midNav{
    width: 44%;
    padding: 0 40px;
  }
  #leftNav{
    padding-right: 40px;
  }
  #leftNav div{
    margin-left: 0;
  }
  #rightNav{
    padding-left: 40px;
  }
  #rightNav div{
    margin-right: 0;
  }

  #mainImg{
    text-align: center;
  }
  #mainImg img{
    max-width: 100%;
    max-height: 382px;
    margin-left: 0;margin-right: 0;
  }
  #mainTitle{
    margin-right: 0;
    float: right;
    margin-top: -40px;
    text-align: right;
  }
  #mainTitle div{
    display: inline-block;
  }
  #t-btn1{
    max-width: 357px;
  }
  #t-btn1{
    max-width: 283px;
  }
  .mainTitle-title{
    width: 100%;
    line-height: 95px;
    font-size: 54px;
    color: #173444;
    text-align: right;
    margin-bottom: 37px;
    max-width: 250px;
  }
  .mainTitle-btn{
    color: #173444;
    text-align: center;
    line-height: 28px;
    padding: 22px;
    font-size: 20px;
    margin-bottom: 37px;
    width: 100%;
    border: 2px solid #173444;
  }

  #mainContent{
    font-size: 18px;
    color: #173444;
    line-height: 36px;

  }

  .floatItem{
    transition: all 0.3s;
    float: left;
    width: 28%;
    margin-right: 8%;
    max-height: 382px;
    margin-bottom: 10px;
    position: relative;
    z-index: 9;
    margin-top: 10px;
  }

  .floatContainer{
    width: 100%;
    margin-top: 140px;
    margin-bottom: 30px;
    z-index: 2;
  }

  .smallLogo{
    width: 130px;
    top: 10px;
    position: absolute;
  }
  .smallLogo img{
    width: 100%;
  }


  @media screen and (max-width: 1500px){
  }
  @media screen and (max-width: 1279px){
  }
  @media screen and (max-width: 1160px){
    .floatItem{
      width: 45%;
      margin-right: 10%;
    }
    .floatContainer{
      margin-top: 80px;
    }
    #mainImg{
      margin-right: 0;
    }
    #mainTitle{
      width: 100%;
      margin-top: 0;
      display: flex;align-items: center;
    }
    #mainTitle div{
      margin-right: 40px;
    }
    .mainTitle-title{
      font-size: 36px;
      line-height: 50px;
    }
    .mainTitle-btn{
      padding: 11px;
      font-size: 18px;
    }
    .nav-floatItem{
      min-height: 100px;
    }
    .nav-border{
      height: 60px;
      top: 20px;
    }
    .nav-title{
      font-size: 20px;
      line-height: 36px;
    }
    .nav-content{
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 750px){
    .smallLogo{
      width: 70px;
    }
    .floatItem{
      width: 100%;
      margin-right: 0;
    }
    .floatContainer{
      margin-top: 40px;
    }
    #mainImg{
      padding: 0 5vw;
      display: block;
    }
    #mainTitle{
      display: block;
    }
    #mainTitle div{
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px ;
      display: block;
      max-width: 100%;
    }
    #mainContent{
      margin-bottom: 30px;
    }
    .smallLogo{
      top: 0px;width: 70px;
    }
    .nav-floatItem{
      width: 100% !important;
      padding: 0 5vw !important;
      min-height: 120px;
    }
    .nav-floatItem div{
      max-width: 100%;
      margin: 0 auto !important;
    }
    .nav-border{
      display: none;
    }


    /* css3 */
    .large-header {
      position: relative;
      width: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: top left;
      z-index: 1;
    }


  }
</style>
