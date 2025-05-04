<template>
  <div class="min-h-screen bg-muted-grad">


    <!-- 主內容區 -->
    <main class="p-0 sm:p-8 relative">
      <!-- 分類篩選雲 -->
      <div
        class="sticky top-4 z-40 mb-8 mx-4 md:mx-8 p-4 rounded-2xl backdrop-blur-xl bg-white/50 shadow-soft-lg transition-all duration-500 hover:shadow-soft-2xl">

        <div class="max-w-4xl mx-auto">
          <header class="mb-12 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                自願被吃的豬豬
              </span>
            </h1>
            <div class="flex items-center justify-center">
              <img width="300" height="300" src="../assets/pig.png" />
            </div>
            <!-- 漸變分隔線 -->
            <div
              class="relative my-8 h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-60" />
          </header>

          <!-- 特色問題輪播區 -->
          <div
            class="mb-16 group/carousel relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-inner-xl cursor-pointer">
            <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <div v-for="(question, index) in featuredQuestions" :key="index" @click="$router.push({
                name: 'CaseDetails',
                params: { id: question.id }
              })"
                class="flex-[0_0_320px] space-y-4 rounded-xl bg-white/80 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]">
                <div class="flex items-center gap-3">
                  <div class="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-400" />
                  <h3 class="text-lg font-semibold text-gray-800">{{ question.title }}</h3>
                </div>
                <p class="text-gray-600 line-clamp-3">{{ question.content }}</p>
                <div class="flex flex-col items-center gap-2">
                  <div class="w-full">
                    <span class="text-sm text-purple-600">燒腦度</span>
                    <div class="h-2 w-full rounded-full  from-purple-400 to-pink-400 transition-all duration-500"
                      :class="question.tags[0].color" :style="{ width: question.tags[0].progress * 100 + '%' }" />
                  </div>
                  <div class="w-full">
                    <span class="text-sm text-purple-600">爭議程度</span>
                    <div class="h-2 w-full rounded-full  from-purple-400 to-pink-400 transition-all duration-500"
                      :class="question.tags[1].color" :style="{ width: question.tags[1].progress * 100 + '%' }" />
                  </div>
                  <div class="w-full">
                    <div class="text-sm text-purple-600">迷惑值</div>

                    <div class="h-2 w-full rounded-full " :class="question.tags[2].color"
                      :style="{ width: (question.tags[2].progress * 100) + '%' }" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 粒子動效容器 -->
            <div class="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" id="particles-container" />
          </div>

          <!-- 推薦問題瀑布流 -->
          <div class="mb-16">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">你是否有思考過？</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
              <div v-for="(question, index) in recommendedQuestions" :key="index" @click="$router.push({
                name: 'CaseDetails',
                params: { id: question.id }
              })"
                class="relative group rounded-xl bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5">
                <!-- 骨架屏 -->
                <div v-if="!question.loaded" class="animate-pulse space-y-4">
                  <div class="h-4 bg-gray-200 rounded w-3/4" />
                  <div class="h-3 bg-gray-100 rounded w-full" />
                  <div class="h-3 bg-gray-100 rounded w-5/6" />
                </div>
                <template v-else>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500" />
                  </div>
                  <h4 class="font-medium text-gray-800 line-clamp-2 mb-2">{{ question.title }}</h4>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-2">
                      <div class="relative w-6 h-6">
                        <svg class="absolute inset-0" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" class="stroke-current text-gray-200" fill="none"
                            stroke-width="2" />
                          <circle cx="12" cy="12" r="10" class="stroke-current text-purple-500" fill="none"
                            stroke-width="2" :stroke-dasharray="`${question.progress * 62.8} 62.8`"
                            transform="rotate(-90 12 12)" />
                        </svg>
                      </div>
                      <span class="text-sm text-purple-600">{{ Math.round(question.progress * 100) }}%</span>
                    </div>
                    <button class="text-purple-500 hover:text-purple-600 transition-colors">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = ['倫理難題', '思想實驗', '邏輯悖論', '社會哲學']
const selectedCategory = ref('全部')
const isMobile = ref(window.innerWidth < 768)
const tags = ref([
  { label: '人工意識', color: 'bg-purple-400', progress: 0.4 },
  { label: '演算法正義', color: 'bg-blue-400', progress: 0.7 },
  { label: '數位倫理', color: 'bg-pink-400', progress: 0.9 },
  { label: '神經植入', color: 'bg-green-400', progress: 0.2 },
])

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

import { quantumCases } from '../data/cases'

const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};

const featuredQuestions = computed(() => {
  return [...quantumCases].sort(() => Math.random() - 0.5).slice(0, 5)
    .map(q => ({
      id: q.id,
      title: q.title,
      content: stripHtmlTags(q.content),
      tags: q.tags,
    }));
});

const recommendedQuestions = computed(() => {
  return [...quantumCases].sort(() => Math.random() - 0.5).slice(0, 6)
    .map(q => ({
      id: q.id,
      title: q.choices.sort(() => Math.random() - 0.5)[0].title,
      content: stripHtmlTags(q.content),
      tags: q.tags,
      progress: Math.random(),
      loaded: true
    }));
});

onMounted(() => {
  setTimeout(() => {
    recommendedQuestions.value = recommendedQuestions.value.map(q => ({
      ...q,
      loaded: true
    }))
  }, 1500)
})


const handleReveal = (index: number) => {
  router.push({ name: 'CaseDetails', params: { id: quantumCases[index].id } })
}
</script>
