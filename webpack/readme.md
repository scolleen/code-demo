 babylon // 基于babel的js工具


 * babel-traverse 遍历ast语法树


7. 获取entryjs的依赖

```js
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })
  console.log(dependencise)
}
```

8. 优化createAsset，使其能够区分文件
```js
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}

const result = createAsset('./source/entry.js')

console.log(result)
```

9. 获取单个文件的依赖，然后建立依赖图
```js
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}



function createGraph(entry) {
  return createAsset(entry)
}

const result = createGraph('./source/entry.js')

console.log(result)
```

10. 将相对路径转为绝对路径
```
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}



function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const allAsset = [mainAsset]

  for(let asset of allAsset) {
    const dirname = path.dirname(allAsset[asset])
    asset.mapping = {}
    asset.dependencise.forEach(path => {
      const absolutePath = path.join(dirname, path)
      const childAsset = createAsset(absolutePath)
      asset.mapping[path] = childAsset
    })
  }
  
  return createAsset(entry)
}
```

11. 

12. 遍历文件
```js
const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;


// console.log(fs)
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}



function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const allAsset = [mainAsset]

  for (let asset of allAsset) {

    const dirname = path.dirname(asset.filename)

    asset.mapping = {}

    asset.dependencise.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath)

      const childAsset = createAsset(absolutePath)

      asset.mapping[relativePath] = childAsset.id

      allAsset.push(childAsset)

    })

  }
  return allAsset
}

const result = createGraph('./source/entry.js')

console.log(result)
```
result 就是需要的依赖图

13. 新增一个bundle方法

```js

const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;


// console.log(fs)
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}



function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const allAsset = [mainAsset]

  for (let asset of allAsset) {

    const dirname = path.dirname(asset.filename)

    asset.mapping = {}

    asset.dependencise.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath)

      const childAsset = createAsset(absolutePath)

      asset.mapping[relativePath] = childAsset.id

      allAsset.push(childAsset)

    })

  }
  return allAsset
}

function  bundle(graph) {
  
}

const Graph = createGraph('./source/entry.js')
const result = bundle(Graph)
console.log(result)

```

14. 创建整体的结果代码

自执行方法

15. 编译源代码
```js

const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;


// console.log(fs)
let ID = 0
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })

  const dependencise = []

  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencise.push(node.source.value)
    }
  })

  ID++
  return {
    id: ID,
    filename,
    dependencise,
  }

  console.log(dependencise)
}



function createGraph(entry) {
  const mainAsset = createAsset(entry);
  const allAsset = [mainAsset]

  for (let asset of allAsset) {

    const dirname = path.dirname(asset.filename)

    asset.mapping = {}

    asset.dependencise.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath)

      const childAsset = createAsset(absolutePath)

      asset.mapping[relativePath] = childAsset.id

      allAsset.push(childAsset)

    })

  }
  return allAsset
}

function  bundle(graph) {
  let modules = '';


  modules.forEach(item => {
    modules += `${item}: [
      
    ],`
  })

  const result = `
  (function(modules) {
    modules.forEach(item =)
  })(${modules})
  `
}

/**
 * 生成依赖图
 */
const Graph = createGraph('./source/entry.js')
const result = bundle(Graph)
console.log(result)

```

15. 把编译的代码加入result中
commonjs的规范要求：
 - module变量代表当前模块 （查看一下规范文档）

 变量是一个对象， 它的export属性是对外的接口；加载某个模块其实就是加载export.default的属性

 - require 用来加载模块