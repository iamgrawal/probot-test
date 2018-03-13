module.exports = robot => {
  robot.on('issues.opened', async context => {
    const params = context.issue({
      body:
        'Hi!, Thanks for pointing out, our maintainers will check out this issue soon. '
    });
    return context.github.issues.createComment(params);
  });
  robot.on('issues.labeled', async context => {
    const params = context.issue({ body: 'Thanks for adding the label' });
    return context.github.issues.createComment(params);
  });
};
