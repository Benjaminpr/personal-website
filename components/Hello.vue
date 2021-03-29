<template>
  <div>
    <div
      class="mx-auto max-w-6xl flex items-center mt-10 px-8 md:px-0 flex-col md:flex-row"
    >
      <img
        width="250px"
        height="250px"
        src="~/assets/img/profile_500.jpg"
        loading="lazy"
        class="rounded-full border-indigo-500 dark:border-gray-700 border-4 mb-4 md:mb-0"
        alt=""
      />
      <div class="md:ml-8">
        <p class="font-title font-bold text-3xl">
          Bonjour ! 👋 Je suis <span class="text-indigo-500">Benjamin</span>
          <br />
          développeur
          <span class="text-indigo-500">full stack</span> passionné<br />
        </p>
        <p class="mt-2">
          Depuis tout petit, je suis fan de tout ce qui touche à
          <span class="highlight">la science et aux technologies</span>. J'ai
          fait de cette passion mon métier ! Je suis aujourd'hui un
          <span class="highlight">développeur full-stack</span> en agence de
          communication, travaillant principalement sur du
          <span class="highlight">e-commerce</span>, découvrant de nouvelles
          technos sur mon temps libre.
        </p>
      </div>
    </div>
    <div class="bio">
      <div
        class="flex flex-col text-center md:text-right text-4xl md:text-6xl md:mr-10"
      >
        <span class="font-bold leading-none text-indigo-500">MONTAGNE</span>
        <span class="font-bold leading-none">CUISINE</span>
        <span class="font-bold leading-none text-indigo-500">JEUX-VIDEO</span>
        <span class="font-bold leading-none">TECHNOLOGIE</span>
        <span class="font-bold leading-none text-indigo-500">SCIENCE</span>
      </div>
      <div class="text-center md:text-left">
        <h2 class="h2 text-2xl mb-2">Un peu plus sur moi</h2>
        <p class="mb-1">
          Je suis né au pied du Mont Blanc, dans la vallée de l'Arve. Grandir
          dans cet environnement m'a donné le gout de la montagne et de la
          nature, tant en hiver qu'en été ! Cela m'a aussi inculqué des notions
          d'écologie en me faisant prendre conscience que cet environnement est
          précieux et qu'il faut le préserver.
        </p>
        <p class="mb-1">
          J'adore cuisiner sur mon temps libre, surtout pour faire plaisir à mes
          proches. Découvrir de nouvelles recettes, les réussir après parfois
          plusieurs échecs, mais sans abandonner, je déteste ne pas réussir à
          faire quelque chose ! Grand fan de jeux-vidéo depuis que je sais lire,
          c'est aujourd'hui une passion, mais aussi une source d'inspiration
          dans mon travail.
        </p>
        <p class="mb-1">
          Curieux depuis que je suis tout petit, j'ai toujours aimé apprendre,
          découvrir, particulièrement lorsque ça touche à la science et aux
          nouvelles technologies !
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bio {
  @apply max-w-6xl mx-auto flex mt-10 border-dashed border-t-4 border-b-4 border-indigo-500 py-10 flex-col px-8;
  @screen md {
    @apply flex-row px-0;
  }
}
.highlight {
  @apply bg-indigo-600 text-white px-1;
}
</style>
