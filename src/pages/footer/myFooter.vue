<template>
    <div class="footer">
      <div class="footerContainer">

        <div class="footerTitle">
          <img src="../../assets/img/img_logo.png">
        </div>

        <div class="footerContent">
          <div class="footerContentBtn" @click="goindex()">
            <mu-ripple>首页</mu-ripple>
          </div>
          <div class="footerContentBtn" @click="goabout()">
            <mu-ripple>关于我们</mu-ripple>
          </div>
          <div class="footerContentBtn" @click="gorecruit()">
            <mu-ripple>人才招聘</mu-ripple>
          </div>
        </div>

        <div class="footerHint">
          Copyright © 2018 - 2038  麦迈科技M2KU.com 版权所有
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "myFooter",
        methods:{
          goindex(){
            this.$router.push('/');
            setTimeout(()=> {
                window.location.reload();
            }, 100);
          },
          goabout(){
            this.$router.push('about');
            setTimeout(()=> {
              window.location.reload();
          }, 100);
          },
          gorecruit(){
            this.$router.push('recruit');
            setTimeout(()=> {
                window.location.reload();
            }, 100);
          }
        }
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    text-align: center;
    background-color: #041C28;
    padding: 35px 0;
    position: relative;
    overflow: hidden;
  }
  .footerContainer{
    width: 100%;
    padding: 0 30px;
  }
  .footerTitle{
    width: 100%;
    text-align: center;
    height: 35px;
    display: block;
  }
  .footerTitle img{
    height: 100%;
  }
  .footerContent{
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    font-size: 16px;
    line-height: 22px;
    color: white;
    flex-wrap: nowrap;
    margin-top: 20px;
  }
  .footerContentBtn{
    cursor: pointer;
    position: relative;
    min-width: 100px;
    margin-right: 10px;
    padding: 5px 10px;
  }
  .footerContentBtn:last-child{
    margin-right: 0;
  }
  .footerHint{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    opacity: 0.6;
    color: white;
    font-size: 12px;
    line-height: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
