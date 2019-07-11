module.exports = plop => {
  plop.setGenerator('rcts', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: 'plops/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.css',
        templateFile: 'plops/Component.css.hbs'
      },
      {
        type: 'add',
        path: 'src/__tests__/{{pascalCase name}}.test.tsx',
        templateFile: 'plops/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/stories/{{pascalCase name}}.stories.tsx',
        templateFile: 'plops/Component.stories.tsx.hbs'
      },
      {
        type: 'append',
        path: '.storybook/config.js',
        pattern: /\/\*\* add new stories below \*\//gi,
        template: "\trequire('../src/stories/{{pascalCase name}}.stories')"
      }
    ]
  })
};
