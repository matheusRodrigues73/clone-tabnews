module.exports = {
  extends: ["next"],
  ignorePatterns: ["infra/migrations"],
  rules: {
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-unused-vars": "error",
    "block-scoped-var": "error",
  },
};
