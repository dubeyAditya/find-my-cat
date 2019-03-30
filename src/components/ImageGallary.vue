<template>
  <div class="appContainer">
    <el-row class="row-flex">
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="font-large">{{ msg }}</span>
          </div>
          <el-row :gutter="20">
            <div v-if="isCompleted">Hurry!!!</div>
            <el-col v-else :span="12" :offset="6">
              <el-card shadow="hover">
                <div class="flex-container">
                  <el-row>
                    <transition name="slide" mode="out-in">
                      <img
                        height="100%"
                        width="100%"
                        class="clickable"
                        :key="getImageName"
                        :src="getImagePath"
                        @click="nextImage"
                      >
                    </transition>
                  </el-row>
                  <el-row type="flex" justify="space-between">
                    <div>
                      <el-button
                        icon="el-icon-error"
                        type="danger"
                        round
                        @click="nextImage(true)"
                      >No! It's Not.</el-button>
                    </div>
                    <div>
                      <el-button
                        type="success"
                        icon="el-icon-success"
                        round
                        @click="nextImage(false)"
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
      imageList: new Set(),
      currentImage: { name: "1.jpg", clicks: 0 },
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
      return this.imageList.size === 12;
    }
  },
  created() {
    //this.$http.get("/getImages").then(response => (this.imageList = imageList));
  },
  methods: {
    getNewImage() {
      let name = Math.floor(Math.random() * (12 - 1)) + 1;
      const image = {
        name: `${name}.jpg`,
        clicks: 0
      };
      const existing = [...this.imageList].find(image => image.name === name);
      if (!existing) {
        this.imageList.add(image);
      }
      return image;
    },
    nextImage(ans) {
      ans ? ++this.currentImage.clicks : "";
      this.currentImage = this.getNewImage();
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
  transition: all 300ms ease-out;
}
.font-large {
  font-size: 20px;
  font-weight: 600;
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
}
</style>
