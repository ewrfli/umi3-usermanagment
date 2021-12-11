import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [ 手动式路由注释掉 成约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
