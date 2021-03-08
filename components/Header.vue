<template>
  <div class="container mx-auto flex justify-between mt-3 text-xl">
    <div class="brand ml-5 md:mr-0">Benjamin</div>
    <div class="flex items-center">
      <!--
      <div class="nav flex">
        <a href="#">A propos</a>
        <a href="#">Projets</a>
        <a href="#">Blog</a>
      </div>
      -->
      <div class="mode-selector mr-5 md:mr-0">
        <transition name="slide-fade">
          <svg
            @click="changeColor('dark')"
            v-if="activeMode('dark')"
            class="color-icons moon"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 480 480"
            style="enable-background: new 0 0 480 480"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M459.782,347.328c-4.288-5.28-11.488-7.232-17.824-4.96c-17.76,6.368-37.024,9.632-57.312,9.632
			c-97.056,0-176-78.976-176-176c0-58.4,28.832-112.768,77.12-145.472c5.472-3.712,8.096-10.4,6.624-16.832
			S285.638,2.4,279.078,1.44C271.59,0.352,264.134,0,256.646,0c-132.352,0-240,107.648-240,240s107.648,240,240,240
			c84,0,160.416-42.688,204.352-114.176C464.55,360.032,464.038,352.64,459.782,347.328z"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </transition>
        <transition name="slide-fade">
          <svg
            @click="changeColor('light')"
            v-if="activeMode('light')"
            class="color-icons sun"
            id="Layer_1"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx="256" cy="256" r="144" />
              <path
                d="m256 80c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z"
              />
              <path
                d="m256 512c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z"
              />
              <path
                d="m496 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
              />
              <path
                d="m64 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
              />
              <path
                d="m391.765 136.235c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.249-6.248 16.38-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.941 33.941c-3.125 3.125-7.22 4.687-11.314 4.687z"
              />
              <path
                d="m86.294 441.706c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.25-6.248 16.381-6.248 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.942 33.942c-3.124 3.123-7.218 4.686-11.313 4.686z"
              />
              <path
                d="m425.706 441.706c-4.095 0-8.189-1.562-11.313-4.686l-33.941-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.108 10.106 2.812 27.313-11.314 27.313z"
              />
              <path
                d="m120.235 136.235c-4.095 0-8.189-1.562-11.313-4.686l-33.942-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.109 10.107 2.813 27.313-11.313 27.313z"
              />
            </g>
          </svg>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    changeColor(color) {
      console.log(this.$colorMode.value);
      this.$colorMode.value = color;
    },
    activeMode(mode) {
      if (mode == this.$colorMode.value) {
        return false;
      }
      return true;
    },
  },
};
</script>
<style lang="scss">
html.dark {
  .color-icons {
    &.sun {
      fill: white;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.nav {
  a {
    @apply mx-3 no-underline text-black;
  }
}
.dark{
  .nav {
  a {
    @apply mx-3 no-underline text-white;
  }
}
}
.mode-selector {
  @apply relative ml-5;
  height: 30px;
  width: 30px;
  .color-icons {
    position: absolute;
    &.sun {
      max-width: 30px;
    }
    &.moon {
      margin: 3px 0;
      max-width: 24px;
    }
  }
}
</style>