const componentConfig = {
  description: 'application component logic',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../docs/{{name}}/intro.md',
      templateFile: 'templates/intro.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/list.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/show.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/create.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/update.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/delete.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/ui/index.md',
      templateFile: 'templates/index.txt'
    }
  ]
}

const templateConfig = {
  description: 'application template logic',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name please'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../docs/{{name}}/intro.md',
      templateFile: 'templates/intro.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/list.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/show.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/create.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/update.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/api/delete.md',
      templateFile: 'templates/verb.txt'
    },
    {
      type: 'add',
      path: '../docs/{{name}}/ui/index.md',
      templateFile: 'templates/index.txt'
    }
  ]
}

module.exports = (plop) => {
  plop.setGenerator('component', componentConfig)
}
