<template>
  <div id="home">
      <h1>
        关于我
      </h1>
    <main v-once class="animate__slideInUp animate__animated">
      <img src="@/assets/img/avatar.jpg" alt="">
      <div class="user_message">
        <p>
          大家好！我叫曹辛鑫，2019年毕业于吉首大学信息科学与工程学院网络工程专业。目前就业与杭州，是一名前端工程师。
        </p>
        <p>
          精通Vue全家桶，熟悉管理系统开发，移动端开发流程，客户端混合开发H5交互等等。
          了解react,微信小程序（暂时没有小程序开发经验，一直都没有机会...）。
        </p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{}
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  #home{
    background:linear-gradient(0deg,#ea6331,#fe913b);
    /*padding: 100px;*/
    h1{
      width: 200px;
      text-align: center;
      margin: 0 auto;
      position: relative;
      line-height: 80px;
      &::after{
        display: block;
        content:'';
        width: 50px;
        height: 5px;
        background-color: cadetblue;
        position: absolute;
        bottom:0;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  main{
    height: auto;
    text-align: center;
    padding: 50px 0;
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    .user_message{
      padding-top: 50px;
      font-size: 20px;
      color: #333;
      line-height: 36px;
      text-align: left;
      text-indent: 2em;
      p{
        padding-bottom: 30px;
      }
    }
  }
  }

</style>
