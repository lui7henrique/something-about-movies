const componentConfig = {
  description: 'Add front-end component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{name}}/index.tsx',
      templateFile: 'templates/component/index.tsx'
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator('component', componentConfig)
}
