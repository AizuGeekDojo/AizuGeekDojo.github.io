(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(n){n.exports={fileMap:{"blog/2019-07-11-create_blog.json":{title:"NuxtJSでブログを作る1",created_at:"2019-07-21T00:00:00.000Z",keywords:"NuxtJS, ブログ, processmd",description:"NuxtJSでブログを作ります。今回は、使う技術、実装の流れを解説します。",dir:"blog",base:"2019-07-11-create_blog.json",ext:".json",sourceBase:"2019-07-11-create_blog.md",sourceExt:".md"},"blog/2019-07-12-create_blog.json":{title:"NuxtJSでブログを作る2",created_at:"2019-07-22T00:00:00.000Z",keywords:"NuxtJS, ブログ, processmd",description:"processmdを用いて、markdownからnuxtを使ってブログ記事を作成する方法を解説しています。",dir:"blog",base:"2019-07-12-create_blog.json",ext:".json",sourceBase:"2019-07-12-create_blog.md",sourceExt:".md"},"blog/2019-07-13-ブログテンプレートを作成するCLIを作る.json":{title:"ブログテンプレートを作成するCLIを作る",created_at:"2019-07-13T00:00:00.000Z",keywords:"processmd, cli, node, markdown",writer:"nozomoto",description:"processmdを用いてMarkdownからブログを作成する際のテンプレートを作るCLIを自作しました。",dir:"blog",base:"2019-07-13-ブログテンプレートを作成するCLIを作る.json",ext:".json",sourceBase:"2019-07-13-ブログテンプレートを作成するCLIを作る.md",sourceExt:".md"}},sourceFileArray:["./blog/2019-07-11-create_blog.md","./blog/2019-07-12-create_blog.md","./blog/2019-07-13-ブログテンプレートを作成するCLIを作る.md"]}},199:function(n,t,e){var content=e(240);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(7).default)("34663190",content,!0,{sourceMap:!1})},235:function(n,t,e){var map={"./2019-07-11-create_blog.json":236,"./2019-07-12-create_blog.json":237,"./2019-07-13-ブログテンプレートを作成するCLIを作る.json":238,"./summary.json":184};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=235},236:function(n){n.exports={title:"NuxtJSでブログを作る1",created_at:"2019-07-21T00:00:00.000Z",keywords:"NuxtJS, ブログ, processmd",description:"NuxtJSでブログを作ります。今回は、使う技術、実装の流れを解説します。",bodyContent:"# はじめに\n\n初めまして、会津大学学部4年で、Aizu Geek DojoのSAの森本望です。  \n現在Aizu Geek Dojoではサイトのリニューアルに伴い、ブログ機能を作成しています。 \n\n今回は作っているブログについて、解説しながら作成していきたいと思っています。  \n\n# 使っている技術\n\nこのサイトで使っているのは主にNuxtJSです。  \nNuxtJSはVueのアプリケーションを作成するフレームワークで、これを使うとVueのコンポーネント思考を用いてSPAやSSR、静的ページなどを作成することができます。  \nまた、CSSにはSCSSを使っています。  \n\nなぜ我々がNuxtJSを用いてサイトを作ったかというのは多くは僕の趣味というところが大きいのですが、それ以外だと\n\n- VueJSは比較的学習コストが低い\n- github.ioにホスティングできる、Staticなページを作成したい\n- バニラVueJSよりは制限が多く、どこで何しているかわかりやすいと思うので\n\nからです。\n\nまたこのページはgithub.ioによってホスティングされており、CircleCIでビルドして該当ページにオートデプロイ(CD)できるようになっています。\n\nこのブログはMarkdownを使って書ける用に作成し、後輩たちがたくさん記事を書いてくれることを期待しています。  \nまた、ContentfulなどのAPIファーストなCMSが流行りっぽいですが    \n予算の都合上や、今後の維持を兼ねてある程度フルスクラッチで作ることになると思います。  \n\nフルスクラッチおとは言ったもの、大まかにやることは\n\n- MarkDownをHTMLに吐き出す\n- NuxtJSで動的ルーティングできるようにする\n- CSSをかく(これが一番大変)\n- ブログを書きやすいようにテンプレをサクッと作れるようにする\n\nなど頑張ります。",bodyHtml:"<h1>はじめに</h1>\n<p>初めまして、会津大学学部4年で、Aizu Geek DojoのSAの森本望です。<br>\n現在Aizu Geek Dojoではサイトのリニューアルに伴い、ブログ機能を作成しています。</p>\n<p>今回は作っているブログについて、解説しながら作成していきたいと思っています。</p>\n<h1>使っている技術</h1>\n<p>このサイトで使っているのは主にNuxtJSです。<br>\nNuxtJSはVueのアプリケーションを作成するフレームワークで、これを使うとVueのコンポーネント思考を用いてSPAやSSR、静的ページなどを作成することができます。<br>\nまた、CSSにはSCSSを使っています。</p>\n<p>なぜ我々がNuxtJSを用いてサイトを作ったかというのは多くは僕の趣味というところが大きいのですが、それ以外だと</p>\n<ul>\n<li>VueJSは比較的学習コストが低い</li>\n<li>github.ioにホスティングできる、Staticなページを作成したい</li>\n<li>バニラVueJSよりは制限が多く、どこで何しているかわかりやすいと思うので</li>\n</ul>\n<p>からです。</p>\n<p>またこのページはgithub.ioによってホスティングされており、CircleCIでビルドして該当ページにオートデプロイ(CD)できるようになっています。</p>\n<p>このブログはMarkdownを使って書ける用に作成し、後輩たちがたくさん記事を書いてくれることを期待しています。<br>\nまた、ContentfulなどのAPIファーストなCMSが流行りっぽいですが<br>\n予算の都合上や、今後の維持を兼ねてある程度フルスクラッチで作ることになると思います。</p>\n<p>フルスクラッチおとは言ったもの、大まかにやることは</p>\n<ul>\n<li>MarkDownをHTMLに吐き出す</li>\n<li>NuxtJSで動的ルーティングできるようにする</li>\n<li>CSSをかく(これが一番大変)</li>\n<li>ブログを書きやすいようにテンプレをサクッと作れるようにする</li>\n</ul>\n<p>など頑張ります。</p>\n",dir:"blog",base:"2019-07-11-create_blog.json",ext:".json",sourceBase:"2019-07-11-create_blog.md",sourceExt:".md"}},237:function(n){n.exports={title:"NuxtJSでブログを作る2",created_at:"2019-07-22T00:00:00.000Z",keywords:"NuxtJS, ブログ, processmd",description:"processmdを用いて、markdownからnuxtを使ってブログ記事を作成する方法を解説しています。",bodyContent:'# 続き\n\nこんにちは、会津大学学部4年の森本望です。  \n[前回](../2019-07-11/create_blog)に引き続きブログを作っていきます。  \n今回はMarkdownを使って動的にWebページを生成していきます。  \n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \n\n## processmd \n\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \n\nまずこのようなMarkdownを書きます。\n\n``` markdown\n\n---\ntitle: NuxtJSでブログを作る2\ncreated_at: 2019-07-22\ntags: NuxtJS, ブログ, processmd\n---\n\n# 続き\n\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。  \n今回はMarkdownを使って動的にWebページを生成していきます。  \n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \n\n## processmd \n\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \n\nまずこのようなMarkdownを書きます。  \n\n```\n\n### Markdown to JSON\n\n先ほどのMarkDownをJSONに変換します。  \n``` sh\nprocessmd ./blog/* --stdout --outputDir ./blog/ > ./blog/summary.json\n```\n\nとすると \n\n``` \n$ tree blog\nblog\n├── 2019-07-22-create_blog.json\n├── 2019-07-22-create_blog.md\n└── summary.json\n```\n\nこのようなファイルが出力されます。  \n\n2019-07-22-create_blog.json \n``` json \n{\n  "title": "NuxtJSでブログを作る2",\n  "created_at": "2019-07-22T00:00:00.000Z",\n  "tags": "NuxtJS, ブログ, processmd",\n  "bodyContent": "# 続き\\n\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。\\n\\n``` markdown\\n\\n---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-22\\ntags: NuxtJS, ブログ, processmd\\n---\\n\\n# 続き\\n\\n[前回](./2019-07-21動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。\\n\\n```",\n  "bodyHtml": "<h1>続き</h1>\\n<p><a href=\\"./2019-07-21/create_blog\\">前回</a>に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。</p>\\n<h2>processmd</h2>\\n<p\\">processmd</a>です。\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。</p>\\n<p>まずこのようなMarkdownを書きます。</p>\\n<pre><code class=\\"hljs\\">---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-2前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https:タ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。</code></pre>",\n  "dir": "blog",\n  "base": "2019-07-22-create_blog.json",\n  "ext": ".json",\n  "sourceBase": "2019-07-22-create_blog.md",\n  "sourceExt": ".md"\n}%    \n```\n\nsummary.json\n``` json \n{\n  "fileMap": {\n    "blog/2019-07-22-create_blog.json": {\n      "title": "NuxtJSでブログを作る2",\n      "created_at": "2019-07-22T00:00:00.000Z",\n      "tags": "NuxtJS, ブログ, processmd",\n      "dir": "blog",\n      "base": "2019-07-22-create_blog.json",\n      "ext": ".json",\n      "sourceBase": "2019-07-22-create_blog.md",\n      "sourceExt": ".md"\n    }\n  },\n  "sourceFileArray": [\n    "./blog/2019-07-22-create_blog.md"\n  ]\n}\n```\n\nこのデータを元にNuxtの動的リンクを使ってページを作成します。\n\n### Nuxtでページを作成\n\n#### ディレクトリ構造\n\nNuxtJSで先ほど作成したJSONを読み込み、HTMLに埋め込みます。\n\nディレクトリを以下のように作成します。    \n`_date`や`_slug`はNuxtの動的なルーティングに使います。    \n[ドキュメント](https://ja.nuxtjs.org/guide/routing/#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)\n\n``` \n$ tree pages/blog\npages/blog\n├── _date\n│   ├── _slug\n│   │   └── index.vue\n│   └── index.vue\n└── index.vue\n```\n\n#### pages/blog/_date/_slug/index.vue\n\nこのページはこんな感じに作っています。\n\n`validate`で動的なページを作成するリンクを制限しています。  \n今回だと`summary.json`の`sourceFileArray`に、リンクのデータが存在しているかを確認しています。  \n``` js\nimport { sourceFileArray } from \'../../../../blog/summary.json\';\n...\nvalidate({ params }) {\n  return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\n},\n```\n\n`asyncData`は実際に表示するコンテンツを取得してきています。  \n今回だと`2019-07-22-create_blog.json`が当てはまりますね。  \n\n`head()`はHTMLのheadタグを作成するのに使います。  \n以下の実装だと`url`, `title`しかmetaタグに入れていませんが、SEO的に`description`入れたりしたいですね。  \n\nそして`v-html`に`2019-07-22-create_blog.json`の`bodyHtml`を渡しています。  \n余談ですが、ここで埋め込む要素にCSSを当てたい場合ディープセレクターを使う必要があります。  \nこのWebページではこの記事を書いてる現在以下のようにCSSを当てています。  \n素のHTMLだけだと味気ないので好みに整形しても良いですね  \n\n```css\n/deep/ h1 {\n  padding: 0.5em;\n  background: white;\n  border-left: solid 5px #ffaf58;\n}\n\n/deep/ h2 {\n  padding: 0.5em;\n  background: white;\n  border-left: solid 5px #59fcff;\n}\n\n/deep/ pre {\n  background-color: rgba(50, 50, 50, 0.1);\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  border-radius: 5px;\n  line-height: normal;\n  overflow: auto;\n}\n```\n\n実装が以下のようになりました。(実際はもう少し複雑)\n\n``` js\n<template>\n  <div>\n    <div class="top-content"> \n      <div class="title">{{ title }}</div>\n      <div class="post-meta">\n        <div class="post-meta-date">日付: <time>{{ params.date }}</time></div>\n      </div>\n    </div>\n    <div \n      class="body-content" \n      v-html="bodyHtml"></div>\n  </div>\n</template>\n\n<script>\nimport { sourceFileArray } from \'../../../../blog/summary.json\'\n\nexport default {\n  validate({ params }) {\n    return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\n  },\n  asyncData({ params }) {\n    return Object.assign(\n      {},\n      require(`~/blog/${params.date}-${params.slug}.json`),\n      { params }\n    )\n  },\n  head() {\n    const title = `${this.title} - aizugeekdojo.github.io`\n    const url = `https://aizugeekdojo.github.io/blog/${this.params.date}/${\n      this.params.slug\n    }/`\n    return {\n      title: title,\n      meta: [\n        { hid: \'og:url\', property: \'og:url\', content: url },\n        { hid: \'og:title\', property: \'og:title\', content: title }\n      ],\n      link: [{ rel: \'canonical\', href: url }]\n    }\n  }\n}\n<\/script>\n```\n\nこれでとりあえずMarkdownからブログ記事を書くことは可能になりました。',bodyHtml:'<h1>続き</h1>\n<p>こんにちは、会津大学学部4年の森本望です。<br>\n<a href="../2019-07-11/create_blog">前回</a>に引き続きブログを作っていきます。<br>\n今回はMarkdownを使って動的にWebページを生成していきます。<br>\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。</p>\n<h2>processmd</h2>\n<p>今回MarkdownをHTMLに直すのに使うのは<a href="https://www.npmjs.com/package/processmd">processmd</a>です。<br>\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。</p>\n<p>まずこのようなMarkdownを書きます。</p>\n<pre><code class="hljs">---\ntitle: NuxtJSでブログを作る2\ncreated_at: 2019-07-22\ntags: NuxtJS, ブログ, processmd\n---\n\n# 続き\n\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。  \n今回はMarkdownを使って動的にWebページを生成していきます。  \n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \n\n## processmd \n\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \n\nまずこのようなMarkdownを書きます。</code></pre><h3>Markdown to JSON</h3>\n<p>先ほどのMarkDownをJSONに変換します。</p>\n<pre><code class="hljs">processmd ./blog/* --stdout --outputDir ./blog/ &gt; ./blog/summary.json</code></pre><p>とすると</p>\n<pre><code class="hljs">$ tree blog\nblog\n├── 2019-07-22-create_blog.json\n├── 2019-07-22-create_blog.md\n└── summary.json</code></pre><p>このようなファイルが出力されます。</p>\n<p>2019-07-22-create_blog.json</p>\n<pre><code class="hljs">{\n  "title": "NuxtJSでブログを作る2",\n  "created_at": "2019-07-22T00:00:00.000Z",\n  "tags": "NuxtJS, ブログ, processmd",\n  "bodyContent": "# 続き\\n\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。\\n\\n``` markdown\\n\\n---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-22\\ntags: NuxtJS, ブログ, processmd\\n---\\n\\n# 続き\\n\\n[前回](./2019-07-21動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。\\n\\n```",\n  "bodyHtml": "&lt;h1&gt;続き&lt;/h1&gt;\\n&lt;p&gt;&lt;a href=\\"./2019-07-21/create_blog\\"&gt;前回&lt;/a&gt;に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。&lt;/p&gt;\\n&lt;h2&gt;processmd&lt;/h2&gt;\\n&lt;p\\"&gt;processmd&lt;/a&gt;です。\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。&lt;/p&gt;\\n&lt;p&gt;まずこのようなMarkdownを書きます。&lt;/p&gt;\\n&lt;pre&gt;&lt;code class=\\"hljs\\"&gt;---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-2前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\n今回はMarkdownを使って動的にWebページを生成していきます。\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https:タ情報を含ませやすいからです。\\n\\nまずこのようなMarkdownを書きます。&lt;/code&gt;&lt;/pre&gt;",\n  "dir": "blog",\n  "base": "2019-07-22-create_blog.json",\n  "ext": ".json",\n  "sourceBase": "2019-07-22-create_blog.md",\n  "sourceExt": ".md"\n}%</code></pre><p>summary.json</p>\n<pre><code class="hljs">{\n  "fileMap": {\n    "blog/2019-07-22-create_blog.json": {\n      "title": "NuxtJSでブログを作る2",\n      "created_at": "2019-07-22T00:00:00.000Z",\n      "tags": "NuxtJS, ブログ, processmd",\n      "dir": "blog",\n      "base": "2019-07-22-create_blog.json",\n      "ext": ".json",\n      "sourceBase": "2019-07-22-create_blog.md",\n      "sourceExt": ".md"\n    }\n  },\n  "sourceFileArray": [\n    "./blog/2019-07-22-create_blog.md"\n  ]\n}</code></pre><p>このデータを元にNuxtの動的リンクを使ってページを作成します。</p>\n<h3>Nuxtでページを作成</h3>\n<h4>ディレクトリ構造</h4>\n<p>NuxtJSで先ほど作成したJSONを読み込み、HTMLに埋め込みます。</p>\n<p>ディレクトリを以下のように作成します。<br>\n<code>_date</code>や<code>_slug</code>はNuxtの動的なルーティングに使います。<br>\n<a href="https://ja.nuxtjs.org/guide/routing/#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0">ドキュメント</a></p>\n<pre><code class="hljs">$ tree pages/blog\npages/blog\n├── _date\n│   ├── _slug\n│   │   └── index.vue\n│   └── index.vue\n└── index.vue</code></pre><h4>pages/blog/_date/_slug/index.vue</h4>\n<p>このページはこんな感じに作っています。</p>\n<p><code>validate</code>で動的なページを作成するリンクを制限しています。<br>\n今回だと<code>summary.json</code>の<code>sourceFileArray</code>に、リンクのデータが存在しているかを確認しています。</p>\n<pre><code class="hljs">import { sourceFileArray } from \'../../../../blog/summary.json\';\n...\nvalidate({ params }) {\n  return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\n},</code></pre><p><code>asyncData</code>は実際に表示するコンテンツを取得してきています。<br>\n今回だと<code>2019-07-22-create_blog.json</code>が当てはまりますね。</p>\n<p><code>head()</code>はHTMLのheadタグを作成するのに使います。<br>\n以下の実装だと<code>url</code>, <code>title</code>しかmetaタグに入れていませんが、SEO的に<code>description</code>入れたりしたいですね。</p>\n<p>そして<code>v-html</code>に<code>2019-07-22-create_blog.json</code>の<code>bodyHtml</code>を渡しています。<br>\n余談ですが、ここで埋め込む要素にCSSを当てたい場合ディープセレクターを使う必要があります。<br>\nこのWebページではこの記事を書いてる現在以下のようにCSSを当てています。<br>\n素のHTMLだけだと味気ないので好みに整形しても良いですね</p>\n<pre><code class="hljs">/deep/ h1 {\n  padding: 0.5em;\n  background: white;\n  border-left: solid 5px #ffaf58;\n}\n\n/deep/ h2 {\n  padding: 0.5em;\n  background: white;\n  border-left: solid 5px #59fcff;\n}\n\n/deep/ pre {\n  background-color: rgba(50, 50, 50, 0.1);\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  border-radius: 5px;\n  line-height: normal;\n  overflow: auto;\n}</code></pre><p>実装が以下のようになりました。(実際はもう少し複雑)</p>\n<pre><code class="hljs">&lt;template&gt;\n  &lt;div&gt;\n    &lt;div class="top-content"&gt; \n      &lt;div class="title"&gt;{{ title }}&lt;/div&gt;\n      &lt;div class="post-meta"&gt;\n        &lt;div class="post-meta-date"&gt;日付: &lt;time&gt;{{ params.date }}&lt;/time&gt;&lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div \n      class="body-content" \n      v-html="bodyHtml"&gt;&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport { sourceFileArray } from \'../../../../blog/summary.json\'\n\nexport default {\n  validate({ params }) {\n    return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\n  },\n  asyncData({ params }) {\n    return Object.assign(\n      {},\n      require(`~/blog/${params.date}-${params.slug}.json`),\n      { params }\n    )\n  },\n  head() {\n    const title = `${this.title} - aizugeekdojo.github.io`\n    const url = `https://aizugeekdojo.github.io/blog/${this.params.date}/${\n      this.params.slug\n    }/`\n    return {\n      title: title,\n      meta: [\n        { hid: \'og:url\', property: \'og:url\', content: url },\n        { hid: \'og:title\', property: \'og:title\', content: title }\n      ],\n      link: [{ rel: \'canonical\', href: url }]\n    }\n  }\n}\n&lt;/script&gt;</code></pre><p>これでとりあえずMarkdownからブログ記事を書くことは可能になりました。</p>\n',dir:"blog",base:"2019-07-12-create_blog.json",ext:".json",sourceBase:"2019-07-12-create_blog.md",sourceExt:".md"}},238:function(n){n.exports={title:"ブログテンプレートを作成するCLIを作る",created_at:"2019-07-13T00:00:00.000Z",keywords:"processmd, cli, node, markdown",writer:"nozomoto",description:"processmdを用いてMarkdownからブログを作成する際のテンプレートを作るCLIを自作しました。",bodyContent:'# ブログテンプレートを作成するCLIを作る\n\nこんにちは会津大学学部4年森本望です。  \n[前回](../2019-07-12/create_blog)書いた通り、`processmd`を用いてMarkdownからJSONに変換して\nブログ記事にしています。\n\n今回は`processmd`に使うテンプレートを作成するCLIをNodeJSを使って作成しました。  \n作成するCLIが出力するのは\n\n```\n---\ntitle: ブログテンプレートを作成するCLIを作る\ncreated_at: 2019-07-13\ntags: processmd, cli, node, markdown\ndescription:\nwriter: nozomoto\n---\n```\n\nといったものを出力します。\n\n## 技術\n使った言語は\n- NodeJSです。\n\n[processmd_template_maker](https://github.com/nozo-moto/processmd_template_maker)\n\n`readline-sync`を使い、標準入力で項目を入れることができます。\n\n``` js\nconst title = readlineSync.question("Title: ");\nconst tags = readlineSync.question("Tag(カンマ区切り): ");\nconst writer = readlineSync.question("writer: ");\n```\n\nまた [`command-line-arg`](https://github.com/75lb/command-line-args) と [`command-line-usage`](https://github.com/75lb/command-line-usage) を使ってコマンドライン引数、`--help` の表示をしています。\n\nこんな感じです。\n\n``` js\nconst commandLineArgs = require("command-line-args");\nconst commandLineUsage = require("command-line-usage");\nconst optionDefinitions = [\n  {\n    name: "help",\n    alias: "h",\n    type: Boolean\n  },\n  {\n    name: "outputDir",\n    alias: "o",\n    type: String\n  }\n];\n\nconst sections = [\n  {\n    header: "processmd template maker",\n    content: "generate template of processmd for aizugeekdojo.github.io"\n  },\n  {\n    header: "Options",\n    optionList: [\n      {\n        name: "outputDir",\n        typeLabel: "{underline path}",\n        description: "The output template path."\n      }\n    ]\n  }\n];\n\nconst options = commandLineArgs(optionDefinitions);\nconst usage = commandLineUsage(sections);\n\nif (options.help || !options.outputDir) {\n  console.log(usage);\n} else {\n  main();\n}\n```\n\n## 使い方\n\n### インストール\n\n```\nnpm i --save nozo-moto/processmd_template_maker\n```\n\n`package.json`に\n\n```\n  "scripts": {\n\t\t"blog-template": "processmd_template_maker --outputDir=./blog/"\n  },\n```\n\nを付け加えます。\nそして、`npm run blog-template`\n```\n$ npm run blog-template\n\nTitle: test\nTag(カンマ区切り): test\nwriter: test\n```\n\nすると\n```\n---\ntitle: test\ncreated_at: 2019-07-13\ntags: test\ndescription:\nwriter: test\n---\n```\n\nと書かれた`2019-07-13-test.md`が作成されます。\n\nこの後は、このファイルに記事を書けば自動的にレンダリングされます。',bodyHtml:'<h1>ブログテンプレートを作成するCLIを作る</h1>\n<p>こんにちは会津大学学部4年森本望です。<br>\n<a href="../2019-07-12/create_blog">前回</a>書いた通り、<code>processmd</code>を用いてMarkdownからJSONに変換して\nブログ記事にしています。</p>\n<p>今回は<code>processmd</code>に使うテンプレートを作成するCLIをNodeJSを使って作成しました。<br>\n作成するCLIが出力するのは</p>\n<pre><code>---\ntitle: ブログテンプレートを作成するCLIを作る\ncreated_at: 2019-07-13\ntags: processmd, cli, node, markdown\ndescription:\nwriter: nozomoto\n---\n</code></pre>\n<p>といったものを出力します。</p>\n<h2>技術</h2>\n<p>使った言語は</p>\n<ul>\n<li>NodeJSです。</li>\n</ul>\n<p><a href="https://github.com/nozo-moto/processmd_template_maker">processmd_template_maker</a></p>\n<p><code>readline-sync</code>を使い、標準入力で項目を入れることができます。</p>\n<pre><code class="hljs">const title = readlineSync.question("Title: ");\nconst tags = readlineSync.question("Tag(カンマ区切り): ");\nconst writer = readlineSync.question("writer: ");</code></pre><p>また <a href="https://github.com/75lb/command-line-args"><code>command-line-arg</code></a> と <a href="https://github.com/75lb/command-line-usage"><code>command-line-usage</code></a> を使ってコマンドライン引数、<code>--help</code> の表示をしています。</p>\n<p>こんな感じです。</p>\n<pre><code class="hljs">const commandLineArgs = require("command-line-args");\nconst commandLineUsage = require("command-line-usage");\nconst optionDefinitions = [\n  {\n    name: "help",\n    alias: "h",\n    type: Boolean\n  },\n  {\n    name: "outputDir",\n    alias: "o",\n    type: String\n  }\n];\n\nconst sections = [\n  {\n    header: "processmd template maker",\n    content: "generate template of processmd for aizugeekdojo.github.io"\n  },\n  {\n    header: "Options",\n    optionList: [\n      {\n        name: "outputDir",\n        typeLabel: "{underline path}",\n        description: "The output template path."\n      }\n    ]\n  }\n];\n\nconst options = commandLineArgs(optionDefinitions);\nconst usage = commandLineUsage(sections);\n\nif (options.help || !options.outputDir) {\n  console.log(usage);\n} else {\n  main();\n}</code></pre><h2>使い方</h2>\n<h3>インストール</h3>\n<pre><code>npm i --save nozo-moto/processmd_template_maker\n</code></pre>\n<p><code>package.json</code>に</p>\n<pre><code>  &quot;scripts&quot;: {\n\t\t&quot;blog-template&quot;: &quot;processmd_template_maker --outputDir=./blog/&quot;\n  },\n</code></pre>\n<p>を付け加えます。\nそして、<code>npm run blog-template</code></p>\n<pre><code>$ npm run blog-template\n\nTitle: test\nTag(カンマ区切り): test\nwriter: test\n</code></pre>\n<p>すると</p>\n<pre><code>---\ntitle: test\ncreated_at: 2019-07-13\ntags: test\ndescription:\nwriter: test\n---\n</code></pre>\n<p>と書かれた<code>2019-07-13-test.md</code>が作成されます。</p>\n<p>この後は、このファイルに記事を書けば自動的にレンダリングされます。</p>\n',dir:"blog",base:"2019-07-13-ブログテンプレートを作成するCLIを作る.json",ext:".json",sourceBase:"2019-07-13-ブログテンプレートを作成するCLIを作る.md",sourceExt:".md"}},239:function(n,t,e){"use strict";var o=e(199);e.n(o).a},240:function(n,t,e){(n.exports=e(6)(!1)).push([n.i,"#app[data-v-77009c6d]{background-color:#93d1d4}.top[data-v-77009c6d]{align-items:center;width:100%;display:flex;flex-direction:column;justify-content:center;background-color:#f7b756}@media (min-width:600px){.content[data-v-77009c6d]{font-size:medium;text-justify:inter-word;letter-spacing:.15em;font-weight:400;line-height:2.4em;text-align:justify-all;max-width:800px;min-width:410px;min-height:500px;padding:120px 100px 240px;background-color:#fdfced;display:flex;flex-direction:column;align-items:center;box-shadow:0 0 20px rgba(0,0,0,.36863)}.content ul[data-v-77009c6d]{list-style-type:decimal}.content ul ul[data-v-77009c6d]{list-style-type:disc;padding-bottom:1.3em}.content a[data-v-77009c6d]{color:#473d39}}@media (max-width:600px){.content[data-v-77009c6d]{font-size:medium;letter-spacing:.1em;font-weight:400;line-height:2.4em;min-height:500px;background-color:#fdfced;display:flex;flex-direction:column;align-items:center;box-shadow:0 0 20px rgba(0,0,0,.36863);text-align:center;width:100%;margin:0;padding:60px 0 80px;word-break:break-word;word-wrap:normal}.content a[data-v-77009c6d],.content div[data-v-77009c6d],.content p[data-v-77009c6d]{margin:20px;color:#473d39;padding:0}.content ul[data-v-77009c6d]{margin:15px;list-style-type:decimal}.content ul ul[data-v-77009c6d]{list-style-type:disc;padding:0}.content ul li[data-v-77009c6d]{padding:.1em}}.default[data-v-77009c6d]{padding:0;margin:0;width:100%}.content[data-v-77009c6d]{margin:0 auto;padding:0}@media (max-width:600px){.content[data-v-77009c6d]{width:95%}}@media (min-width:600px){.content[data-v-77009c6d]{width:80%}}.content .article-content[data-v-77009c6d]{margin-top:20px}@media (max-width:600px){.content .article-content[data-v-77009c6d]{width:100%}}@media (min-width:600px){.content .article-content[data-v-77009c6d]{width:90%}}.content .article-content .top-content[data-v-77009c6d]{width:auto;height:auto;background:#fff;justify-content:center;text-align:center;align-items:center;border:1px solid #000}@media (max-width:600px){.content .article-content .top-content[data-v-77009c6d]{display:grid;grid-template-rows:75% 25%}.content .article-content .top-content .title[data-v-77009c6d]{margin-top:5px;margin-bottom:5px;font-size:20px;line-height:normal}.content .article-content .top-content .post-meta[data-v-77009c6d]{display:grid;margin:0 auto}.content .article-content .top-content .post-meta .post-meta-date[data-v-77009c6d]{margin:0 auto}}@media (min-width:600px){.content .article-content .top-content[data-v-77009c6d]{display:grid;grid-template-columns:60% 40%}.content .article-content .top-content .title[data-v-77009c6d]{margin-top:10px;margin-bottom:10px;margin-left:50px;font-size:40px}.content .article-content .top-content .post-meta[data-v-77009c6d]{display:grid;grid-template-rows:50%}.content .article-content .top-content .post-meta .post-meta-date[data-v-77009c6d]{grid-row:2/3}}.content .article-content .body-content[data-v-77009c6d]{width:auto;height:auto;text-align:left}@media (max-width:600px){.content .article-content .body-content[data-v-77009c6d]{line-height:normal}.content .article-content .body-content[data-v-77009c6d] h1{font-size:25px}.content .article-content .body-content[data-v-77009c6d] h2{font-size:23px}.content .article-content .body-content[data-v-77009c6d] h3{font-size:20px}.content .article-content .body-content[data-v-77009c6d] h4{font-size:18px}}@media (min-width:600px){.content .article-content .body-content[data-v-77009c6d]{line-height:inherit}.content .article-content .body-content[data-v-77009c6d] h1{font-size:40px}.content .article-content .body-content[data-v-77009c6d] h2{font-size:35px}.content .article-content .body-content[data-v-77009c6d] h3{font-size:30px}.content .article-content .body-content[data-v-77009c6d] h4{font-size:25px}}.content .article-content .body-content[data-v-77009c6d] h1{padding:.5em;background:#fff;border-left:5px solid #ffaf58}.content .article-content .body-content[data-v-77009c6d] h2{padding:.5em;background:#fff;border-left:5px solid #59fcff}.content .article-content .body-content[data-v-77009c6d] h3{padding:.5em;background:#fff;border-left:5px solid #fcff59}.content .article-content .body-content[data-v-77009c6d] h4{padding:.5em;background:#fff;border-left:5px solid #fc59ff}.content .article-content .body-content[data-v-77009c6d] pre{background-color:rgba(50,50,50,.1);margin-right:20px;margin-left:20px;margin-bottom:20px;padding:20px;border-radius:5px;line-height:normal;overflow:auto}",""])},253:function(n,t,e){"use strict";e.r(t);e(60),e(77);var summary=e(184),o={validate:function(n){var t=n.params;return summary.sourceFileArray.includes("./blog/".concat(t.date,"-").concat(t.slug,".md"))},asyncData:function(n){var t=n.params;return Object.assign({},e(235)("./".concat(t.date,"-").concat(t.slug,".json")),{params:t})},head:function(){var title="".concat(this.title," - aizugeekdojo.github.io"),n="https://aizugeekdojo.github.io/blog/".concat(this.params.date,"/").concat(this.params.slug,"/");return{title:title,meta:[{hid:"og:url",property:"og:url",content:n},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:this.params.description},{hid:"keywords",property:"keywords",content:this.params.keywords},{hid:"description",property:"description",content:this.params.description}],link:[{rel:"canonical",href:n}]}},data:function(){return{breadcrumbs:[{name:"BLOG",path:"/blog"}]}},created:function(){this.breadcrumbs.push({name:this.params.date,path:"/blog/".concat(this.params.date)},{name:this.params.slug,path:"/blog/".concat(this.params.date,"/").concat(this.params.slug)}),this.$store.commit("change_page",this.breadcrumbs)}},r=(e(239),e(2)),component=Object(r.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"top"},[e("div",{staticClass:"content"},[e("div",{staticClass:"article-content"},[e("div",{staticClass:"top-content"},[e("div",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),e("div",{staticClass:"post-meta"},[e("div",{staticClass:"post-meta-date"},[n._v("日付: "),e("time",[n._v(n._s(n.params.date))])])])]),n._v(" "),e("div",{staticClass:"body-content",domProps:{innerHTML:n._s(n.bodyHtml)}})])])])},[],!1,null,"77009c6d",null);t.default=component.exports}}]);