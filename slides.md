---
theme: seriph
background: none
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
  enabled: dev
title: Vue 3 Deep Dive
---

# Vue 3 Deep Dive


---

# Overview

- Intro
- Render
- Reactive
- Mini Vue

---

# Intro
## What is the DOM?
- Document Object Model
<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2FDD1-1.jpg?alt=media&token=88ff3ccf-9d66-4c5c-ab96-856f0a4b944e"/>
```js
let item = document.getElementsByTagName("h1")[0];
item.textContent = "New Heading";
```

---

## Virtual DOM?
<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2FDD1-2.jpg?alt=media&token=a9a52d78-0808-4b2e-992f-45face29a1bc"/>

---

# Intro
## Virtual DOM

- Decouples rendering logics from the actual DOM
- Straightforward to use in non-browser environments, e.g. rendering to a string(SSR), WebGL, or native mobile

---

# Intro
## Virtual DOM
- Construct, inspect, clone and create directive structures using the full power of javascript

<Transform :scale="0.8">
<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2FDD1-4.jpg?alt=media&token=a9a52d78-0808-4b2e-992f-45face29a1bc"/>
</Transform>
---

# Intro
## Render Function
<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2FDD1-3.jpg?alt=media&token=a9a52d78-0808-4b2e-992f-45face29a1bc"/>

---

# Intro
## Anatomy of Vue 3
- Compiler Module - Take HTML templates and compile them into render functions
- Reactivity Module - Creating JavaScript reactive objects that can be watched for changes
- Renderer Module
>* Render Phase - When the render function is called and returns a representation of the actual DOM called the Virtual DOM
>* Mount (or Create) Phase - Takes the Virtual DOM object and makes actual DOM JavaScript calls to create a webpage
>* Patch (or Update) Phase - Takes the two Virtual DOM objects, an old and a new one, and update only the parts of the webpage that have changed using DOM JavaScript calls

---

# Render

## Render Function
```js
import { h } from 'vue'

const App = {
  render () {
    return h(
      'div',
      {
        id: 'hello'
      },
      [
        h('span','world')
      ]
    ) 
  }
}
```
```html
<div id="hello">
  <span>world</span>
</div>
```

---

# Render
## Render Function
v-if / v-else
```js
import { h } from 'vue'

const App = {
  render () {
    return this.ok
      ? h('div',{ id: 'hello' },[h('span','world')]
      : this.otherCondition
        ? h('p', 'other branch')
        : h('span')
    ) 
  }
}
```

---

# Render
## Render Function
v-for
```js
import { h } from 'vue'

const App = {
  render () {
    return list.map(item => {
      return h('div', {key: item.key}, item.text)
    })
  }
}
```

---

# Render
## Render Function
Stack component

<Transform :scale="0.8">

```js
<Stack size="4">
  <div>hello</div>
  <Stack size="4">
    <div>hello</div>
    <div>hello</div>
  </Stack>
</Stack>
```
```js
<div class="stack">
  <div class="m-4">
    <div>hello</div>
  </div>
  <div class="m-4">
    <div class="stack">
      <div class="m-4">
        <div>hello</div>
      </div>
      <div class="m-4">
        <div>hello</div>
      </div>
    </div>
  </div>
</div>
```

</Transform>

---

# Render
## Render Function

<div class="flex">
<div>
<Transform :scale="0.65">

```js
const {h, createApp} = Vue
// Stack component
const Stack = {
  props: ['size'],
  render() {
    const slot = this.$slots.default
        ? this.$slots.default()
        : []

    return h('div', {class: 'stack'}, slot.map(child => {
      return h('div', {class: `m-${this.$props.size}`}, [
          child
      ])
    }))
  }
}
```

```html
<template>
  <div class="stack">
    <div v-for="child in children" :key="child" :class="`m-${size}`">
      <component :is="child" />
    </div>
  </div>
</template>
<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: ['size'],
  setup(_, { slots }) {
    return { children: slots.default?.() ?? [] };
  },
})
</script>
```

</Transform>
</div>
<div>

```js
<Stack size="4">
  <div>hello</div>
  <Stack size="4">
    <div>hello</div>
    <div>hello</div>
  </Stack>
</Stack>
```

<Stack size="4">
  <div>hello</div>
  <Stack size="4">
    <div>hello</div>
    <div>hello</div>
  </Stack>
</Stack></div>
</div>

---


<div class="flex">
<div class="mr-3">
Template

```html
<template>
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</template>
<script>
  defineComponent({
    props: ['level']
  })
</script>

```

</div>
<div>
Render function

```html
<script>
  defineComponent({
    props: ['level'],
    render() {
      const { h } = Vue;
      return h(`h${this.level}`, {}, this.$slots.default());
    },
  })
</script>

```


</div>
</div>

---

# Compiler & Render
## Vue 3 Template Explorer 
<a href="https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2PkhlbGxvIFdvcmxkXG4gIDxkaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwiZm9vXCIgOmtleT1cImtleVwiIEBjbGljaz1cIm9uQ2xpY2tcIj5IZWxsbyBXb3JsZDwvZGl2PlxuICA8ZGl2PlxuICAgIDxkaXY+e3tzb21ldGhpbmd9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiIsInNzciI6ZmFsc2UsIm9wdGlvbnMiOnsiaG9pc3RTdGF0aWMiOnRydWUsImNhY2hlSGFuZGxlcnMiOnRydWV9fQ==" target="_blank">link</a>

- Hoist Static nodes
- Mark dynamic properties
- Cache event ('useMemo' in React to manually cache event handlers)
- Block(flat dynamic nodes, 把會變動的node存在一個array裡, patch時只需要檢查這些node, 不用diff整棵樹)
- Patch flag(e.g. /* TEXT */ only check for text content, no dynamic properties)

---

# Render API

```html {1-8,22|9-12|9-14|9-18|9-20|all}
<div id="app"></div>

<script>
  function h(tag, props, children) {}

  function mount(vnode, container) {}

  function patch(n1, n2) {}

  const vdom = h('div', {class: 'red'}, [
    h('span', null, ['hello'])
  ])

  mount(vdom, document.getElementById('app'))

  const vdom2 = h('div', {class: 'green'}, [
    h('span', null, ['world'])
  ])

  patch(vdom, vdom2)

</script>
```

---

```js {1-7|8,27|9|10-15|16-25|26}
function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}
function mount(vnode, container) {
  const el = vnode.el = document.createElement(vnode.tag) // save old el for patch
  if (vnode.props) { // props
    for (const key in vnode.props) {
      const value = vnode.props[key];
      el.setAttribute(key, value) // set dom attributes, skip properties and listeners for simplicity
    }
  }
  // children，這裡預設children為字串或是 vNode array，實際上可以是 ['hello', h('span')]
  if (vnode.children) {
    if (typeof vnode.children === 'string') { // 如果是字串，直接修改 textContent
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(child => { 
        mount(child, el)
      })
    }
  }
  container.appendChild(el)
}
```

---


<Transform :scale="0.45">

```ts
function patch(n1, n2) {
  // 優化在於如何減少dom api calls，如果我們有compiler 提示，甚至可以跳過整段
  if (n1.tag === n2.tag) { // 如果兩個node是相同類型的
    const el = n2.el = n1.el // 拿到舊的node，讓他一直傳下去
    // 處理 props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    for (const key in newProps) { // iterate新的屬性，如果和舊的不相等，那麼就設置新的屬性
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        el.setAttribute(key, newValue)
      }
    }
    for (const key in oldProps) { // iterate舊的屬性，如果發現新的沒有這個屬性，則刪除這個屬性
      if (!(key in newProps)) {
        el.removeAttribute(key)
      }
    }
    // 處理 children
    const oldChildren = n1.children
    const newChildren = n2.children
    if (typeof newChildren === 'string') { // 新的是字串
      if (typeof oldChildren === 'string') { // 新的和舊的children都是 string 類型
        if (newChildren !== oldChildren) {
          el.textContent = newChildren  // 直接替換 textContent
        }
      } else {
        // 新的children是text，但是舊的不是，直接設置 textContent，這樣會覆蓋舊的 dom node
        el.textContent = newChildren 
      }
    } else { // 新的是 vnode array
      if (typeof oldChildren === 'string') { // 新的是 vnode array，舊的是字串
        el.innerHtml = '' // 新children是vnode array，但是舊的是textContent
        newChildren.forEach(child => { // mount所有children nodes
          mount(child, el)
        })
      } else { // 新舊children都是vnode array
      // vue 有兩種diff方式，一種是用v-for key，另一種是直接比較兩個array，這裡直接比較，效率可能較差，不過較為直觀
        const commonLength = Math.min(oldChildren.length, newChildren.length)
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }
        if (newChildren.length > oldChildren.length) {
          // 如果新children 更長，將新children多餘的node mount到 DOM 上
          newChildren.slice(oldChildren.length).forEach(child => { 
            mount(child, el)
          })
        } else if (newChildren.length < oldChildren.length) {
          // 如果舊children更長，將多餘的node從 dom上移除
          oldChildren.slice(newChildren.length).forEach(child => { 
            el.removeChild(child.el)
          })
        }
      }
    }
  } else {
      // 如果兩個node是不同類型的，則需要用新的 node 替換舊的 node，這裡省略
  }
}

```

</Transform>

---

# Reactive

```js
// the api
class Dep {

}

function watchEffect(effect) {

}


// the demo
const dep = new Dep()

watchEffect(() => {
  dep.depend()
  console.log('effect run')
}) // effect run

dep.notify() // effect run
```

---

<Transform :scale="0.8">

```js {2,4,9,14|3,4,9|3,9-12|1,4-8,16-20,24-27|all}
let activeEffect
class Dep {
  subscribers = new Set()
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const dep = new Dep()

watchEffect(() => {
  dep.depend()
  console.log('effect run')
}) // effect run

dep.notify() // effect run
```

</Transform>

---

<Transform :scale="0.8">

```js {25|3-5,27-33}
let activeEffect
class Dep {
  constructor(value) {
    this.subscribers = new Set()
    this.value = value
  }
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const dep = new Dep('hello')

watchEffect(() => {
  dep.depend()
  console.log(dep.value)
}) // hello

dep.value = 'change'
dep.notify() // change
```

</Transform>

---

<Transform :scale="0.74">

```js {5,7,10,11,14|5,7,9,10,11,12,14|5,7-14|33-37|all}
let activeEffect
class Dep {
  constructor(value) {
    this.subscribers = new Set()
    this._value = value
  }
  get value() { 
    this.depend()
    return this._value
  }
  set value(value) {
    this._value = value
    this.notify()
  }
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}
const dep = new Dep('hello')

watchEffect(() => {
  console.log(dep.value)
}) // hello

dep.value = 'change' // change
```
</Transform>

---

Something else that needs to be taken care of

```js
const ok = new Dep(true);
const count = new Dep(0);

watchEffect(() => {
  if (ok.value) {
      console.log(count.value); // to unregister count listener when ok.value is false
  } else {
      console.log('error branch');
  }
})
```

---

# Reactive

```js
import { reactive, watchEffect } from 'vue'

const state = reactive({ count: 0})

watchEffect(() => {
  console.log(state.count)
}) // 0

state.count++ // 1
```

---

<Transform :scale="0.7">

vue 2 reactive

```js {1-16|17-34}
let activeEffect
class Dep {
  constructor() {
    this.subscribers = new Set()
  }
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }
  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = new Dep();
    let value = raw[key];

    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        dep.notify();
      }
    })
  })
  return raw
}
```

</Transform>

---

<Transform :scale="0.7">

vue 3 reactive

```js {31-33|17-29|18,22,23,28|19,24|1,19,24,3-15|18,20,22,23,26,28|all}
const targetMap = new WeakMap();

function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep
}

const reactiveHandlers = {
  get(target, key, receiver) {
    const dep = getDep(target, key);
    dep.depend();
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    const dep = getDep(target, key);
    const result = Reflect.set(target, key, value, receiver);
    dep.notify();
    return result;
  }, // has(), ownKeys()...
}

function reactive(raw) {
  return new Proxy(raw, reactiveHandlers)
}
```

</Transform>

---

<Transform :scale="0.58">

mini vue

```js {none|1-4|6-13|15-29|all}
// vdom
function h(tag, props, children) {...}
function mount(vnode, container) {...}
function patch(n1, n2) {...}

// reactivity
let activeEffect;
class Dep {...}
function watchEffect(effect) {...}
const targetMap = new WeakMap();
function getDep(target, key) {...}
const reactiveHandlers = {...}
function reactive(raw) {...}

function mountApp(component, container) {
  let isMounted = false
  let prevVdom
  watchEffect(() => {
    if (!isMounted) {
      prevVdom = component.render()
      mount(prevVdom, container)
      isMounted = true
    } else {
      const newVdom = component.render()
      patch(prevVdom, newVdom)
      prevVdom = newVdom
    }
  })
}

const App = {
  data: reactive({
    count: 0
  }),
  render() {
    return h('div', {
      onClick: () => {
        this.data.count++
      }
    }, String(this.data.count))
  }
}
mountApp(App, document.getElementById('app'))
```

</Transform>
<!-- Presentation slides for developers -->
<!-- 
<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div> -->

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Q & A