const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const babel = require('babel-core');


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

  const { code } = babel.transformFromAst(ast, null, {
    presets: ['env']
  })

  return {
    id: ID,
    filename,
    dependencise,
    code,
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


  graph.forEach(module => {
    modules += `${module.id}: [
      function(require, module, exports) {
        ${module.code}
      }
      ${JSON.stringify(module.mapping)},
    ],`
  })

  const result = `
  (function(modules) {
    function require(id) {
      const [fn, mapping] = modules[id];

      function localRequire(relativePath) {
        return require(mapping[relativePath]);
      }

      const module = { exports: {}};

      fn(localRequire, module module.exports)

      return module.exports
    }
    require(0)
  })(${modules})
  `

  return result
}

/**
 * 生成依赖图
 */
const Graph = createGraph('./source/entry.js')
const result = bundle(Graph)
console.log(result)