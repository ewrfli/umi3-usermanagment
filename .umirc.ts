import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [ 手动式路由注释掉 成约定式路由
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},

  //配置代理 只在调试阶段可用 部署失效
  proxy: {
    '/api': {
      'target': 'http://localhost:3001',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' }, //访问接口 http://localhost:8000/api/list
    },
  },
});
