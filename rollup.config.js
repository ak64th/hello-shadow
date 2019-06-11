import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const input = 'src/index.js';
const external = Object.keys(pkg.peerDependencies || {});

export default [
  {
    input,
    external,
    plugins: [
      babel()
    ],
    output: [
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  },
  {
    input,
    external,
    plugins: [
      babel()
    ],
    output: {
      name: 'hello',
      file: pkg.main,
      globals: {
        'react': "React",
        'react-dom': "ReactDOM",
        'styled-components': 'styled'
      },
      format: 'umd'
    }
  }
];
