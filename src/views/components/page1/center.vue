<template>
    <div class="main">
      <el-dialog @open="show()" title="无接触测量中..." :visible.sync="modal" :close-on-click-modal="false" class="class_dialog_hospital">
              <video ref="videoElement" autoplay></video>
            </el-dialog>
        <svg class="guideLine" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 783 500">
            <image x="5%" y="20" :xlink:href="$images.center" width="90%" height="100%"/>
            <image v-if='!status' x="250" y="320" :style="{opacity: number}" :xlink:href="$images.normal_bg" width="250"
                   height="170"/>
            <image v-else id="textBox_1" x="220" y="110" :xlink:href="$images.sensitive_bg" width="300" height="170"/>


            <template>
                <g v-for="(item, index) in swiperData" :key="item.title" v-on:click="selectBegin(item.title)">
                    <image class="bg_img" :x="item.image.x" :y="item.image.y"
                           :xlink:href="item.status?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" :x="item.pos.x" :y="item.pos.y" :id="'title_'+ (index + 1)" width="100" height="40" >
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:item.status?'#FFDBDB':''}">
                                <span class="titleText">{{ item.title }}</span>
                                <Rate :show-text="false" disabled v-model="item.rate"></Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="textBox" width="250" height="170" >
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">{{item.title}}</div>
                                <div class="psychologyContent">
                                  {{ item.descript }}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path :id="'line_'+ (index + 1)" :class='item.path.className' :d="item.path.d" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
            </template>
        </svg>

    </div>
</template>

<script>
export default {
    name: '',
    props: {
        selectRangeDate: Array,
        _width: Number
    },
    mounted() {
          this.setChart();
    },
    data() {
        return {
            mediaRecorder: null,
            mediaStream: null,
            recordedChunks: [],
            recording: false,
            timer1: null,
            modal:false,
            status: false,
            timer: null,
            rid: null,
            index: 0,
            number: 0,
            length: 0,
            frames: 0,
            isIE: false,
            swiperData: [
                {
                    image: {
                        x: 85,
                        y: 354
                    },
                    status: false,
                    rate:0,
                    title: '心率',
                    descript: '心率是心脏每分钟跳动的次数，反映心脏功能和体能状态。正常成年人的静息心率一般在60-100次/分钟之间。',
                    pos: {
                      x: 102,
                      y:364
                    },
                    path: {
                        d: 'M150,402 L150,432 250,432',
                        className: 'swap1'
                    }
                },
                {
                    image: {
                        x: 58,
                        y: 224
                    },
                    status: false,
                    rate:0,
                    title: '血压',
                    descript: '血压由收缩压（高压）和舒张压（低压）组成，反映血液在动脉中的压力。正常血压范围一般为120/80 mmHg。',
                    pos: {
                      x: 76,
                      y:232
                    },
                    path: {
                        d: 'M125,272 L125,337 250,337',
                        className: 'swap2'
                    }
                },
                {
                    image: {
                        x: 87,
                        y: 110
                    },
                    status: false,
                    rate:0,
                    title: '血氧饱和度',
                    descript: '血氧饱和度是血液中氧气的含量，正常值在95%-100%之间。低于90%可能表示低氧血症。',
                    pos: {
                        x: 105,
                        y:118
                    },
                    path: {
                        d: 'M207,135 L260,135 260,322',
                        className: 'swap3'
                    }
                },
                {
                    image: {
                        x: 310,
                        y: 40
                    },
                    status: false,
                    rate:0,
                    title: '血糖',
                    descript: '血糖水平反映体内葡萄糖的浓度，正常空腹血糖范围为70-99 mg/dL（3.9-5.5 mmol/L）。',
                    pos: {
                      x: 328,
                      y: 49
                    },
                    path: {
                        d: 'M319,66 L279,66 279,321',
                        className: 'swap4'
                    }
                },
                {
                    image: {
                        x: 522,
                        y: 110
                    },
                    status: false,
                    rate:0,
                    title: '心率变异性',
                    descript: '心率变异性反映自主神经系统的活动，较高通常表示更好的健康状态和更好的适应能力。',
                    pos: {
                        x: 538,
                        y: 118
                    },
                    path: {
                        d: 'M538,135 L485,135 485,322',
                        className: 'swap3'
                    }
                },
                {
                    image: {
                        x: 560,
                        y: 224
                    },
                    status: false,
                    rate:0,
                    title: '心电图',
                    descript: '心电图反映心脏的电生理活动，用于检测心律不齐、心肌梗塞等心脏问题。',
                    pos: {
                        x: 578,
                        y: 230
                    },
                    path: {
                        d: 'M625,272 L625,337 500,337',
                        className: 'swap2'
                    }
                },
                {
                    image: {
                        x: 538,
                        y: 354
                    },
                    status: false,
                    rate:0,
                    title: '呼吸频率',
                    descript: '呼吸频率是每分钟的呼吸次数，正常成人的呼吸频率为12-20次/分钟。',
                    pos: {
                        x: 555,
                        y: 364
                    },
                    path: {
                        d: 'M600,402 L600,432 500,432',
                        className: 'swap1'
                    }
                }
            ],
            psychologicalRate: 0,
            speechRate: 0,
            internetPreferenceRate: 0,
            riskRate: 0,
            makeFriendRate: 0,
            entertainmentPreferenceRate: 0,
            consumptionCharacteristicsRate: 0,
            psychologicalStatus: false,
            speechStatus: false,
            internetPreferenceStatus: false,
            riskStatus: false,
            entertainmentPreferenceStatus: false,
            makeFriendStatus: false,
            consumptionCharacteristicsStatus: false,
        }
    },
    methods: {
        stopRecordingAfterTime() {
            setTimeout(() => {
                this.stopRecording();
            }, 10000); // 10 seconds
        },
      show(){
          setTimeout(() => {
            this.videoElement = this.$refs.videoElement;
          }, 0);
      },
        selectBegin(name){
          if (name=='心率' && !this.recording){
            this.startRecording();
            this.modal=true;
            this.stopRecordingAfterTime();

          }
        },
        startRecording() {
          // console.log(this.videoElement)
          navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then(stream => {
              this.mediaStream = stream;
              this.mediaRecorder = new MediaRecorder(stream);

              // 设置录制事件监听器
              this.mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                  this.recordedChunks.push(event.data);
                }

              };

              this.mediaRecorder.start();
              this.recording = true;

              // 将媒体流与视频元素关联以实时预览录制内容
              // this.videoElement.srcObject = stream;
              this.videoElement.srcObject = stream;
              // } else {
              //   // Avoid using this in new browsers, as it is going away.
              //   this.videoElement.src = URL.createObjectURL(stream);
              // }
            })
            .catch(error => {
              console.error('无法启动录制:', error);
            });
        },

        stopRecording() {
          if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
            this.mediaRecorder.stop();
            this.recording = false;

            // 停止并释放媒体流
            this.mediaStream.getTracks().forEach(track => track.stop());

            // 处理或保存录制的数据
            this.processRecordedData();
            this.modal = false;
          }
        },
        processRecordedData() {
          if (this.recordedChunks.length > 0) {
            const recordedBlob = new Blob(this.recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(recordedBlob);
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = url;
            a.download = 'recordedVideo.webm';
            a.click();
            URL.revokeObjectURL(url);
            // 处理或保存录制的 Blob 数据
            console.log('录制完成，数据处理或保存:', recordedBlob);

            // 清空录制的数据
            this.recordedChunks = [];
          }
        },
        // mouseenter
        onmouseenter(e) {
            document.querySelectorAll('.text').forEach(item=>item.style.opacity = 0);
            document.querySelectorAll('.swap1').forEach(item=>item.style.strokeDashoffset = 130);
            document.querySelectorAll('.swap2').forEach(item=>item.style.strokeDashoffset = 190);
            document.querySelectorAll('.swap3').forEach(item=>item.style.strokeDashoffset = 240);
            document.querySelectorAll('.swap4').forEach(item=>item.style.strokeDashoffset = 295);
            cancelAnimationFrame(this.rid);
            this.rid = null;
            clearTimeout(this.timer)
            this.timer = null;
            this.animation(Number(e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1)), true);
        },
        //mouseleave
        onmouseleave() {
            this.animation(1, false);
        },
        frame() {
            cancelAnimationFrame(this.rid);
            this.rid = null;
            this.rid = requestAnimationFrame(this.frame);
            let line = document.querySelector("#line_" + this.index);
            line.style.strokeDashoffset = this.frames;
            line.getPointAtLength(this.length - this.frames);
            line.getPointAtLength((this.length - this.frames + 2) % this.length);
            if (this.index > 1) {
                line = document.querySelector("#line_" + (this.index - 1));
                this.$refs.textBox[this.index - 2].style.opacity = 0;
                line.style.strokeDashoffset = line.style.strokeDasharray;
            }
            if (this.index === 1) {
                for (let i = 2; i < 8; i++) {
                    line = document.querySelector("#line_" + i);
                    this.$refs.textBox[i - 1].style.opacity = 0;
                    line.style.strokeDashoffset = line.style.strokeDasharray;
                }
            }
            this.$refs.textBox[this.index - 1].style.opacity = this.number;
            this.number += 5 / this.length;
            this.frames -= 5;
            if (this.frames <= -5) {
                cancelAnimationFrame(this.rid);
                this.rid = null;
            }
        },
        animation(i, boolean) {
            clearTimeout(this.timer);
            cancelAnimationFrame(this.rid);
            this.rid = null;
            this.timer = null;
            if (i > 7) {
                i = 1;
            }
            this.swiperData.forEach(item=>item.status = false);
            this.swiperData[i-1].status = true;
            const line = document.querySelector("#line_" + i);
            this.length = line.getTotalLength();
            line.style.strokeDasharray = this.length;
            line.style.strokeDashoffset = this.length;
            this.frames = this.length;
            this.index = i;
            this.number = 0;
            this.frame();
            if (!boolean) {
                clearTimeout(this.timer);
                this.timer = null;
                this.timer = setTimeout(() => {
                    this.animation(i + 1, boolean);
                }, 5000);
            }
        },
        // 中心图
        setChart() {
            clearTimeout(this.timer1);
            clearTimeout(this.timer);
            cancelAnimationFrame(this.rid);
            this.frames = 0;
            this.rid = null;
            this.timer = null;
            this.timer1 = null
            this.timer1 = setTimeout(() => {
                this.animation(1, false);
            }, 5000);

        }
    },
    watch: {
        selectRangeDate: function () {
            this.setChart()
        }
    },
    created() {
        if (!window.SVGForeignObjectElement) {
            this.isIE = true;
        }
    },
    beforeDestroy() { // 离开页面动画初始化
        document.querySelectorAll('.text').forEach(item=>item.style.opacity = 0);
        document.querySelectorAll('.swap1').forEach(item=>item.style.strokeDashoffset = 130);
        document.querySelectorAll('.swap2').forEach(item=>item.style.strokeDashoffset = 190);
        document.querySelectorAll('.swap3').forEach(item=>item.style.strokeDashoffset = 240);
        document.querySelectorAll('.swap4').forEach(item=>item.style.strokeDashoffset = 295);
        cancelAnimationFrame(this.rid);
        this.rid = null;
        clearTimeout(this.timer)
        clearTimeout(this.timer1)
        this.timer = null;
        this.timer1 = null;
        this.swiperData.forEach(item=>item.status = false);
    },

}
</script>


<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;

    .guideLine {
        width: 100%;
        height: 100%;

        #textBox_1 {
            opacity: 0;
        }

        .title_1 {
            font-size: 15px;
            cursor: pointer;

            .title-text-box {
                background: rgba(0, 0, 0, 0);
                justify-content: center; //子元素水平居中
                align-items: center; //子元素垂直居中
                display: -webkit-flex;
                height: 100%;

                p {
                    width: 100%;
                    background: rgba(0, 0, 0, 0);
                    color: #A0E8FF;
                    font-size: 15px;
                    text-align: center;

                    .titleText {
                        margin-left: -5px;
                        font-size: 15px;
                        display: block;
                    }

                    /deep/ .ivu-rate {
                        font-size: 14px;

                        .ivu-rate-star {
                            margin-right: 6px;
                        }
                    }

                }
            }
        }

        .text {
            opacity: 0;
            color: #fff;
            font-size: 15px;
            text-align: center;

            .text-box {
                background: rgba(0, 0, 0, 0);
                justify-content: center; //子元素水平居中
                align-items: center; //子元素垂直居中
                display: -webkit-flex;

                .promptBox {
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;

                    .promptTitle {
                        color: #fff;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }

                    p {
                        background: rgba(0, 0, 0, 0);
                        color: #A0E8FF;
                        font-size: 16px;
                        text-align: left;
                    }
                }

                .psychologyContent {
                    color: #AFE5FB;
                    font-size: 16px;
                    text-align: left;

                    div {
                        line-height: 2em;

                        span {
                            &:first-child {
                                color: #FED723;
                                cursor: pointer;
                            }
                        }
                    }
                }

            }
        }

        .swap1 {
            stroke-dasharray: 130;
            stroke-dashoffset: 130;
        }

        .swap2 {
            stroke-dasharray: 190;
            stroke-dashoffset: 190;
        }

        .swap3 {
            stroke-dasharray: 240;
            stroke-dashoffset: 240;
        }

        .swap4 {
            stroke-dasharray: 295;
            stroke-dashoffset: 295;
        }

        .circle-point {
            &:hover {
                fill: #000;
            }
        }
    /*标题样式*/
      .class_dialog_hospital .el-dialog__title{
        font-size: 14px;
      }

      /*头区样式*/
      .class_dialog_hospital .el-dialog__header{
        height: 26px;
        background: #e6e6e6;
        padding: 4px 0 4px 10px;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
      }

      /*头区退出按钮样式*/
      .class_dialog_hospital .el-dialog__headerbtn{
        top: 10px ;
        right: 10px;
        font-size: 16px;
      }

        // .swap4{
        // stroke-dasharray: 110;
        // stroke-dashoffset: 110;
        // }
    }
}
</style>
