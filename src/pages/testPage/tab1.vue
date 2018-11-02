<template>
    <section class="contentContainer">

      <div class="header" style="z-index: 900">
        <div class="headerContent" >
          <img class="smallLogo" src="../../assets/img/img_logo.png">
          <a class="headerItem disperse">
            <mu-menu open-on-hover class=" disperse2">
              <mu-button class="list-primary"><img src="@/assets/img/header/icon_cn.png"/>中文</mu-button>
              <mu-list slot="content">
                <mu-list-item button>
                  <mu-list-item-title class="list-sub"><img src="@/assets/img/header/icon_en.png"/>EN</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-title class="list-sub"><img src="@/assets/img/header/icon_cn.png"/>中文</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-menu>
          </a>
          <a class="headerItem disperse" @click="goindex()">
            <mu-ripple class="mu-ripple-demo">首页</mu-ripple>
          </a>
          <a class="headerItem disperse" @click="goabout()">
            <mu-ripple class="mu-ripple-demo">关于我们</mu-ripple>
          </a>
          <a class="headerItem disperse" style="margin-right: 0" @click="gorecruit()">
            <mu-ripple class="mu-ripple-demo">人才招聘</mu-ripple>
          </a>
        </div>
      </div>

      <slot name="info1">
        <div class="info1 sub">
          <div class="chart">
            <img class="vm g10" src="../../assets/img/logo.jpg" alt="">
          </div>
          <p class="p1">02.1 ———— Introduce</p>
        </div>
      </slot>



      <div class="content">

        <div class="mainGroup">

          <div class="logo">
            <img src="../../assets/img/img_logo.png">
          </div>

          <div class="titleHint">01.1<div></div>Platform</div>

          <div class="titleContent">
            <div>{{textArr[currentContent]}}</div>
            <div v-if="currentContent===1">
              <p class="p1 ptxt">文化、教育、生活 <br>医疗、支付、物联 <br>汽车、租赁</p>
            </div>
            <div v-if="currentContent===2">
              <p class="ptxt ptxt1">首家实现高TPS <br> 核心技术</p>
              <p class="ptxt ptxt2">麦迈石墨烯技术 (m-Graphene)</p>
              <p class="ptxt ptxt3">更快更强 柔韧度高且极其稳定 完备可靠</p>
            </div>
            <mu-ripple class="titleContentBtn" @click="gotoTab2">+ More</mu-ripple>


          </div>

          <div class="leftBottomBtnGroup">
            <div class="leftBottomBtn" @click="currentContent=0" v-bind:class="{'btnInactive':currentContent!=0}">
              <span>开放共享平台</span>
              <img src="../../assets/img/tab1/icon_leftbottom.png"/>
            </div>
            <div class="leftBottomBtn" @click="currentContent=1" v-bind:class="{'btnInactive':currentContent!=1}">
              <span>应用场景</span>
              <img src="../../assets/img/tab1/icon_leftbottom.png"/>
            </div>
            <div class="leftBottomBtn" @click="currentContent=2" v-bind:class="{'btnInactive':currentContent!=2}">
              <span>技术实现</span>
              <img src="../../assets/img/tab1/icon_leftbottom.png"/>
            </div>
          </div>


          <div class="rightBottomBtn" @click="gotoTab('tab2')">
            <span>探索</span>
            <img src="../../assets/img/tab1/icon_rightbottom.png"/>
          </div>
        </div>

      </div>
    </section>
</template>

<script>
  import * as THREE from 'three';

  export default {
    name: "tab1",
    mounted(){
      let page = this;
      this.contentTimeout = setTimeout(function () {
        page.currentContent==2?page.currentContent=0:(page.currentContent++)
      },this.freq);
    },
    methods:{
      gotoTab(target){
        this.$emit("gotoTab",target);
      },
      gotoTab2(){
        let target = this.currentContent==0?"tab2":this.currentContent==1?"tab3":"tab4";
        this.$emit("gotoTab",target+"");
      },
      goindex(){
        this.$router.push('/');
        setTimeout(()=> {
            window.location.reload();
        }, 200);
      },
      goabout(){
        this.$router.push('about');
          setTimeout(()=> {
              window.location.reload();
          }, 200);
      },
      gorecruit(){
        this.$router.push('recruit');
          setTimeout(()=> {
              window.location.reload();
          }, 200);
      }
    },
    data(){
      return{
        currentContent:0,
        textArr:[
          "在区块链技术的创新与实践过程中，我们认识到区块链并不单纯是一种技术，而是一种社会化的“共识信任”理念，这种理念鼓励人们在互联网中建立一套可以被监督并且拥有治理规则的系统。我们积极拥抱区块链技术带来的变革，同时也期待将我们实践和应用区块链技术的经验共享出来，与合作伙伴一同解决区块链应用和推广中仍未解决的问题，而推广这一社会化理念不能依靠一家之力，而需要协同盟友共赢未来。",
          "",
          "",
        ],
        contentTimeout:null,
        freq:8000
      }
    },
    watch: {
      currentContent: function (newV, oldV) {
        let page = this;
        if(this.contentTimeout!=null){clearTimeout(this.contentTimeout)}
        this.contentTimeout = setTimeout(function () {
          page.currentContent==2?page.currentContent=0:(page.currentContent++)
        },this.freq);
      }
    }
  }

</script>

<style scoped>
  @import "../../assets/css/header.css";
  #home .info1 {display: none;}
  #home .picbox {display: none;}
  .displayNone{
    display: none;
  }

  .header{
    background-color: transparent;border: transparent;
    position: absolute;color: rgba(255,255,255,0.5);
  }

  .titleHint{
    margin-bottom: 9vh;
    color: white;
    font-size: 18px;
    display: flex;align-items: center;
    margin-left: auto;
    justify-content: flex-end;
    max-width: 300px;
  }
  .titleHint div{
    width: 90px;
    height: 0px;
    border: 1px solid white;
    margin: 0 20px;
  }

  .contentContainer{
    
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    /* background: -webkit-linear-gradient(left top,#04202E,#0A2634,#183545); 
    background: -o-linear-gradient(bottom right,#04202E,#0A2634,#183545); 
    background: -moz-linear-gradient(bottom right,#04202E,#0A2634,#183545); 
    background: linear-gradient(to bottom right,#04202E,#0A2634,#183545);  */
  }
  .content{
    padding-top: 18vh;
    height: 90vh;
  }
  .mainGroup{
    width: 100%;
    height: 100%;
    padding:0 200px;
    position: relative;
  }
  .titleContent{
    max-width: 600px;
    font-size: 20px;
    color: white;
    text-align: left;
    line-height: 50px;
    margin-left: auto;
    right: 0;
    top: 0;
    position: relative;
    min-height: 300px;
    transition: all 0.3s;
  }
  .titleContentBtn{
    position: absolute;
    left: 0;
    bottom: -115px;
    max-width: 210px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 18px;
    padding: 18px 70px;
    transition: all 0.3s;
  }
  .titleContentBtn:hover{
    border: 1px solid #5a6eaa;
    background-color: #5a6eaa;
    cursor: pointer;
  }

  .logo{
    display: block;
    position: absolute;
    height: 118px;
    width: 283px;
    top: 200px;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
  .smallLogo{
    position: absolute;
    left: 80px;
    top: 25px;
    height: 30px;
    display: none;
  }

  .rightBottomBtn{
    position: absolute;
    right: 200px;
    bottom: 0;
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

  .leftBottomBtnGroup{
    position: absolute;
    bottom:-10px;
    color: white;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 60px;
  }
  .leftBottomBtn{
    padding: 10px 10px;
    margin-right: 60px;
    text-align: center;
    transition: all 0.3s;
    padding-top: 0px;
  }
  .btnInactive{
    padding-top: 10px;
  }
  .btnInactive:hover{
    padding-top: 0px;
  }
  .leftBottomBtn span{
    display: block;
    margin-bottom: 5px;
    transition: all 0.3s;
  }
  .leftBottomBtn img{
    display: block;
    height: 10px;
    margin-left: auto;margin-right: auto;
    transition: all 0.3s;
  }
  .btnInactive img{
    opacity: 0;
  }
  .ptxt {font-size: 40px;line-height: 72px;}
  .ptxt1 {font-size: 60px;line-height: 1.5;}
  .ptxt2 {font-size: 22px;margin-top: 10px;background:#2831aa;width: 320px;height: 40px;line-height: 40px;text-align: center;}
  .ptxt3 {font-size: 16px;}


  @media screen and (max-width: 1500px){
    .mainGroup{
      padding:0 120px;
    }
    .rightBottomBtn{
      right: 120px;
    }
  }
  @media screen and (max-width: 1279px){
    .mainGroup{
      padding:0 80px;
    }
    .rightBottomBtn{
      right: 80px;
    }
    .logo{
      display: none;
    }
    .smallLogo{
      display: block;
    }
    .titleContent{
      font-size:40px;
      line-height: 65px;
      max-width: 440px;
    }
    .titleContentBtn{
      bottom: -75px;
    }
  }
  @media screen and (max-width: 750px){
    .mainGroup{
      padding:0 30px;
    }
    .rightBottomBtn{
      right: 30px;
    }
    .titleHint{
      font-size: 14px;
    }
    .titleHint div{
      width: 40px;
      margin: 0 5px;
    }
    .titleContent{
      /* font-size: 30px; */
      font-size:16px;
      line-height: 30px;
      /* line-height: 50px; */
      max-width: 330px;
    }
    .titleContentBtn{
      bottom: -80px;
    }
    .smallLogo{
      left: 30px;
    }
    .leftBottomBtnGroup{
      display: none;
    }





  }
</style>
