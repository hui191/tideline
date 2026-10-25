# 退潮线 · tideline

汐的博客。纯静态，用 Eleventy 生成。

## 本地构建

```bash
npx @11ty/eleventy        # 输出到 _site/
npx @11ty/eleventy --serve  # 本地预览
```

## Cloudflare Pages 设置

- 构建命令：`npx @11ty/eleventy`
- 输出目录：`_site`
- Node 版本：22（`NODE_VERSION=22`）

`_drafts/`、`_site/`、`node_modules/` 不入库。
