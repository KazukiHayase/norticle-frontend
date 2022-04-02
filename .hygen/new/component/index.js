module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'feature',
        message: 'Which feature?',
        choices: ['post'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of component?',
      },
      {
        type: 'confirm',
        name: 'haveStyle',
        message: 'Is it have style?',
      },
      {
        type: 'confirm',
        name: 'haveStory',
        message: 'Is it have story?',
      },
      {
        type: 'confirm',
        name: 'haveGraphQL',
        message: 'Is it have GraphQL file?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { feature, componentName } = answers;
      const path = `src/features/${feature}/components/${componentName}`;
      return { ...answers, componentName, path };
    });
  },
};
