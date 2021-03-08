<template>
  <div class="max-w-6xl  mt-12 mx-auto">
    <h2 class="h2 text-2xl text-center">Mes projets</h2>
    <div class="flex flex-wrap items-start mt-4 justify-center px-8 md:px-0">
      <div class="project">
        <div class="p-5">
          <p class="title font-bold font-title text-xl text-indigo-500">
            Je Veux Consommer Local !
          </p>
          <p class="italic text-sm mb-2">On aime les produits du pays !</p>
          <p>
            Premier projet en Nuxt.js avec un CMS Headless que je mets
            entièrement en production ! Le site est un répertoire d'artisans et
            producteurs de Savoie et Haute-Savoie, ma région natale. Réalisé en
            collaboration avec
            <a href="https://www.instagram.com/memesdespaysdesavoue/"
              >@memesdespaysdesavoue</a
            >, le site a pour but de référencer d'encourager le commerce local.
            Le développment du site est toujours en cours, on l'améliore au fur
            et à mesure.
          </p>
          <p class="mt-1">
            👉
            <a href="https://jeveuxconsommerlocal.fr"
              >jeveuxconsommerlocal.fr</a
            >
          </p>
          <div class="mt-2">
            <div class="pill">Strapi</div>
            <div class="pill">Nuxt.js</div>
            <div class="pill">Tailwind</div>
            <div class="pill">Leaflet</div>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="p-5">
          <p class="title font-bold font-title text-xl text-indigo-500">
            Site personnel
          </p>
          <p class="italic text-sm mb-2">
            Mon propre site, c'est celui où vous vous trouvez en ce moment
          </p>
          <p>
            Cela faisait longtemps que j'avais envie de réaliser mon propre
            site, où je pourrais mettre tout ce qui me concerne
            professionnellement. Quelques mots sur moi, mes compétences, ce que
            j'ai pu faire, et même un petit blog afin de partager mes
            découvertes et mes connaissances !
          </p>
          <div class="mt-2">
            <div class="pill">Nuxt.js</div>
            <div class="pill">NetlifyCMS</div>
            <div class="pill">Tailwind</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project {
  @apply bg-white dark:bg-gray-700 m-2 rounded-xl shadow-lg items-center flex;
  @media screen and (min-width: 768px) {
    flex: 1 0 45%;
    max-width: 45%;
  }
}
.pill {
  @apply bg-indigo-500 rounded-xl text-sm text-white px-3 mr-2 mt-1 inline-block;
  &:first-child {
    margin-right: 0;
  }
}
</style>