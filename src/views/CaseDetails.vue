<template>
    <div class="quantum-detail-container relative min-h-screen bg-muted-grad">
        <!-- 動態粒子背景 -->
        <div class="absolute inset-0 opacity-30 z-0" id="quantum-particles" />

        <main class="relative z-10 p-8 md:p-12 max-w-6xl mx-auto">
            <!-- 案例核心內容 -->
            <div class="quantum-card bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-quantum-lg">
                <!-- 非線性時間軸標題 -->
                <h1
                    class="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                    {{ caseData.title }}
                </h1>

                <div
                    class="relative aspect-video rounded-2xl overflow-hidden mt-6 mb-8 shadow-quantum-md hover:shadow-quantum-xl transition-shadow duration-500 group mx-auto max-w-[800px] lg:max-w-[90%] xl:max-w-[80%]">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/25 to-pink-300/15 z-10" />
                    <img :src="caseData.themeImage" alt="量子主題視覺" class="object-cover w-full h-full animate-moire-in"
                        @load="handleImageLoad" />
                </div>

                <!-- 多維度內容切換 -->
                <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    <!-- 主敘述區 -->
                    <div class="space-y-6 text-gray-700">
                        <div class="prose max-w-none">
                            <div class="prose max-w-none" v-html="caseData.content" />
                        </div>
                        <div class="mt-8 space-y-4">
                            <h3 class="text-xl font-semibold text-purple-700">可能的思考方向</h3>
                            <div v-for="(choice, index) in caseData.choices" :key="index"
                                class="branch-card p-4 rounded-xl bg-purple-50/50 hover:bg-purple-100/30 transition-colors cursor-pointer"
                                @click="selectedBranch = index">
                                <div class="flex items-center gap-3">
                                    <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300" />
                                    <span class="font-medium">{{ choice.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="p-6 bg-white/80 rounded-xl shadow-inner-lg">
                            <h3 class="text-lg font-semibold mb-4 text-purple-700">腦袋爆炸分析</h3>
                            <div class="space-y-3">
                                <div v-for="(tag, index) in caseData.tags" :key="index"
                                    class="flex items-center justify-between">
                                    <span class="text-sm">{{ tag.label }}</span>
                                    <div class="w-24 h-2 rounded-full bg-gray-100">
                                        <div class="h-full rounded-full transition-all duration-500" :class="tag.color"
                                            :style="{ width: tag.progress * 100 + '%' }" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 在右側欄位區塊末段新增 -->
                        <div class="sticky top-24 p-6 bg-white/80 rounded-xl shadow-inner-lg">
                            <h3
                                class="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                                思想溯源
                            </h3>
                            <div v-for="(ref, index) in caseData.references" :key="index"
                                class="text-sm text-purple-600 font-mono hover:text-pink-500 transition-colors group">
                                <span class="opacity-70 group-hover:opacity-100 transition-opacity">{{ ref
                                }}</span>
                            </div>
                        </div>
                        <div class="sticky top-24 p-6 bg-white/80 rounded-xl shadow-inner-lg">
                            <h3 class="text-lg font-semibold mb-4 text-purple-700">這些問題是親戚，還是共犯？</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <button v-for="(related, index) in caseData.relatedCases" :key="index"
                                    class="p-3 rounded-lg bg-purple-50/50 hover:bg-purple-100/30 transition-colors text-left">
                                    <div class="text-sm font-medium text-purple-600">{{ related.title }}</div>
                                    <div class="text-xs text-purple-400 mt-1 line-clamp-2">{{ related.preview }}</div>
                                </button>
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
import { useRoute } from 'vue-router'

const handleImageLoad = (event: Event) => {
    const img = event.target as HTMLImageElement
    img.classList.add('moire-active')
}

const route = useRoute()
const caseId = computed(() => route.params.id as string)

const selectedBranch = ref(0)

import { quantumCases } from '../data/cases'

const caseData = computed(() => {
    const foundCase = quantumCases.find(c => c.id === caseId.value)
    return foundCase || quantumCases[0]
})
</script>

<style scoped>
@keyframes moire-entrance {
    0% {
        opacity: 0;
        filter: contrast(0.5) saturate(2);
    }

    100% {
        opacity: 1;
        filter: contrast(1) saturate(1);
    }
}

.animate-moire-in {
    animation: moire-entrance 1.2s cubic-bezier(0.4, 0, 0.2, 1.1) forwards;
}

@media (max-width: 768px) {
    .aspect-video {
        aspect-ratio: 3/2;
        max-width: min(100%, 600px);
        margin-left: auto;
        margin-right: auto;
        border-radius: 1rem;
        /* 移除左右邊距以增加顯示區塊大小 */
        padding-left: 0;
        padding-right: 0;
    }

    .shadow-quantum-md {
        box-shadow: 0 15px 30px -8px rgba(168, 85, 247, 0.12), 0 0 12px -2px rgba(236, 72, 153, 0.08);
    }

    main {
        padding: 0 !important;
    }
}

.shadow-quantum-lg {
    box-shadow: 0 25px 50px -12px rgba(168, 85, 247, 0.15), 0 0 15px -3px rgba(236, 72, 153, 0.1);
}

.prose :deep(p) {
    @apply text-gray-700 mb-4;
}

.prose :deep(span.font-semibold) {
    @apply text-purple-600 hover:text-pink-500 transition-colors;
}

.prose :deep(strong) {
    @apply text-pink-500 font-medium;
}

.prose :deep(.underline) {
    @apply border-b-2 border-blue-400 border-dashed;
}

.branch-card {
    border: 1px solid rgba(214, 188, 250, 0.3);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.branch-card:hover {
    transform: translateX(8px);
}
</style>