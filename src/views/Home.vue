<template>
  <div class="home">
    <div class="header-title">

        <div class="editor-section">
          <h5>Document Name</h5>
          <input type="text" v-model="title">
            <b-dropdown id="editor-selector" :text="editor" class="m-md-2">
              <b-dropdown-item active>markdown</b-dropdown-item>
              <b-dropdown-item>medium</b-dropdown-item>
            </b-dropdown>
            
          <div class="editor-menu">
            <b-button variant="primary">Save</b-button>
            <b-button variant="success">Export</b-button>
            <b-button variant="danger">Import</b-button>
          </div>

        </div>

        <div class="preview-section">
          <h5>Preview</h5>
        </div>

    </div>

    <div class="text" id="content">
      <medium-editor :content='content' :options='options' v-if="editor==='medium'" />
      <markdown-editor class="mardown-editor" :options="optionsMarkdown" v-model="value" v-if="editor==='markdown'" ></markdown-editor>
      <div class="preview" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
// document.getElementById('content').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');


export default {
  name: 'Home',
  data() {
    return {
      editor: "markdown",
      title: "",
      value: `### Welcome to AgapeText, inspired by Dillinger, made with Vuejs.`
      ,
      optionsMarkdown: {                   
        lineNumbers: true,
        styleActiveLine: true,
        styleSelectedText: true,
        lineWrapping: true,
        indentWithTabs: true,
        tabSize: 2,
        indentUnit: 2
      }
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.value, { sanitize: true })
    }
  },
  methods: {
    update: (function(e) {
      this.value = e.target.value
    }, 300)
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 1fr 9fr;
  height: calc(100vh - 64px);
}

.header-title {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.preview-section {
  display: flex;
  justify-content: center;
  align-items: center;
}


.editor-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
}


</style>
