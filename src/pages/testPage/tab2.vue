<template>
  <section class="contentContainer">
    <div class="content">

      <div class="mainGroup">
        <div class="smallLogo"><img src="../../assets/img/tab2/img_logo.png"></div>
        <div class="titleHint">01.2<div></div>Characteristic</div>
        <div class="mainTitle">{{titleArr[currentTab]}}</div>
        <div class="other">{{other[currentTab]}}</div>
        <div class="selectTabs">
          <div class="selectTab" @click="currentTab=0" v-bind:class="{' selectTabActive':currentTab==0}"><mu-ripple class="selectTabContent">01</mu-ripple></div>
          <div class="selectTab" @click="currentTab=1" v-bind:class="{' selectTabActive':currentTab==1}"><mu-ripple class="selectTabContent">02</mu-ripple></div>
          <div class="selectTab" @click="currentTab=2" v-bind:class="{' selectTabActive':currentTab==2}"><mu-ripple class="selectTabContent">03</mu-ripple></div>
          <div class="selectTab" @click="currentTab=3" v-bind:class="{' selectTabActive':currentTab==3}"><mu-ripple class="selectTabContent">04</mu-ripple></div>
        </div>
        <div class="mainContent">{{textArr[currentTab]}}</div>
        <div class="mainImg">
          <img src="../../assets/img/tab2/mainImg.svg"/>
          <figure class="">
            <div class="c"></div>
            <div class="c2"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <div class="c3"></div>
            <div class="c4"></div>
            <div class="c5"></div>
            <div class="c6"></div>
          </figure>
          <div class="mainHint2">互助平台优势</div>
        </div>
        <div class="mainHint">互助平台优势</div>

        <div class="rightBottomBtn" @click="gotoTab('tab3')">
          <span>应用场景</span>
          <img src="../../assets/img/tab2/icon_rightbottom.png"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "tab2",
      mounted(){

      },
      data(){
          return{
            currentTab:0,
            textArr:[
              "麦酷链所倡导构建的区块链应用生态(以生活服务为中心的全球化社会共享平台)将以公平开放，技术赋能，赋权众包，生态联盟为准则，成为各种商业行为和组织机构的基础技术架构，创造出丰富的产品和服务。麦酷链用户可以在相互无信任的情况下，无地域限制的进行大规模协作，高效且有效做到按劳分配，按需分配，真正实现共利共益，互助互信的可编程社会生态。",
              "麦酷链所倡导全球化社会共享平台，发挥了区块链五大核心能力，利用麦迈自有高端黑科技-- 石墨烯技术 m-Graphene 进行业务模式创新，改造并升级现有的产业行业的组织，分配和激励机制。",
              "推行“通证”经济，使价值交换以公平公正公开的方式进行，改变垄断，突破既得利益者行为模式，以更低的成本帮助实现商业活动。所有参与者信息共享，共识，共担，创造安全性的跨地域的协作，真正实现共利共益，互助互信新的社会生态。",
              "共识机制、共有数据、分布式账本、防篡改保护隐私、智能合约；分享有价值的信息，贡献有回报。建立一种契合超强的生产力智商，量化按需按劳权益分配法，创造互助平台，合作共赢；重点发展移动支付的应用，注重客户实用性，杜绝炒作，证券化行为。",
            ],
            titleArr:[
              "核心理念","核心能力","互助互信","新经济社",
            ],
            other:[
                "开放的平台通证经济","协作，共享，互惠，共建","智能，便捷，自主，共生","创新，科技，高效，盈利"
            ]
          }
      },
      methods:{
        gotoTab(target){
          this.$emit("gotoTab",target);
        },
      }
    }
</script>

<style scoped>
  @import "../../assets/css/subTab.css";
  .contentContainer{
    padding-bottom: 100px;
  }
  .mainHint2{
    display: none;
    position: absolute;
    left: 0;
    top: -40px;
    color: #173444;
    font-size: 16px;
    line-height: 22px;
    font-family: PingFangSC-Semibold,Microsoft YaHei;
    font-weight: bold;
  }
  .mainHint{
    position: absolute;
    left: 0;
    top: 620px;
    color: #173444;
    font-size: 16px;
    line-height: 22px;
    font-family: PingFangSC-Semibold,Microsoft YaHei;
    font-weight: bold;
  }
  .mainImg{
    display: inline-block;
    vertical-align: top;
    margin-top: 50px;
    margin-left: 12vw;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .mainImg img{
    width: 100%;
    opacity: 0;
  }
  .mainContent{
    display: inline-block;
    vertical-align: top;
    max-width: 430px;
    color: #173444;
    font-size: 18px;
    line-height: 30px;
    text-align: left;
    padding-top: 6vh;
  }

  .selectTabs{
    display: flex;align-items: center;
  }
  .selectTab{
    color: #d3d3d3;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
    position: relative;
  }
  .selectTabContent{
    padding:10px 20px;
    font-size: 18px;
    line-height: 25px;
  }
  .selectTabActive{
    color: #173444 ;
  }

  .mainTitle{
    line-height: 95px;
    font-size: 54px;
    color: #173444;
    margin-left: auto;
    text-align: right;
    margin-top: 30px;
  }

  .smallLogo{
    width: 130px;
    top: 10px;
    position: absolute;
  }
  .smallLogo img{
    width: 100%;
  }




  .rightBottomBtn{
    position: absolute;
    right: 0;
    height: 30px;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;
    color: #173444;
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


  @media screen and (max-width: 1500px){
  }
  @media screen and (max-width: 1279px){
    .mainImg{
      margin-left: 8vw;
    }
  }
  @media screen and (max-width: 750px){
    .smallLogo{
      width: 70px;
    }

    .mainTitle{
      font-size: 40px;
      line-height: 60px;
    }
    .mainImg{
      margin-top: 85px;
      margin-left: 0;
      margin-bottom: 30px;
    }
    .mainHint{
      display: none;
    }
    .mainHint2{
      display: block;
    }
    .smallLogo{
      top: 0px;
    }
  }


  /* css2 */
html,
body {
    background: #222222;
    background: linear-gradient(#222222, #4e6e79);
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
}
.c {
    width: 240px;
    height: 240px;
    border: 3px solid #98bdcd;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 150px;
    transform: translate3d(-50%, -50%, -50px)
}
.c:after {
    content: "";
    position: absolute;
    left: -10px;
    top: -10px;
    width: 100%;
    height: 100%;
    border-radius: 150px;
    border: 10px solid #98bdcd;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: R 10s infinite linear;
}
.c2 {
    width: 300px;
    height: 300px;
    border: 1px solid #7a929c;
    border-radius: 150px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    padding: 2px;
    animation: L 80s infinite linear;
}
.c3 {
    width: 100px;
    height: 100px;
    border: 2px solid #a05d55;
    border-radius: 150px;
    transform: translate3d(-50%, -50%, 5px);
    position: absolute;
    top: 50%;
    left: 50%;
}
.c3:after {
    content: "";
    position: absolute;
    left: -5px;
    top: -5px;
    width: 100%;
    height: 100%;
    border-radius: 150px;
    border: 5px solid #a05d55;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: L 5s infinite linear;
}
.c4 {
    width: 75px;
    height: 75px;
    transform: translate3d(-50%, -50%, 0px);
    position: absolute;
    left: 50%;
    top: 50%;
}
.c4:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: -3px;
    top: -3px;
    border-radius: 150px;
    border: 3px solid #98bdcd;
    border-left-color: transparent;
    animation: R 5s infinite linear;
}
.c5 {
    width: 77px;
    height: 77px;
    transform: translate3d(-50%, -50%, 65px);
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 150px;
}
.c5:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #7a929c;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 150px;
    animation: L 5s infinite linear;
}
.c6 {
    width: 55px;
    height: 55px;
    transform: translate3d(-50%, -50%, 61px);
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 150px;
}
.c6:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #7a929c;
    border-right-color: transparent;
    border-top-color: transparent;
    border-radius: 150px;
    animation: R 10s infinite linear;
}
i {
    height: 15px;
    width: 1px;
    background: #98bdcd;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    transform-origin: 1000% 1000%;
}
i:nth-child(2) {
    transform: rotate(10deg);
}
i:nth-child(3) {
    transform: rotate(20deg);
}
i:nth-child(4) {
    transform: rotate(30deg);
}
i:nth-child(5) {
    transform: rotate(40deg);
}
i:nth-child(6) {
    transform: rotate(50deg);
}
i:nth-child(7) {
    transform: rotate(60deg);
}
i:nth-child(8) {
    transform: rotate(70deg);
}
i:nth-child(9) {
    transform: rotate(80deg);
}
i:nth-child(10) {
    transform: rotate(90deg);
}
i:nth-child(11) {
    transform: rotate(100deg);
}
i:nth-child(12) {
    transform: rotate(110deg);
}
i:nth-child(13) {
    transform: rotate(120deg);
}
i:nth-child(14) {
    transform: rotate(130deg);
}
i:nth-child(15) {
    transform: rotate(140deg);
}
i:nth-child(16) {
    transform: rotate(150deg);
}
i:nth-child(17) {
    transform: rotate(160deg);
}
i:nth-child(18) {
    transform: rotate(170deg);
}
i:nth-child(19) {
    transform: rotate(180deg);
}
i:nth-child(20) {
    transform: rotate(190deg);
}
i:nth-child(21) {
    transform: rotate(200deg);
}
i:nth-child(22) {
    transform: rotate(210deg);
}
i:nth-child(23) {
    transform: rotate(220deg);
}
i:nth-child(24) {
    transform: rotate(230deg);
}
i:nth-child(25) {
    transform: rotate(240deg);
}
i:nth-child(26) {
    transform: rotate(250deg);
}
i:nth-child(27) {
    transform: rotate(260deg);
}
i:nth-child(28) {
    transform: rotate(270deg);
}
i:nth-child(29) {
    transform: rotate(280deg);
}
i:nth-child(30) {
    transform: rotate(290deg);
}
i:nth-child(31) {
    transform: rotate(300deg);
}
i:nth-child(32) {
    transform: rotate(310deg);
}
i:nth-child(33) {
    transform: rotate(320deg);
}
i:nth-child(34) {
    transform: rotate(330deg);
}
i:nth-child(35) {
    transform: rotate(340deg);
}
i:nth-child(36) {
    transform: rotate(350deg);
}
i:nth-child(37) {
    transform: rotate(360deg);
}
figure {
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotateX(-40deg) rotateY(30deg) scale(1.1, 1.1);
    transition: 1.4s;
    transform-style: preserve-3d;
}
figure:hover {
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg) scale(1.1, 1.1);
}
@keyframes R {
    0% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(380deg)
    }
}
@keyframes L {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg)
    }
}
.other {font-size: 18px;text-align: right;}
</style>
