/**
 * Creates a builder.
 *
 * @param {!string} target - a target: should be either "client" or "server"
 * @param {rocBuilder} rocBuilder - A rocBuilder to base everything on.
 * @returns {rocBuilder}
 */
export default ({ previousValue: { buildConfig = {} } = {} }) => () => () => {
  buildConfig.resolve.extensions.push('.ts', '.tsx');

  // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
  const tsLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
  };
  buildConfig.module.loaders.push(tsLoader);

  // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
  const tsPreLoader = {
    test: /\.js$/,
    loader: 'source-map-loader',
  };
  buildConfig.module.preLoaders.push(tsPreLoader);
};
