<template>
    <div>
        <p>myXunfeiAI</p>
        <p>{{ name }}</p>
        <el-button>按钮</el-button>
        <router-link to="/myXunfeiAI/list">跳转到列表页</router-link>
    </div>
</template>

<script>
import { onMounted, ref, toRaw } from 'vue'
import { store } from '../../store'
import { useStore } from 'vuex'
export default {
    setup() {
        onMounted(() => {
            console.log('看看store', toRaw(store.state))
        })
        const name = ref('123')
        return {
            name
        }
    }
}
</script>