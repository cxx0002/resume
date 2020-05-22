<template>
  <div id="app" ref="app" class="app">
    <div style="height: 100%">
    </div>
         <header ref="scroll" :class="offsetTop >=currentHeight?'fixed animate__animated animate__backInDown':''" >
        <ul>
          <li ref="scroll" @click="toTarget(0)">
            <a>Home</a>
          </li>
          <li @click="toTarget(1)"><a>About</a></li>
          <li @click="toTarget(2)"><a>Project</a></li>
          <li @click="toTarget(3)"><a>More</a></li>
        </ul>
        </header>
    <router-view/>
  </div>
</template>

<script>
  import $ from "jquery";

  export default {
    name: 'App',
    data() {
      return {
        currentHeight: 0,
        num: 0,
        offsetTop: 0
      }
    },
    async mounted() {
      window.addEventListener('scroll', this.handleScroll, true)
      this.currentHeight = this.$refs.app.offsetHeight;
      console.log(this.currentHeight);
    },
    destroyed() {
      this.remove()
    },
    methods: {
      compare(propertyName) {
        return function (object1, object2) {
          var value1 = object1[propertyName];
          var value2 = object2[propertyName];
          if (value2 < value1) {
            return 1;
          } else if (value2 > value1) {
            return -1;
          } else {
            return 0;
          }
        };
      },
      async test() {
        await new Promise(resolve => {
          setTimeout(() => {
            console.log('等待mouted调用函数');
            resolve(1);
          }, 3000)
        })
      },
      async test2() {
        try {
          return await new Promise(resolve => {
            setTimeout(() => {
              resolve(2)
            }, 1000)
          })
        } catch (e) {
          throw new Error();
        }
      },
      addScroll() {
        window.addEventListener('scroll', this.handleScroll, true)
      },
      remove() {
        window.removeEventListener("scroll", this.handleScroll, true);
      },
      toTarget(num) {
        let reduce = Math.abs(num - this.num);
        this.num = num;
        $('html').animate({scrollTop: (this.currentHeight) * this.num + this.currentHeight}, 300 * (reduce));
      },
      handleScroll2() {
        if (window.pageYOffset > ((this.currentHeight) * this.num + (this.currentHeight)) && window.pageYOffset < (this.currentHeight) * (this.num + 1)) {
          if (this.num < 3) {
            this.num += 1;
            this.toTarget(this.num);
          }
        }
        if (window.pageYOffset > (this.currentHeight) * (this.num - 1) && window.pageYOffset < ((this.currentHeight) * this.num) - (this.currentHeight)) {
          if (this.num > 0) {
            this.num -= 1;
            this.toTarget(this.num)
          }
        }
        console.log(window.pageYOffset, this.currentHeight)
      },
      handleScroll() {
        this.$nextTick(() => {
          this.offsetTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset;
          localStorage.setItem('offsetTop',JSON.stringify({offsetTop:this.offsetTop}))
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    box-sizing: border-box;
    .fixed {
      position: fixed;
    }

    header {
      z-index: 100;
      left: 0;
      right: 0;
      top: 0;
      height: 60px;
      background-color: #2c3e50;
      color: #f5f5f5;
      line-height: 60px;
      font-size: 20px;

      ul {
        display: flex;
        justify-content: center;

        li {
          width: 100px;
          line-height: 60px;
          text-align: center;
          list-style: none;
          cursor: pointer;
          transition: .5s;

          &:hover {
            background-color: #31503b;
            transition: .5s;
            color: red;
          }

        }

      }
    }
  }
</style>
