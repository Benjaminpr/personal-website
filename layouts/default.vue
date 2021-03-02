<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  @apply bg-gray-100;
  border-top: 8px solid theme("colors.royalblue.500");
  font-family:
    'Space Grotesk',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  &.dark-mode{
    @apply bg-gray-900;
  }
  &.sepia-mode{
    @apply bg-yellow-200;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
