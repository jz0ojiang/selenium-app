<template>
    <div>
        <input type="text" class="searchbox" v-model="searchbox" placeholder="搜索" />
    </div>
    <div class="results">
        <div v-for="result in results" :key="result.name" @click="push(result.path)" class="result">
            {{ result.name }}
        </div>
    </div>
    <span>{{ hint }}</span>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();

const push = (path: string) => {
    router.push(path);
}

const searchbox = ref('');
const hint = ref("搜索支持关键词/路径")

var data = [] as any[];
axios.get('/data.json').then((res) => {
    data = res.data;
});

const results: Ref<any[]> = ref([]);

const searchFromData = (query: string) => {
    var result = data.filter((item: any) => {
        return item.name.includes(query);
    });
    var resultFromPath = data.filter((item: any) => {
        return item.path.includes(query);
    });
    // 合并 result 和 resultFromPath 但去除重复项
    result = [...new Set([...result, ...resultFromPath])];
    hint.value = ''
    if (result.length > window.innerHeight / 120) {
        result = result.slice(0, window.innerHeight / 120);
        hint.value = `共找到 ${data.length} 个结果，${data.length - result.length} 因结果过多被隐藏。`
    }
    return result;
}

watch(searchbox, (newVal, oldVal) => {
    if (newVal === '') {
        results.value = [];
        hint.value = '搜索支持关键词/路径'
        return;
    }
    results.value = searchFromData(newVal)
});
</script>

<style lang="scss" scoped>
.results {
    position: relative;
    width: clamp(200px, 100%, 300px);
    margin-top: 0.5rem;
    .result:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
    .result:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    .result {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #ccc;
        padding: 0.5rem;
        font-size: 1rem;
        &:hover {
            background-color: #ddd;
            // color: #fff;
        }
    }
}
span {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #666;
}
</style>