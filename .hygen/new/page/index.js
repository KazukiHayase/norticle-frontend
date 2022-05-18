module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'feature',
        message: 'Which feature?',
        choices: ['post', 'setting', 'dashboard', 'setting'],
      },
      {
        type: 'input',
        name: 'pageName',
        message: 'What is the name of page?',
      },
      {
        type: 'confirm',
        name: 'haveStyle',
        message: 'Is it have style?',
      },
      {
        type: 'confirm',
        name: 'haveGraphQL',
        message: 'Is it have GraphQL file?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { feature, pageName } = answers;
      const path = `src/features/${feature}/pages/${pageName}`;
      return { ...answers, pageName, path };
    });
  },
};
