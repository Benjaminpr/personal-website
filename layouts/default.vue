<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
html {
  @apply bg-gray-100;
  border-top: 12px solid theme("colors.royalblue.500");
  font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  &.dark {
    a{
  color: theme("colors.royalblue.400");
  text-decoration: underline;
}
    @apply bg-gray-900 text-white;
  }
  &.sepia {
    @apply bg-yellow-200;
  }
  a{
  color: theme("colors.royalblue.600");
  text-decoration: underline;
}
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: theme("colors.royalblue.500");
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
