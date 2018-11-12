<template>
  <div class="vue-img-captcha">
    <canvas class="captcha-canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'vue-imgcaptcha',
    created () {
      console.log(this.config)
      if (this.config) {
        this.options = Object.assign(this.options, this.config)
      }
    },
    mounted() {
      this.init()
    },
    data () {
      return {
        numLib: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			  letterLib: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			  textLib: ['好', '莫', '高', '这', '及', '鑫', '测', '佘', '碗', '蔡', '庵'],
			  fontStyleLib: ['normal', 'italic', 'oblique'],
        fontWeightLib: [100, 400, 700, 900],
        lineNum: 5,
        dotNum: 80,
        options: {
          length: 4,
          height: 40,
          width: 140,
          type: 'mixture'
        }
      }
    },
    props: {
      config: {
        type: Object
      }
    },
    methods: {
      // 初始化
      init () {
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext("2d")
        canvas.height = this.options.height
        canvas.width = this.options.width
        canvas.style.cursor = 'pointer'
        this.refresh(ctx)
        canvas.addEventListener('click', (e) => {
          this.refresh(ctx)
        })
      },
      // 刷新验证码
      refresh (ctx) {
        ctx.textBaseline="middle"
        // 绘制背景
        this.drawBackground(ctx)
        // 绘制字体
        let width = this.options.width / this.options.length
        for (let k = 0; k < this.options.length; k++) {
          this.drawFont(ctx, width * k, width)
        }
        // 绘制干扰线
        for (let i = 0; i < this.lineNum; i++) {
          this.drawLine(ctx)
        }
        // 绘制干扰点
        for (let j = 0; j < this.dotNum; j++) {
          this.drawDot(ctx)
        }
      },
      // 画背景
      drawBackground (ctx) {
        let color = this.getRandomColor(170, 220)
        ctx.fillStyle = color
        ctx.fillRect(0, 0, this.options.width, this.options.height)
      },
      // 画字体
      drawFont (ctx, startLeft, width) {
        let startX = this.getRandomNum(startLeft, startLeft + width / 3),
            startY = this.getRandomNum(this.options.height / 3, this.options.height / 2)
        let lib = this.letterLib.concat(this.numLib)
        let font = lib[this.getRandomNum(0, lib.length)]
        let fontSize = this.getRandomNum((this.options.height / 3) * 2, this.options.height) + 'px'
        let fontWeight = this.fontWeightLib[this.getRandomNum(0, this.fontWeightLib.length)]
        let fontStyle = this.fontStyleLib[this.getRandomNum(0, this.fontStyleLib.length)]
        let angle = this.getRandomNum(-30, 30) 
        let color = this.getRandomColor(20, 130)
        ctx.fillStyle = color
        ctx.font = fontStyle + ' ' + fontWeight + ' ' + fontSize + ' SimHei'
        // 设置旋转角度和坐标原点
        ctx.translate(startX, startY)
        ctx.rotate(angle * Math.PI / 180)
        ctx.fillText(font, 0, 0)
        // 还原旋转角度和坐标原点
        ctx.rotate(-angle * Math.PI / 180)
        ctx.translate(-startX, -startY)
      },
      // 画干扰线
      drawLine (ctx) {
        let startX = this.getRandomNum(0, this.options.width / 4),
            startY = this.getRandomNum(0, this.options.height)
        let endX = this.getRandomNum((this.options.width / 4) * 3, this.options.width),
            endY = this.getRandomNum(0, this.options.height)
        let color = this.getRandomColor(30, 120)
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = color
        ctx.stroke()
      },
      // 画干扰点
      drawDot (ctx) {
        let centerX = this.getRandomNum(0, this.options.width),
            centerY = this.getRandomNum(0, this.options.height)
        let color = this.getRandomColor(30, 120)
        ctx.beginPath()
        ctx.arc(centerX, centerY, 1.2, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
      },
      // 产生随机数
      getRandomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      // 产生随机颜色
      getRandomColor (min, max) {
        let r = this.getRandomNum(min, max),
            g = this.getRandomNum(min, max),
            b = this.getRandomNum(min, max)
        return 'rgb('+ r +', '+ g +', '+ b +')'
      }
    }
  }  
</script>

<style lang="scss">

</style>

