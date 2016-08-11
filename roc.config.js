module.exports = {
  settings: {
    runtime: {
      applicationName: 'Hello Roc World!',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.tsx',
      routes: 'src/routes/index.tsx',
    },
  },
  action: () => (rocObject) => {
    var hook = rocObject.hook;
    if (hook === 'build-webpack') {
      var rocBuilder = rocObject.previousValue;
      var buildConfig = rocBuilder.buildConfig;
      return (target) => () => {
        buildConfig.resolve.extensions.push('.ts', '.tsx');

        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        var tsLoader = {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        };
        buildConfig.module.loaders.push(tsLoader);

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        var tsPreLoader = {
          test: /\.js$/,
          loader: 'source-map-loader',
        };
        buildConfig.module.preLoaders.push(tsPreLoader);

        return rocBuilder;
      };
    }

    return undefined;
  }
};
