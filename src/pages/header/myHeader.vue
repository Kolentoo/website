<template>
    <div class="header" v-bind:class="[{'myHidden':isHidden},{'menuOpen':isMenuOpen}]">
      <div class="headerContent">
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
        <a class="headerItem gather" @click="toggleMenu" style="margin-right: 0;padding: 25px 20px">
          <mu-ripple class="mu-ripple-demo menuBtn">
            <div/><div/>
          </mu-ripple>
        </a>
      </div>
      <div style="position: absolute;width: 100%;height: 0px;border-bottom: 1px solid #5a6eaa ;left: 0;top: 79px;"></div>
      <div class="headerMenu">
        <div class="menuLogo">
          <img src="../../assets/img/tab3/logoY.png"/>
        </div>
        <div class="menuSmallLogo">
          <img src="../../assets/img/img_logo.png">
        </div>
        <div class="menuFooter">Copyright © 2018 - 2038  麦迈科技M2KU.com 版权所有</div>

        <div class="menuBtnContainer">
          <a class="headerMenuBtn">
            <mu-menu style="height: inherit !important;" open-on-hover>
              <div class="list-primary"><img style="height:100%" src="@/assets/img/header/icon_cn.png"/>中文</div>
              <mu-list slot="content">
                <mu-list-item button>
                  <mu-list-item-title class="list-sub"><img src="@/assets/img/header/icon_en.png"/><span style="width: 40px">EN</span></mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-title class="list-sub"><img src="@/assets/img/header/icon_cn.png"/><span style="width: 40px">中文</span></mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-menu>
          </a>
          <a class="headerMenuBtn" @click="goindex()">
            <mu-ripple class="mu-ripple-demo headerBtnRight">首页</mu-ripple>
          </a>
          <a class="headerMenuBtn" @click="goabout()">
            <mu-ripple class="mu-ripple-demo headerBtnRight">关于我们</mu-ripple>
          </a>
          <a class="headerMenuBtn" @click="gorecruit()">
            <mu-ripple class="mu-ripple-demo headerBtnRight">人才招聘</mu-ripple>
          </a>
        </div>
      </div>
    </div>
</template>

<style scoped>
  @import "../../assets/css/header.css";
  .headerMenuBtn .list-primary{
    display: flex;
    align-items: center;
    font-size: inherit;
    padding: 10px 0;
    width: 100%;
    justify-content: flex-end;
  }
  .list-sub{
    justify-content: flex-end;
  }
  .menuBtnContainer{
    width: 100%;
    margin-top: 70px;
    overflow: hidden;
  }
  .headerMenuBtn{
    cursor: pointer;
    padding: 10px 80px;
    line-height: 50px;
    min-height: 70px;
    border: transparent;
    font-size: 24px;
    color: white;
    text-align: right;
    transition: all 0.2s;
    position: relative;
    display: block;
    z-index:10000;
  }
  .headerBtnRight{
    justify-content: flex-end;
  }

  .menuLogo{
    position: absolute;
    left: 30px;bottom: 70px;
    width: 30vw;
    max-width: 187px;
    opacity: 0.1;
  }
  .menuLogo img{
    width: 100%;
  }
  .menuSmallLogo{
    position: absolute;
    left: 30px;
    top: 30px;
    width: 14vw;
    max-width:110px;
  }
  .menuSmallLogo img{
    width: 100%;
  }
  .menuFooter{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 25px;
    text-align: center;
    color: #306582;
    font-size: 12px;
    line-height: 17px;
  }

  .headerMenu{
    width: 100%;
    height: calc(100vh - 80px);
    position: relative;overflow: hidden;
  }

  .header{
    background: -webkit-linear-gradient(left top,#04202E,#0A2634,#183545); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right,#04202E,#0A2634,#183545); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right,#04202E,#0A2634,#183545); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right,#04202E,#0A2634,#183545); /* 标准的语法 */
    z-index: 999999;
  }
  .menuOpen{
    height: 100vh;
  }

  .menuBtn{
    width: 60px;
    height: 30px;
  }
  .menuBtn div{
    height: 15px;width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  .menuBtn div:last-child{
    border-top: 0px;
  }

  @media screen and (max-width: 900px){

  }
  @media screen and (max-width: 750px){
    .headerMenuBtn{
      padding: 10px 30px;
      font-size: 20px;
      line-height: 40px;
      min-height: 60px;
    }
  }
</style>

<script>
    export default {
      data(){
        return{
          isHidden:true,
          isGather:false,
          isMenuOpen:false,
        }
      },
      name: "myHeader",
      methods:{
        showHeader(flag){
          if(flag == null)flag = false;
          this.isHidden = flag;
          this.isMenuOpen = false;
        },
        showGather(flag){
          if(flag == null)flag = false;
          this.isGather = flag;
        },
        toggleMenu(){
          this.isMenuOpen = !this.isMenuOpen;
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
        /*logout(){
          this.$router.push({
            path: '/login',
            query:{redirect:this.$route.path}
          })
        }*/
      },
      mounted(){

      }
    }
</script>


