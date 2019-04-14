<template>
  <div class="appContainer">
    <el-row class="row-flex">
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="font-large" v-text="getMessage"/>
          </div>
          <el-row type="flex" justify="center">
            <el-col v-if="isCompleted" :span="24">
              <img height="100%" width="100%" :key="1" :src="getMostClicked()">
            </el-col>
            <el-col v-else :span="22">
              <el-card shadow="hover">
                <div class="flex-container">
                  <el-row style="height:220px">
                    <div>
                      <transition name="slide" mode="out-in">
                        <img width="100%" class="clickable" :key="getImageName" :src="getImagePath">
                      </transition>
                    </div>
                  </el-row>
                  <el-row class="top-padding" type="flex" justify="space-around">
                    <div>
                      <el-button
                        icon="el-icon-error"
                        type="danger"
                        round
                        @click="nextImage(false)"
                      >No! It's Not.</el-button>
                    </div>
                    <div>
                      <el-button
                        type="success"
                        icon="el-icon-success"
                        round
                        @click="nextImage(true)"
                      >Yes! It is.</el-button>
                    </div>
                  </el-row>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ImageGallary",
  props: {
    msg: String
  },
  data() {
    return {
      imageList: [],
      traversList: [],
      currentImage: null,
      previousImage: null,
      base_url: process.env.BASE_URL
    };
  },
  computed: {
    getImagePath() {
      return `./img/${this.getImageName}`;
    },
    getImageName() {
      return this.currentImage.name;
    },
    isCompleted() {
      return this.traversList.length === this.imageList.length;
    },
    getMessage() {
      return this.hasNoSelection() && this.isCompleted
        ? "Seems You are a Robot !"
        : this.isCompleted
        ? "Awesome ! Your Most Likely Cat is"
        : this.msg;
    }
  },
  created() {
    //this.$http.get("/getImages").then(response => (this.imageList = imageList));
    this.loadImages();
    this.currentImage = this.getNewImage();
  },
  mounted() {},
  methods: {
    getImageObject(name) {
      return {
        name: `${name}.jpg`,
        clicks: 0
      };
    },
    getNewImage() {
      let name = this.getRandomName();
      const image = this.imageList.find(image => image.name === name);
      this.traversList = Array.from(new Set([...this.traversList, image]));
      return image;
    },
    getRandomName() {
      let randomIndex = Math.floor(Math.random() * this.imageList.length) + 1;
      return `${randomIndex}.jpg`;
    },
    nextImage(ans) {
      ans && ++this.currentImage.clicks;
      this.currentImage = this.getNewImage();
    },
    hasNoSelection() {
      return this.traversList.every(image => image.clicks === 0);
    },
    loadImages() {
      let imagelist = Array(13).fill(0);
      for (let index = 1; index < imagelist.length; index++) {
        let imageItem = this.getImageObject(index);
        this.imageList.push(imageItem);
      }
      console.log(this.imageList);
    },
    getMostClicked() {
      let maxValue = this.traversList[0];
      for (let index = 0; index < this.traversList.length; index++) {
        const currentImage = this.traversList[index];
        if (maxValue.clicks < currentImage.clicks) {
          maxValue = currentImage;
        }
      }
      return this.hasNoSelection() ? `./img/12.jpg` : `./img/${maxValue.name}`;
    }
  }
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
/* .slide-enter-active { position:absolute } */
.slide-leave {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 100ms ease-out;
}
.font-large {
  font-size: 20px;
  font-weight: 600;
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.appContainer {
  width: 600px;
}
</style>
