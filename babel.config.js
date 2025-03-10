module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@constants": "./src/constants",
            "@contexts": "./src/contexts",
            "@dtos": "./src/dtos",
            "@environments": "./src/environments",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@storage": "./src/storage",
            "@styles": "./src/styles",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
