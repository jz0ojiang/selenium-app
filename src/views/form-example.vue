<script lang="ts" setup>
import { ref } from "vue";
import Footer from "@/components/footer.vue";

const result = ref([] as string[]);

const fileobj = ref({} as {
    src: string;
    name: string;
    type: string;
});


const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    fileobj.value = {
        src: URL.createObjectURL(file),
        name: file.name,
        type: file.type,
    };
};

const backToform = () => {
    window.location.href = "/form-example";
};

const check = () => {
    var params = new URLSearchParams(window.location.search);
    var textinput = params.get("textinput");
    var radio = params.get("radio");
    var checkbox = params.get("checkbox");
    var select = params.get("select");
    var file = params.get("file");
    if (textinput != null) {
        result.value.push("输入框：" + textinput);
    }
    if (radio != null) {
        result.value.push("单选：" + radio);
    }
    if (checkbox != null) {
        result.value.push("多选：" + checkbox);
    }
    if (select != null) {
        result.value.push("下拉框：" + select);
    }
    if (file != null) {
        result.value.push("文件上传：" + file);
    }

    return result.value.length > 0;
};
</script>

<template>
    <div class="form-example-container" v-if="!check()">
        <div class="form-example-title">表单</div>
        <form>
            <label for="textinput">输入框</label>
            <input type="text" id="textinput" name="textinput" placeholder="输入内容" />
            <div class="form-example-container-grid">
                <div>
                    <p class="radio">单选</p>
                    <div>
                        <label for="radio-1" class="form-example-sel-label">选项 1</label>
                        <input type="radio" id="radio-1" name="radio" value="选项 1" />
                    </div>
                    <div>
                        <label for="radio-2" class="form-example-sel-label">选项 2</label>
                        <input type="radio" id="radio-2" name="radio" value="选项 2" />
                    </div>
                    <div>
                        <label for="radio-3" class="form-example-sel-label">选项 3</label>
                        <input type="radio" id="radio-3" name="radio" value="选项 3" />
                    </div>
                </div>
                <div>
                    <p>多选</p>
                    <div>
                        <label for="checkbox-1" class="form-example-sel-label">选项 1</label>
                        <input type="checkbox" id="checkbox-1" name="checkbox" value="选项 1" />
                    </div>
                    <div>
                        <label for="checkbox-2" class="form-example-sel-label">选项 2</label>
                        <input type="checkbox" id="checkbox-2" name="checkbox" value="选项 2" />
                    </div>
                    <div>
                        <label for="checkbox-3" class="form-example-sel-label">选项 3</label>
                        <input type="checkbox" id="checkbox-3" name="checkbox" value="选项 3" />
                    </div>
                </div>
            </div>
            <label for="select">下拉框</label>
            <select id="select" name="select">
                <option value="选项 1">选项1</option>
                <option value="选项 2">选项2</option>
                <option value="选项 3">选项3</option>
            </select>
            <label for="textarea">文件上传</label>
            <input type="file" id="file" name="file" @change="handleChange"/>
            <div v-if="Object.keys(fileobj).length !== 0">
                <img v-if="fileobj.type === 'image/png'" :src="fileobj.src" :alt="fileobj.name" />
                <img v-else-if="fileobj.type === 'image/jpeg'" :src="fileobj.src" :alt="fileobj.name" />
                <div v-else>
                    预览：<a :href="fileobj.src" :download="fileobj.name">{{ fileobj.name }}</a>
                </div>
            </div>
            <br />
            <input type="submit" value="提交" class="selenium-custom-input" />
        </form>
    </div>
    <div class="form-example-container" v-else>
        <div class="form-example-result" name="form-example-result" id="form-example-result">
            <p v-for="item in result">{{ item }}</p>
            <button class="selenium-custom-input" @click="backToform">返回</button>
        </div>
    </div>
    <Footer />
</template>

<style>
.form-example-container-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 1rem;
}

.form-example-sel-label {
    margin-right: 1rem;
    font-size: 1rem;
}

.form-example-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    min-height: 70vh;
    padding-bottom: 5rem;
}

.form-example-container * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.form-example-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.form-example-container form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: clamp(200px, 50%, 400px);
}

label {
    margin-top: 1rem;
}
</style>
