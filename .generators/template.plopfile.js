const templateConfig = {
  description: 'Add front-end template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '📄 Template name:'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../src/templates/{{name}}Template/index.tsx',
      templateFile: 'templates/template/index.tsx'
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator('template', templateConfig)
}
