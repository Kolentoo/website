<template>
    <div id="home">
      <canvas></canvas>
      <head-nav ref="header"></head-nav>
      <tab1 id="tab1" ref="tab1" @gotoTab="gotoTab" slot="css1 pic">
      </tab1>
      <tab2 id="tab2" ref="tab2" @gotoTab="gotoTab"></tab2>
      <tab3 id="tab3" ref="tab3" @gotoTab="gotoTab"></tab3>
      <tab4 id="tab4" ref="tab4" @gotoTab="gotoTab"></tab4>
      <foot-nav></foot-nav>
    </div>
</template>

<script>
  import HeadNav from '@/pages/header/myHeader'
  import FootNav from '@/pages/footer/myFooter'
  import tab1 from '@/pages/testPage/tab1'
  import tab2 from '@/pages/testPage/tab2'
  import tab3 from '@/pages/testPage/tab3'
  import tab4 from '@/pages/testPage/tab4'
  import $ from 'jquery'

  export default {
    components: {
      HeadNav:HeadNav,
      FootNav:FootNav,
      tab1:tab1,
      tab2:tab2,
      tab3:tab3,
      tab4:tab4,
    },
    name: "testPage",
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
    data(){
      return{
        showHeader:false,
        isPhoneSize:false,
      }
    },
    methods:{
      gotoTab(target){
        if(target == null)return;
        let targetEle = null
        switch (target) {
          case "tab1":
            targetEle = document.getElementById("tab1");
            break;
          case "tab2":
            targetEle = document.getElementById("tab2");
            break;
          case "tab3":
            targetEle = document.getElementById("tab3");
            break;
          case "tab4":
            targetEle = document.getElementById("tab4");
            break;
        }
        this.scrollTo(targetEle,800);
      },
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

<style scoped>
  body {
      margin: 0;
      overflow: hidden;
  }
  canvas {
      position: absolute;
      top: 0;
      left: 0;
  }
 
  
  
  

</style>
