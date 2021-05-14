(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(n){n.exports=JSON.parse('{"fileMap":{"blog/2019-07-11-create_blog.json":{"title":"NuxtJSでブログを作る1","created_at":"2019-07-21T00:00:00.000Z","keywords":"NuxtJS, ブログ, processmd","description":"NuxtJSでブログを作ります。今回は、使う技術、実装の流れを解説します。","dir":"blog","base":"2019-07-11-create_blog.json","ext":".json","sourceBase":"2019-07-11-create_blog.md","sourceExt":".md"},"blog/2019-07-12-create_blog.json":{"title":"NuxtJSでブログを作る2","created_at":"2019-07-22T00:00:00.000Z","keywords":"NuxtJS, ブログ, processmd","description":"processmdを用いて、markdownからnuxtを使ってブログ記事を作成する方法を解説しています。","dir":"blog","base":"2019-07-12-create_blog.json","ext":".json","sourceBase":"2019-07-12-create_blog.md","sourceExt":".md"},"blog/2021-05-14-ファイルの転送法.json":{"title":"学校のパソコンへファイルを転送する話","created_at":"2021-05-14T00:00:00.000Z","keywords":"sa","writer":"matumoto","description":"ファイルを転送する話","dir":"blog","base":"2021-05-14-ファイルの転送法.json","ext":".json","sourceBase":"2021-05-14-ファイルの転送法.md","sourceExt":".md"},"blog/2019-07-13-ブログテンプレートを作成するCLIを作る.json":{"title":"ブログテンプレートを作成するCLIを作る","created_at":"2019-07-13T00:00:00.000Z","keywords":"processmd, cli, node, markdown","writer":"nozomoto","description":"processmdを用いてMarkdownからブログを作成する際のテンプレートを作るCLIを自作しました。","dir":"blog","base":"2019-07-13-ブログテンプレートを作成するCLIを作る.json","ext":".json","sourceBase":"2019-07-13-ブログテンプレートを作成するCLIを作る.md","sourceExt":".md"},"blog/2021-05-07-新入生のSAが来たよ.json":{"title":"新入生のSAが来たよ","created_at":"2021-05-07T00:00:00.000Z","keywords":"sa","writer":"suzakutakumi","description":"新SAが来た話&ブログ毎週更新する話","dir":"blog","base":"2021-05-07-新入生のSAが来たよ.json","ext":".json","sourceBase":"2021-05-07-新入生のSAが来たよ.md","sourceExt":".md"}},"sourceFileArray":["./blog/2019-07-11-create_blog.md","./blog/2019-07-12-create_blog.md","./blog/2019-07-13-ブログテンプレートを作成するCLIを作る.md","./blog/2021-05-07-新入生のSAが来たよ.md","./blog/2021-05-14-ファイルの転送法.md"]}')},210:function(n,e,t){var content=t(258);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(9).default)("ed766c4e",content,!0,{sourceMap:!1})},251:function(n,e,t){var map={"./2019-07-11-create_blog.json":252,"./2019-07-12-create_blog.json":253,"./2019-07-13-ブログテンプレートを作成するCLIを作る.json":254,"./2021-05-07-新入生のSAが来たよ.json":255,"./2021-05-14-ファイルの転送法.json":256,"./summary.json":192};function o(n){var e=r(n);return t(e)}function r(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}o.keys=function(){return Object.keys(map)},o.resolve=r,n.exports=o,o.id=251},252:function(n){n.exports=JSON.parse('{"title":"NuxtJSでブログを作る1","created_at":"2019-07-21T00:00:00.000Z","keywords":"NuxtJS, ブログ, processmd","description":"NuxtJSでブログを作ります。今回は、使う技術、実装の流れを解説します。","bodyContent":"# はじめに\\n\\n初めまして、会津大学学部4年で、Aizu Geek DojoのSAの森本望です。  \\n現在Aizu Geek Dojoではサイトのリニューアルに伴い、ブログ機能を作成しています。 \\n\\n今回は作っているブログについて、解説しながら作成していきたいと思っています。  \\n\\n# 使っている技術\\n\\nこのサイトで使っているのは主にNuxtJSです。  \\nNuxtJSはVueのアプリケーションを作成するフレームワークで、これを使うとVueのコンポーネント思考を用いてSPAやSSR、静的ページなどを作成することができます。  \\nまた、CSSにはSCSSを使っています。  \\n\\nなぜ我々がNuxtJSを用いてサイトを作ったかというのは多くは僕の趣味というところが大きいのですが、それ以外だと\\n\\n- VueJSは比較的学習コストが低い\\n- github.ioにホスティングできる、Staticなページを作成したい\\n- バニラVueJSよりは制限が多く、どこで何しているかわかりやすいと思うので\\n\\nからです。\\n\\nまたこのページはgithub.ioによってホスティングされており、CircleCIでビルドして該当ページにオートデプロイ(CD)できるようになっています。\\n\\nこのブログはMarkdownを使って書ける用に作成し、後輩たちがたくさん記事を書いてくれることを期待しています。  \\nまた、ContentfulなどのAPIファーストなCMSが流行りっぽいですが    \\n予算の都合上や、今後の維持を兼ねてある程度フルスクラッチで作ることになると思います。  \\n\\nフルスクラッチおとは言ったもの、大まかにやることは\\n\\n- MarkDownをHTMLに吐き出す\\n- NuxtJSで動的ルーティングできるようにする\\n- CSSをかく(これが一番大変)\\n- ブログを書きやすいようにテンプレをサクッと作れるようにする\\n\\nなど頑張ります。","bodyHtml":"<h1>はじめに</h1>\\n<p>初めまして、会津大学学部4年で、Aizu Geek DojoのSAの森本望です。<br>\\n現在Aizu Geek Dojoではサイトのリニューアルに伴い、ブログ機能を作成しています。</p>\\n<p>今回は作っているブログについて、解説しながら作成していきたいと思っています。</p>\\n<h1>使っている技術</h1>\\n<p>このサイトで使っているのは主にNuxtJSです。<br>\\nNuxtJSはVueのアプリケーションを作成するフレームワークで、これを使うとVueのコンポーネント思考を用いてSPAやSSR、静的ページなどを作成することができます。<br>\\nまた、CSSにはSCSSを使っています。</p>\\n<p>なぜ我々がNuxtJSを用いてサイトを作ったかというのは多くは僕の趣味というところが大きいのですが、それ以外だと</p>\\n<ul>\\n<li>VueJSは比較的学習コストが低い</li>\\n<li>github.ioにホスティングできる、Staticなページを作成したい</li>\\n<li>バニラVueJSよりは制限が多く、どこで何しているかわかりやすいと思うので</li>\\n</ul>\\n<p>からです。</p>\\n<p>またこのページはgithub.ioによってホスティングされており、CircleCIでビルドして該当ページにオートデプロイ(CD)できるようになっています。</p>\\n<p>このブログはMarkdownを使って書ける用に作成し、後輩たちがたくさん記事を書いてくれることを期待しています。<br>\\nまた、ContentfulなどのAPIファーストなCMSが流行りっぽいですが<br>\\n予算の都合上や、今後の維持を兼ねてある程度フルスクラッチで作ることになると思います。</p>\\n<p>フルスクラッチおとは言ったもの、大まかにやることは</p>\\n<ul>\\n<li>MarkDownをHTMLに吐き出す</li>\\n<li>NuxtJSで動的ルーティングできるようにする</li>\\n<li>CSSをかく(これが一番大変)</li>\\n<li>ブログを書きやすいようにテンプレをサクッと作れるようにする</li>\\n</ul>\\n<p>など頑張ります。</p>\\n","dir":"blog","base":"2019-07-11-create_blog.json","ext":".json","sourceBase":"2019-07-11-create_blog.md","sourceExt":".md"}')},253:function(n){n.exports=JSON.parse('{"title":"NuxtJSでブログを作る2","created_at":"2019-07-22T00:00:00.000Z","keywords":"NuxtJS, ブログ, processmd","description":"processmdを用いて、markdownからnuxtを使ってブログ記事を作成する方法を解説しています。","bodyContent":"# 続き\\n\\nこんにちは、会津大学学部4年の森本望です。  \\n[前回](../2019-07-11/create_blog)に引き続きブログを作っていきます。  \\n今回はMarkdownを使って動的にWebページを生成していきます。  \\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \\n\\nまずこのようなMarkdownを書きます。\\n\\n``` markdown\\n\\n---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-22\\ntags: NuxtJS, ブログ, processmd\\n---\\n\\n# 続き\\n\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。  \\n今回はMarkdownを使って動的にWebページを生成していきます。  \\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \\n\\nまずこのようなMarkdownを書きます。  \\n\\n```\\n\\n### Markdown to JSON\\n\\n先ほどのMarkDownをJSONに変換します。  \\n``` sh\\nprocessmd ./blog/* --stdout --outputDir ./blog/ > ./blog/summary.json\\n```\\n\\nとすると \\n\\n``` \\n$ tree blog\\nblog\\n├── 2019-07-22-create_blog.json\\n├── 2019-07-22-create_blog.md\\n└── summary.json\\n```\\n\\nこのようなファイルが出力されます。  \\n\\n2019-07-22-create_blog.json \\n``` json \\n{\\n  \\"title\\": \\"NuxtJSでブログを作る2\\",\\n  \\"created_at\\": \\"2019-07-22T00:00:00.000Z\\",\\n  \\"tags\\": \\"NuxtJS, ブログ, processmd\\",\\n  \\"bodyContent\\": \\"# 続き\\\\n\\\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。\\\\n\\\\n``` markdown\\\\n\\\\n---\\\\ntitle: NuxtJSでブログを作る2\\\\ncreated_at: 2019-07-22\\\\ntags: NuxtJS, ブログ, processmd\\\\n---\\\\n\\\\n# 続き\\\\n\\\\n[前回](./2019-07-21動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。\\\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。\\\\n\\\\n```\\",\\n  \\"bodyHtml\\": \\"<h1>続き</h1>\\\\n<p><a href=\\\\\\"./2019-07-21/create_blog\\\\\\">前回</a>に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。</p>\\\\n<h2>processmd</h2>\\\\n<p\\\\\\">processmd</a>です。\\\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。</p>\\\\n<p>まずこのようなMarkdownを書きます。</p>\\\\n<pre><code class=\\\\\\"hljs\\\\\\">---\\\\ntitle: NuxtJSでブログを作る2\\\\ncreated_at: 2019-07-2前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https:タ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。</code></pre>\\",\\n  \\"dir\\": \\"blog\\",\\n  \\"base\\": \\"2019-07-22-create_blog.json\\",\\n  \\"ext\\": \\".json\\",\\n  \\"sourceBase\\": \\"2019-07-22-create_blog.md\\",\\n  \\"sourceExt\\": \\".md\\"\\n}%    \\n```\\n\\nsummary.json\\n``` json \\n{\\n  \\"fileMap\\": {\\n    \\"blog/2019-07-22-create_blog.json\\": {\\n      \\"title\\": \\"NuxtJSでブログを作る2\\",\\n      \\"created_at\\": \\"2019-07-22T00:00:00.000Z\\",\\n      \\"tags\\": \\"NuxtJS, ブログ, processmd\\",\\n      \\"dir\\": \\"blog\\",\\n      \\"base\\": \\"2019-07-22-create_blog.json\\",\\n      \\"ext\\": \\".json\\",\\n      \\"sourceBase\\": \\"2019-07-22-create_blog.md\\",\\n      \\"sourceExt\\": \\".md\\"\\n    }\\n  },\\n  \\"sourceFileArray\\": [\\n    \\"./blog/2019-07-22-create_blog.md\\"\\n  ]\\n}\\n```\\n\\nこのデータを元にNuxtの動的リンクを使ってページを作成します。\\n\\n### Nuxtでページを作成\\n\\n#### ディレクトリ構造\\n\\nNuxtJSで先ほど作成したJSONを読み込み、HTMLに埋め込みます。\\n\\nディレクトリを以下のように作成します。    \\n`_date`や`_slug`はNuxtの動的なルーティングに使います。    \\n[ドキュメント](https://ja.nuxtjs.org/guide/routing/#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)\\n\\n``` \\n$ tree pages/blog\\npages/blog\\n├── _date\\n│   ├── _slug\\n│   │   └── index.vue\\n│   └── index.vue\\n└── index.vue\\n```\\n\\n#### pages/blog/_date/_slug/index.vue\\n\\nこのページはこんな感じに作っています。\\n\\n`validate`で動的なページを作成するリンクを制限しています。  \\n今回だと`summary.json`の`sourceFileArray`に、リンクのデータが存在しているかを確認しています。  \\n``` js\\nimport { sourceFileArray } from \'../../../../blog/summary.json\';\\n...\\nvalidate({ params }) {\\n  return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\\n},\\n```\\n\\n`asyncData`は実際に表示するコンテンツを取得してきています。  \\n今回だと`2019-07-22-create_blog.json`が当てはまりますね。  \\n\\n`head()`はHTMLのheadタグを作成するのに使います。  \\n以下の実装だと`url`, `title`しかmetaタグに入れていませんが、SEO的に`description`入れたりしたいですね。  \\n\\nそして`v-html`に`2019-07-22-create_blog.json`の`bodyHtml`を渡しています。  \\n余談ですが、ここで埋め込む要素にCSSを当てたい場合ディープセレクターを使う必要があります。  \\nこのWebページではこの記事を書いてる現在以下のようにCSSを当てています。  \\n素のHTMLだけだと味気ないので好みに整形しても良いですね  \\n\\n```css\\n/deep/ h1 {\\n  padding: 0.5em;\\n  background: white;\\n  border-left: solid 5px #ffaf58;\\n}\\n\\n/deep/ h2 {\\n  padding: 0.5em;\\n  background: white;\\n  border-left: solid 5px #59fcff;\\n}\\n\\n/deep/ pre {\\n  background-color: rgba(50, 50, 50, 0.1);\\n  margin-right: 20px;\\n  margin-left: 20px;\\n  margin-bottom: 20px;\\n  padding: 20px;\\n  border-radius: 5px;\\n  line-height: normal;\\n  overflow: auto;\\n}\\n```\\n\\n実装が以下のようになりました。(実際はもう少し複雑)\\n\\n``` js\\n<template>\\n  <div>\\n    <div class=\\"top-content\\"> \\n      <div class=\\"title\\">{{ title }}</div>\\n      <div class=\\"post-meta\\">\\n        <div class=\\"post-meta-date\\">日付: <time>{{ params.date }}</time></div>\\n      </div>\\n    </div>\\n    <div \\n      class=\\"body-content\\" \\n      v-html=\\"bodyHtml\\"></div>\\n  </div>\\n</template>\\n\\n<script>\\nimport { sourceFileArray } from \'../../../../blog/summary.json\'\\n\\nexport default {\\n  validate({ params }) {\\n    return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\\n  },\\n  asyncData({ params }) {\\n    return Object.assign(\\n      {},\\n      require(`~/blog/${params.date}-${params.slug}.json`),\\n      { params }\\n    )\\n  },\\n  head() {\\n    const title = `${this.title} - aizugeekdojo.github.io`\\n    const url = `https://aizugeekdojo.github.io/blog/${this.params.date}/${\\n      this.params.slug\\n    }/`\\n    return {\\n      title: title,\\n      meta: [\\n        { hid: \'og:url\', property: \'og:url\', content: url },\\n        { hid: \'og:title\', property: \'og:title\', content: title }\\n      ],\\n      link: [{ rel: \'canonical\', href: url }]\\n    }\\n  }\\n}\\n<\/script>\\n```\\n\\nこれでとりあえずMarkdownからブログ記事を書くことは可能になりました。","bodyHtml":"<h1>続き</h1>\\n<p>こんにちは、会津大学学部4年の森本望です。<br>\\n<a href=\\"../2019-07-11/create_blog\\">前回</a>に引き続きブログを作っていきます。<br>\\n今回はMarkdownを使って動的にWebページを生成していきます。<br>\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。</p>\\n<h2>processmd</h2>\\n<p>今回MarkdownをHTMLに直すのに使うのは<a href=\\"https://www.npmjs.com/package/processmd\\">processmd</a>です。<br>\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。</p>\\n<p>まずこのようなMarkdownを書きます。</p>\\n<pre><code class=\\"hljs\\">---\\ntitle: NuxtJSでブログを作る2\\ncreated_at: 2019-07-22\\ntags: NuxtJS, ブログ, processmd\\n---\\n\\n# 続き\\n\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。  \\n今回はMarkdownを使って動的にWebページを生成していきます。  \\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。  \\n\\n## processmd \\n\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。  \\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。  \\n\\nまずこのようなMarkdownを書きます。</code></pre><h3>Markdown to JSON</h3>\\n<p>先ほどのMarkDownをJSONに変換します。</p>\\n<pre><code class=\\"hljs\\">processmd ./blog/* --stdout --outputDir ./blog/ &gt; ./blog/summary.json</code></pre><p>とすると</p>\\n<pre><code class=\\"hljs\\">$ tree blog\\nblog\\n├── 2019-07-22-create_blog.json\\n├── 2019-07-22-create_blog.md\\n└── summary.json</code></pre><p>このようなファイルが出力されます。</p>\\n<p>2019-07-22-create_blog.json</p>\\n<pre><code class=\\"hljs\\">{\\n  \\"title\\": \\"NuxtJSでブログを作る2\\",\\n  \\"created_at\\": \\"2019-07-22T00:00:00.000Z\\",\\n  \\"tags\\": \\"NuxtJS, ブログ, processmd\\",\\n  \\"bodyContent\\": \\"# 続き\\\\n\\\\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。\\\\n\\\\n``` markdown\\\\n\\\\n---\\\\ntitle: NuxtJSでブログを作る2\\\\ncreated_at: 2019-07-22\\\\ntags: NuxtJS, ブログ, processmd\\\\n---\\\\n\\\\n# 続き\\\\n\\\\n[前回](./2019-07-21動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。\\\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。\\\\n\\\\n```\\",\\n  \\"bodyHtml\\": \\"&lt;h1&gt;続き&lt;/h1&gt;\\\\n&lt;p&gt;&lt;a href=\\\\\\"./2019-07-21/create_blog\\\\\\"&gt;前回&lt;/a&gt;に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。&lt;/p&gt;\\\\n&lt;h2&gt;processmd&lt;/h2&gt;\\\\n&lt;p\\\\\\"&gt;processmd&lt;/a&gt;です。\\\\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。&lt;/p&gt;\\\\n&lt;p&gt;まずこのようなMarkdownを書きます。&lt;/p&gt;\\\\n&lt;pre&gt;&lt;code class=\\\\\\"hljs\\\\\\"&gt;---\\\\ntitle: NuxtJSでブログを作る2\\\\ncreated_at: 2019-07-2前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\\\\n今回はMarkdownを使って動的にWebページを生成していきます。\\\\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\\\\n\\\\n## processmd \\\\n\\\\n今回MarkdownをHTMLに直すのに使うのは[processmd](https:タ情報を含ませやすいからです。\\\\n\\\\nまずこのようなMarkdownを書きます。&lt;/code&gt;&lt;/pre&gt;\\",\\n  \\"dir\\": \\"blog\\",\\n  \\"base\\": \\"2019-07-22-create_blog.json\\",\\n  \\"ext\\": \\".json\\",\\n  \\"sourceBase\\": \\"2019-07-22-create_blog.md\\",\\n  \\"sourceExt\\": \\".md\\"\\n}%</code></pre><p>summary.json</p>\\n<pre><code class=\\"hljs\\">{\\n  \\"fileMap\\": {\\n    \\"blog/2019-07-22-create_blog.json\\": {\\n      \\"title\\": \\"NuxtJSでブログを作る2\\",\\n      \\"created_at\\": \\"2019-07-22T00:00:00.000Z\\",\\n      \\"tags\\": \\"NuxtJS, ブログ, processmd\\",\\n      \\"dir\\": \\"blog\\",\\n      \\"base\\": \\"2019-07-22-create_blog.json\\",\\n      \\"ext\\": \\".json\\",\\n      \\"sourceBase\\": \\"2019-07-22-create_blog.md\\",\\n      \\"sourceExt\\": \\".md\\"\\n    }\\n  },\\n  \\"sourceFileArray\\": [\\n    \\"./blog/2019-07-22-create_blog.md\\"\\n  ]\\n}</code></pre><p>このデータを元にNuxtの動的リンクを使ってページを作成します。</p>\\n<h3>Nuxtでページを作成</h3>\\n<h4>ディレクトリ構造</h4>\\n<p>NuxtJSで先ほど作成したJSONを読み込み、HTMLに埋め込みます。</p>\\n<p>ディレクトリを以下のように作成します。<br>\\n<code>_date</code>や<code>_slug</code>はNuxtの動的なルーティングに使います。<br>\\n<a href=\\"https://ja.nuxtjs.org/guide/routing/#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0\\">ドキュメント</a></p>\\n<pre><code class=\\"hljs\\">$ tree pages/blog\\npages/blog\\n├── _date\\n│   ├── _slug\\n│   │   └── index.vue\\n│   └── index.vue\\n└── index.vue</code></pre><h4>pages/blog/_date/_slug/index.vue</h4>\\n<p>このページはこんな感じに作っています。</p>\\n<p><code>validate</code>で動的なページを作成するリンクを制限しています。<br>\\n今回だと<code>summary.json</code>の<code>sourceFileArray</code>に、リンクのデータが存在しているかを確認しています。</p>\\n<pre><code class=\\"hljs\\">import { sourceFileArray } from \'../../../../blog/summary.json\';\\n...\\nvalidate({ params }) {\\n  return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\\n},</code></pre><p><code>asyncData</code>は実際に表示するコンテンツを取得してきています。<br>\\n今回だと<code>2019-07-22-create_blog.json</code>が当てはまりますね。</p>\\n<p><code>head()</code>はHTMLのheadタグを作成するのに使います。<br>\\n以下の実装だと<code>url</code>, <code>title</code>しかmetaタグに入れていませんが、SEO的に<code>description</code>入れたりしたいですね。</p>\\n<p>そして<code>v-html</code>に<code>2019-07-22-create_blog.json</code>の<code>bodyHtml</code>を渡しています。<br>\\n余談ですが、ここで埋め込む要素にCSSを当てたい場合ディープセレクターを使う必要があります。<br>\\nこのWebページではこの記事を書いてる現在以下のようにCSSを当てています。<br>\\n素のHTMLだけだと味気ないので好みに整形しても良いですね</p>\\n<pre><code class=\\"hljs\\">/deep/ h1 {\\n  padding: 0.5em;\\n  background: white;\\n  border-left: solid 5px #ffaf58;\\n}\\n\\n/deep/ h2 {\\n  padding: 0.5em;\\n  background: white;\\n  border-left: solid 5px #59fcff;\\n}\\n\\n/deep/ pre {\\n  background-color: rgba(50, 50, 50, 0.1);\\n  margin-right: 20px;\\n  margin-left: 20px;\\n  margin-bottom: 20px;\\n  padding: 20px;\\n  border-radius: 5px;\\n  line-height: normal;\\n  overflow: auto;\\n}</code></pre><p>実装が以下のようになりました。(実際はもう少し複雑)</p>\\n<pre><code class=\\"hljs\\">&lt;template&gt;\\n  &lt;div&gt;\\n    &lt;div class=\\"top-content\\"&gt; \\n      &lt;div class=\\"title\\"&gt;{{ title }}&lt;/div&gt;\\n      &lt;div class=\\"post-meta\\"&gt;\\n        &lt;div class=\\"post-meta-date\\"&gt;日付: &lt;time&gt;{{ params.date }}&lt;/time&gt;&lt;/div&gt;\\n      &lt;/div&gt;\\n    &lt;/div&gt;\\n    &lt;div \\n      class=\\"body-content\\" \\n      v-html=\\"bodyHtml\\"&gt;&lt;/div&gt;\\n  &lt;/div&gt;\\n&lt;/template&gt;\\n\\n&lt;script&gt;\\nimport { sourceFileArray } from \'../../../../blog/summary.json\'\\n\\nexport default {\\n  validate({ params }) {\\n    return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)\\n  },\\n  asyncData({ params }) {\\n    return Object.assign(\\n      {},\\n      require(`~/blog/${params.date}-${params.slug}.json`),\\n      { params }\\n    )\\n  },\\n  head() {\\n    const title = `${this.title} - aizugeekdojo.github.io`\\n    const url = `https://aizugeekdojo.github.io/blog/${this.params.date}/${\\n      this.params.slug\\n    }/`\\n    return {\\n      title: title,\\n      meta: [\\n        { hid: \'og:url\', property: \'og:url\', content: url },\\n        { hid: \'og:title\', property: \'og:title\', content: title }\\n      ],\\n      link: [{ rel: \'canonical\', href: url }]\\n    }\\n  }\\n}\\n&lt;/script&gt;</code></pre><p>これでとりあえずMarkdownからブログ記事を書くことは可能になりました。</p>\\n","dir":"blog","base":"2019-07-12-create_blog.json","ext":".json","sourceBase":"2019-07-12-create_blog.md","sourceExt":".md"}')},254:function(n){n.exports=JSON.parse('{"title":"ブログテンプレートを作成するCLIを作る","created_at":"2019-07-13T00:00:00.000Z","keywords":"processmd, cli, node, markdown","writer":"nozomoto","description":"processmdを用いてMarkdownからブログを作成する際のテンプレートを作るCLIを自作しました。","bodyContent":"# ブログテンプレートを作成するCLIを作る\\n\\nこんにちは会津大学学部4年森本望です。  \\n[前回](../2019-07-12/create_blog)書いた通り、`processmd`を用いてMarkdownからJSONに変換して\\nブログ記事にしています。\\n\\n今回は`processmd`に使うテンプレートを作成するCLIをNodeJSを使って作成しました。  \\n作成するCLIが出力するのは\\n\\n```\\n---\\ntitle: ブログテンプレートを作成するCLIを作る\\ncreated_at: 2019-07-13\\ntags: processmd, cli, node, markdown\\ndescription:\\nwriter: nozomoto\\n---\\n```\\n\\nといったものを出力します。\\n\\n## 技術\\n使った言語は\\n- NodeJSです。\\n\\n[processmd_template_maker](https://github.com/nozo-moto/processmd_template_maker)\\n\\n`readline-sync`を使い、標準入力で項目を入れることができます。\\n\\n``` js\\nconst title = readlineSync.question(\\"Title: \\");\\nconst tags = readlineSync.question(\\"Tag(カンマ区切り): \\");\\nconst writer = readlineSync.question(\\"writer: \\");\\n```\\n\\nまた [`command-line-arg`](https://github.com/75lb/command-line-args) と [`command-line-usage`](https://github.com/75lb/command-line-usage) を使ってコマンドライン引数、`--help` の表示をしています。\\n\\nこんな感じです。\\n\\n``` js\\nconst commandLineArgs = require(\\"command-line-args\\");\\nconst commandLineUsage = require(\\"command-line-usage\\");\\nconst optionDefinitions = [\\n  {\\n    name: \\"help\\",\\n    alias: \\"h\\",\\n    type: Boolean\\n  },\\n  {\\n    name: \\"outputDir\\",\\n    alias: \\"o\\",\\n    type: String\\n  }\\n];\\n\\nconst sections = [\\n  {\\n    header: \\"processmd template maker\\",\\n    content: \\"generate template of processmd for aizugeekdojo.github.io\\"\\n  },\\n  {\\n    header: \\"Options\\",\\n    optionList: [\\n      {\\n        name: \\"outputDir\\",\\n        typeLabel: \\"{underline path}\\",\\n        description: \\"The output template path.\\"\\n      }\\n    ]\\n  }\\n];\\n\\nconst options = commandLineArgs(optionDefinitions);\\nconst usage = commandLineUsage(sections);\\n\\nif (options.help || !options.outputDir) {\\n  console.log(usage);\\n} else {\\n  main();\\n}\\n```\\n\\n## 使い方\\n\\n### インストール\\n\\n```\\nnpm i --save nozo-moto/processmd_template_maker\\n```\\n\\n`package.json`に\\n\\n```\\n  \\"scripts\\": {\\n\\t\\t\\"blog-template\\": \\"processmd_template_maker --outputDir=./blog/\\"\\n  },\\n```\\n\\nを付け加えます。\\nそして、`npm run blog-template`\\n```\\n$ npm run blog-template\\n\\nTitle: test\\nTag(カンマ区切り): test\\nwriter: test\\n```\\n\\nすると\\n```\\n---\\ntitle: test\\ncreated_at: 2019-07-13\\ntags: test\\ndescription:\\nwriter: test\\n---\\n```\\n\\nと書かれた`2019-07-13-test.md`が作成されます。\\n\\nこの後は、このファイルに記事を書けば自動的にレンダリングされます。","bodyHtml":"<h1>ブログテンプレートを作成するCLIを作る</h1>\\n<p>こんにちは会津大学学部4年森本望です。<br>\\n<a href=\\"../2019-07-12/create_blog\\">前回</a>書いた通り、<code>processmd</code>を用いてMarkdownからJSONに変換して\\nブログ記事にしています。</p>\\n<p>今回は<code>processmd</code>に使うテンプレートを作成するCLIをNodeJSを使って作成しました。<br>\\n作成するCLIが出力するのは</p>\\n<pre><code>---\\ntitle: ブログテンプレートを作成するCLIを作る\\ncreated_at: 2019-07-13\\ntags: processmd, cli, node, markdown\\ndescription:\\nwriter: nozomoto\\n---\\n</code></pre>\\n<p>といったものを出力します。</p>\\n<h2>技術</h2>\\n<p>使った言語は</p>\\n<ul>\\n<li>NodeJSです。</li>\\n</ul>\\n<p><a href=\\"https://github.com/nozo-moto/processmd_template_maker\\">processmd_template_maker</a></p>\\n<p><code>readline-sync</code>を使い、標準入力で項目を入れることができます。</p>\\n<pre><code class=\\"hljs\\">const title = readlineSync.question(\\"Title: \\");\\nconst tags = readlineSync.question(\\"Tag(カンマ区切り): \\");\\nconst writer = readlineSync.question(\\"writer: \\");</code></pre><p>また <a href=\\"https://github.com/75lb/command-line-args\\"><code>command-line-arg</code></a> と <a href=\\"https://github.com/75lb/command-line-usage\\"><code>command-line-usage</code></a> を使ってコマンドライン引数、<code>--help</code> の表示をしています。</p>\\n<p>こんな感じです。</p>\\n<pre><code class=\\"hljs\\">const commandLineArgs = require(\\"command-line-args\\");\\nconst commandLineUsage = require(\\"command-line-usage\\");\\nconst optionDefinitions = [\\n  {\\n    name: \\"help\\",\\n    alias: \\"h\\",\\n    type: Boolean\\n  },\\n  {\\n    name: \\"outputDir\\",\\n    alias: \\"o\\",\\n    type: String\\n  }\\n];\\n\\nconst sections = [\\n  {\\n    header: \\"processmd template maker\\",\\n    content: \\"generate template of processmd for aizugeekdojo.github.io\\"\\n  },\\n  {\\n    header: \\"Options\\",\\n    optionList: [\\n      {\\n        name: \\"outputDir\\",\\n        typeLabel: \\"{underline path}\\",\\n        description: \\"The output template path.\\"\\n      }\\n    ]\\n  }\\n];\\n\\nconst options = commandLineArgs(optionDefinitions);\\nconst usage = commandLineUsage(sections);\\n\\nif (options.help || !options.outputDir) {\\n  console.log(usage);\\n} else {\\n  main();\\n}</code></pre><h2>使い方</h2>\\n<h3>インストール</h3>\\n<pre><code>npm i --save nozo-moto/processmd_template_maker\\n</code></pre>\\n<p><code>package.json</code>に</p>\\n<pre><code>  &quot;scripts&quot;: {\\n\\t\\t&quot;blog-template&quot;: &quot;processmd_template_maker --outputDir=./blog/&quot;\\n  },\\n</code></pre>\\n<p>を付け加えます。\\nそして、<code>npm run blog-template</code></p>\\n<pre><code>$ npm run blog-template\\n\\nTitle: test\\nTag(カンマ区切り): test\\nwriter: test\\n</code></pre>\\n<p>すると</p>\\n<pre><code>---\\ntitle: test\\ncreated_at: 2019-07-13\\ntags: test\\ndescription:\\nwriter: test\\n---\\n</code></pre>\\n<p>と書かれた<code>2019-07-13-test.md</code>が作成されます。</p>\\n<p>この後は、このファイルに記事を書けば自動的にレンダリングされます。</p>\\n","dir":"blog","base":"2019-07-13-ブログテンプレートを作成するCLIを作る.json","ext":".json","sourceBase":"2019-07-13-ブログテンプレートを作成するCLIを作る.md","sourceExt":".md"}')},255:function(n){n.exports=JSON.parse('{"title":"新入生のSAが来たよ","created_at":"2021-05-07T00:00:00.000Z","keywords":"sa","writer":"suzakutakumi","description":"新SAが来た話&ブログ毎週更新する話","bodyContent":"# 新入生のSAが来たよ!\\n\\nおはこんばんにちわ。学部2年の鈴木 拓眞です。  \\nブログのお久しぶりの更新です。\\n\\n## お知らせ\\n\\n最初に重要なお知らせをします!  \\n今回から、試験的にブログが毎週更新になります。\\n\\n## 新SA\\n\\n週更新1回目の内容は新SAについてです!  \\nまだ入学して1ヶ月も経たないのに、AizuGeekDojoに新入生のSAが3人も増えました。  \\n4/28(水)のミーティングで新SAとの顔合わせをしました。  \\n新SAは以下の通りです。\\n\\n- 石本 麻奈\\n- 福田 真菜\\n- 高棟 雄斗(HN:しんぶんぶん)\\n\\n技術系を初めて触る人や、先輩に負けないくらい強い人もいます。  \\n\\n新SAは3Dプリンターやレーザーカッターの使い方やメンテなど、まだSAの業務としてわからないことが多くあります。  \\nなので最初は、先輩SAの指導の下SAの業務を覚えることから始めます。  \\n\\nまた近いうちに、ブログのメンバーも更新します!  \\n来週は、学部2年の松本くんが記事を書いてくれます。","bodyHtml":"<h1>新入生のSAが来たよ!</h1>\\n<p>おはこんばんにちわ。学部2年の鈴木 拓眞です。<br>\\nブログのお久しぶりの更新です。</p>\\n<h2>お知らせ</h2>\\n<p>最初に重要なお知らせをします!<br>\\n今回から、試験的にブログが毎週更新になります。</p>\\n<h2>新SA</h2>\\n<p>週更新1回目の内容は新SAについてです!<br>\\nまだ入学して1ヶ月も経たないのに、AizuGeekDojoに新入生のSAが3人も増えました。<br>\\n4/28(水)のミーティングで新SAとの顔合わせをしました。<br>\\n新SAは以下の通りです。</p>\\n<ul>\\n<li>石本 麻奈</li>\\n<li>福田 真菜</li>\\n<li>高棟 雄斗(HN:しんぶんぶん)</li>\\n</ul>\\n<p>技術系を初めて触る人や、先輩に負けないくらい強い人もいます。</p>\\n<p>新SAは3Dプリンターやレーザーカッターの使い方やメンテなど、まだSAの業務としてわからないことが多くあります。<br>\\nなので最初は、先輩SAの指導の下SAの業務を覚えることから始めます。</p>\\n<p>また近いうちに、ブログのメンバーも更新します!<br>\\n来週は、学部2年の松本くんが記事を書いてくれます。</p>\\n","dir":"blog","base":"2021-05-07-新入生のSAが来たよ.json","ext":".json","sourceBase":"2021-05-07-新入生のSAが来たよ.md","sourceExt":".md"}')},256:function(n){n.exports=JSON.parse('{"title":"学校のパソコンへファイルを転送する話","created_at":"2021-05-14T00:00:00.000Z","keywords":"sa","writer":"matumoto","description":"ファイルを転送する話","bodyContent":"# 学校のパソコンへファイルを転送する話\\nどうもこんにちは！  \\n学部2年の松本響輝です。  \\n毎週更新が始まって今回で2週目になります。  \\n今回の題材は学校のパソコンへファイルを転送する方法についてです。\\n※学校のパソコンへファイルを転送するという内容なので学内者向けの記事になります！申し訳ありません！    \\n\\n## お知らせ\\n\\nコロナウィルス対策により5/7日～6/1日の間AizuGeekDojoの利用制限がかかってしまいました。  \\n具体的には下記の通りになります。\\n- 一人で機器を使用できる学生に限り、予約をした上で**1名**まで利用可。\\n- 通常通りのStudentAssitant業務などは中止。\\n\\n会津若松にも感染が拡大してきましたが、オンラインなどで活発に活動していきたいですね。    \\n\\n## 学校のパソコンへファイルを転送する方法\\nオンライン授業が始まったことで家から学校のパソコンへファイルを転送したいという需要も増えてきたのではないのでしょうか。  \\nファイルを転送するだけであれば色々な手順があります。\\n\\n- ストレージを利用する。\\n  - Googleドライブ\\n  - Microsoft OneDrive\\n- メールで自分宛てに送る。\\n  - Gmail\\n  - Sylpheed / Thunderbird\\n- ファイル転送サイトを利用する。\\n  - Send Anywhere\\n  - データ便\\n- FTPを利用する。\\n  - SFTP\\n  - FileZilla\\n\\nなど    \\n\\n\\nストレージやファイル転送サイトを利用すればファイルを送ることはできると思います。  \\nしかし、学校のパソコンからファイルを受け取るという手順が増えます。  \\nそこで、FTP(File Transpher Protocol)を利用してファイルを転送するfilezillaというソフトについて紹介します。    \\n\\nFileZillaはこちら↓からインストールできます。  \\n[https://ja.osdn.net/projects/filezilla/releases/](https://ja.osdn.net/projects/filezilla/releases/)\\n\\nWindows版とMac版があるのでほとんどの方は使えると思います。    \\n\\n\\n### FileZillaの使い方\\n\\nまず、FileZillaを開くとこんな感じの画面が表示されます。  \\n左上のサーバーが三つ並んでいるようなアイコンをクリックして接続先を設定します。  \\n![Imgur](https://imgur.com/1sm1mR6.jpg)    \\n\\n\\n\\n次に、接続先を作るので「新しいサイト」をクリックします。  \\n![Imgur](https://imgur.com/J3LTq2J.jpg)    \\n\\n\\n\\nそして、画像右側のように入力します。  \\nユーザーの欄は各自のAINSのIDを入力してください。  \\nまた、ホスト名についてはこちら↓のリンクを参照してください。  \\n[会津大学情報センター(istc)](https://web-int.u-aizu.ac.jp/labs/istc/ipc/topic/sshgate/sshgate.html)  \\n※学内者限定のリンクになります！\\n\\n![Imgur](https://imgur.com/N74qYA8.jpg)    \\n\\n\\n\\n入力し終えたら「接続」をクリックして、下のような画面でパスワードを入力します。  \\n![Imgur](https://imgur.com/loGkXP8.jpg)    \\n\\n\\n\\n「OK」をクリックすると先ほどの画面に戻り、右側のリモートサイトという欄で自分のパソコンに繋がっていることが確認できると思います。  \\n![Imgur](https://imgur.com/QE6e7Ff.jpg)    \\n\\n\\n\\nあとは、ファイルをダブルクリックもしくは右クリックして「ダウンロード」をすると自分のパソコンの画像左側のディレクトリにダウンロードします。  \\n転送する際も同様です。  \\n![Imgur](https://imgur.com/ioHxIfJ.jpg)    \\n\\n\\n\\n## あとがき\\nファイルを自由に転送することができるようになりました！  \\nオンライン授業であったとしても様々なツールを駆使して快適に過ごしていきましょう！","bodyHtml":"<h1>学校のパソコンへファイルを転送する話</h1>\\n<p>どうもこんにちは！<br>\\n学部2年の松本響輝です。<br>\\n毎週更新が始まって今回で2週目になります。<br>\\n今回の題材は学校のパソコンへファイルを転送する方法についてです。\\n※学校のパソコンへファイルを転送するという内容なので学内者向けの記事になります！申し訳ありません！</p>\\n<h2>お知らせ</h2>\\n<p>コロナウィルス対策により5/7日～6/1日の間AizuGeekDojoの利用制限がかかってしまいました。<br>\\n具体的には下記の通りになります。</p>\\n<ul>\\n<li>一人で機器を使用できる学生に限り、予約をした上で<strong>1名</strong>まで利用可。</li>\\n<li>通常通りのStudentAssitant業務などは中止。</li>\\n</ul>\\n<p>会津若松にも感染が拡大してきましたが、オンラインなどで活発に活動していきたいですね。</p>\\n<h2>学校のパソコンへファイルを転送する方法</h2>\\n<p>オンライン授業が始まったことで家から学校のパソコンへファイルを転送したいという需要も増えてきたのではないのでしょうか。<br>\\nファイルを転送するだけであれば色々な手順があります。</p>\\n<ul>\\n<li>ストレージを利用する。\\n<ul>\\n<li>Googleドライブ</li>\\n<li>Microsoft OneDrive</li>\\n</ul>\\n</li>\\n<li>メールで自分宛てに送る。\\n<ul>\\n<li>Gmail</li>\\n<li>Sylpheed / Thunderbird</li>\\n</ul>\\n</li>\\n<li>ファイル転送サイトを利用する。\\n<ul>\\n<li>Send Anywhere</li>\\n<li>データ便</li>\\n</ul>\\n</li>\\n<li>FTPを利用する。\\n<ul>\\n<li>SFTP</li>\\n<li>FileZilla</li>\\n</ul>\\n</li>\\n</ul>\\n<p>など</p>\\n<p>ストレージやファイル転送サイトを利用すればファイルを送ることはできると思います。<br>\\nしかし、学校のパソコンからファイルを受け取るという手順が増えます。<br>\\nそこで、FTP(File Transpher Protocol)を利用してファイルを転送するfilezillaというソフトについて紹介します。</p>\\n<p>FileZillaはこちら↓からインストールできます。<br>\\n<a href=\\"https://ja.osdn.net/projects/filezilla/releases/\\">https://ja.osdn.net/projects/filezilla/releases/</a></p>\\n<p>Windows版とMac版があるのでほとんどの方は使えると思います。</p>\\n<h3>FileZillaの使い方</h3>\\n<p>まず、FileZillaを開くとこんな感じの画面が表示されます。<br>\\n左上のサーバーが三つ並んでいるようなアイコンをクリックして接続先を設定します。<br>\\n<img src=\\"https://imgur.com/1sm1mR6.jpg\\" alt=\\"Imgur\\"></p>\\n<p>次に、接続先を作るので「新しいサイト」をクリックします。<br>\\n<img src=\\"https://imgur.com/J3LTq2J.jpg\\" alt=\\"Imgur\\"></p>\\n<p>そして、画像右側のように入力します。<br>\\nユーザーの欄は各自のAINSのIDを入力してください。<br>\\nまた、ホスト名についてはこちら↓のリンクを参照してください。<br>\\n<a href=\\"https://web-int.u-aizu.ac.jp/labs/istc/ipc/topic/sshgate/sshgate.html\\">会津大学情報センター(istc)</a><br>\\n※学内者限定のリンクになります！</p>\\n<p><img src=\\"https://imgur.com/N74qYA8.jpg\\" alt=\\"Imgur\\"></p>\\n<p>入力し終えたら「接続」をクリックして、下のような画面でパスワードを入力します。<br>\\n<img src=\\"https://imgur.com/loGkXP8.jpg\\" alt=\\"Imgur\\"></p>\\n<p>「OK」をクリックすると先ほどの画面に戻り、右側のリモートサイトという欄で自分のパソコンに繋がっていることが確認できると思います。<br>\\n<img src=\\"https://imgur.com/QE6e7Ff.jpg\\" alt=\\"Imgur\\"></p>\\n<p>あとは、ファイルをダブルクリックもしくは右クリックして「ダウンロード」をすると自分のパソコンの画像左側のディレクトリにダウンロードします。<br>\\n転送する際も同様です。<br>\\n<img src=\\"https://imgur.com/ioHxIfJ.jpg\\" alt=\\"Imgur\\"></p>\\n<h2>あとがき</h2>\\n<p>ファイルを自由に転送することができるようになりました！<br>\\nオンライン授業であったとしても様々なツールを駆使して快適に過ごしていきましょう！</p>\\n","dir":"blog","base":"2021-05-14-ファイルの転送法.json","ext":".json","sourceBase":"2021-05-14-ファイルの転送法.md","sourceExt":".md"}')},257:function(n,e,t){"use strict";var o=t(210);t.n(o).a},258:function(n,e,t){(e=t(8)(!1)).push([n.i,'#app[data-v-749ae37a]{background-color:#93d1d4}.top[data-v-749ae37a]{overflow:hidden;align-items:center;width:100%;display:flex;flex-direction:column;justify-content:center;background-color:#f7b756}@media (min-width:600px){.content[data-v-749ae37a]{width:100%;overflow:hidden;font-size:medium;letter-spacing:.02em;font-weight:400;line-height:2em;text-align:justify-all;max-width:800px;min-width:600px;min-height:500px;padding:60px 80px 200px;background-color:#fdfced;display:flex;flex-direction:column;align-items:center;box-shadow:0 0 20px rgba(0,0,0,.36863)}.content ul[data-v-749ae37a]{list-style-type:decimal}.content ul ul[data-v-749ae37a]{list-style-type:none;padding-bottom:1.3em;text-indent:25px each-line}.content ul ul li[data-v-749ae37a]:before{content:"◆ ";font-size:xx-small;padding-right:8px;color:#e66c53}.content h2[data-v-749ae37a]{background-color:#f3d3b1;width:100%;padding:12px 15px;text-indent:5px each-line;margin:0 0 13px;font-size:23px}.content a[data-v-749ae37a]{color:#473d39;margin:0 5px}.content p[data-v-749ae37a]{min-width:90%;text-indent:25px each-line;padding:0 20px}.content h3[data-v-749ae37a]{color:#010101;border-bottom:3px solid #00a5b1}}@media (max-width:600px){.content[data-v-749ae37a]{font-size:14px;letter-spacing:0;line-height:1.8em;min-height:500px;background-color:#fdfced;display:flex;flex-direction:column;align-items:center;box-shadow:0 0 20px rgba(0,0,0,.36863);text-align:justify;width:100%;margin:0;padding:20px 0 80px;word-break:break-word;word-wrap:normal}.content a[data-v-749ae37a],.content p[data-v-749ae37a]{margin:15px;color:#473d39}.content p[data-v-749ae37a]{text-indent:25px each-line}.content ul[data-v-749ae37a]{margin:15px 15px 15px 0;overflow:auto;list-style-type:decimal}.content ul ul[data-v-749ae37a]{list-style-type:none;padding-bottom:1.3em}.content ul ul li[data-v-749ae37a]:before{content:"◆ ";font-size:xx-small;padding-right:8px;color:#e66c53}}.default[data-v-749ae37a]{padding:0;margin:0;width:100%}.content[data-v-749ae37a]{margin:0 auto;padding:0 20px 20px}@media (max-width:600px){.content[data-v-749ae37a]{width:100%}}.content .article-content[data-v-749ae37a]{margin-top:20px}@media (max-width:600px){.content .article-content[data-v-749ae37a]{width:100%}}@media (min-width:600px){.content .article-content[data-v-749ae37a]{width:90%}}.content .article-content .top-content[data-v-749ae37a]{width:auto;height:auto}@media (max-width:600px){.content .article-content .top-content .post-meta[data-v-749ae37a]{font-size:16px;margin:0 0 auto}.content .article-content .top-content .post-meta .post-meta-date[data-v-749ae37a]{margin:0 auto}}@media (min-width:600px){.content .article-content .top-content .post-meta[data-v-749ae37a]{font-size:16px;margin:0 0 auto}.content .article-content .top-content .post-meta .post-meta-date[data-v-749ae37a]{margin:0 auto}}.content .article-content .body-content[data-v-749ae37a]{width:auto;height:auto;text-align:left}@media (max-width:600px){.content .article-content .body-content[data-v-749ae37a]{line-height:normal}.content .article-content .body-content[data-v-749ae37a] h1{font-size:25px}.content .article-content .body-content[data-v-749ae37a] h2{font-size:23px}.content .article-content .body-content[data-v-749ae37a] h3{font-size:20px}.content .article-content .body-content[data-v-749ae37a] h4{font-size:18px}}@media (min-width:600px){.content .article-content .body-content[data-v-749ae37a]{line-height:inherit}.content .article-content .body-content[data-v-749ae37a] h1{font-size:30px}.content .article-content .body-content[data-v-749ae37a] h2{font-size:28px}.content .article-content .body-content[data-v-749ae37a] h3{font-size:25px}.content .article-content .body-content[data-v-749ae37a] h4{font-size:22px}.content .article-content .body-content[data-v-749ae37a] pre{font-size:14px}}.content .article-content .body-content[data-v-749ae37a] h1{padding:.5em;background:#fff;border-left:5px solid #ffaf58}.content .article-content .body-content[data-v-749ae37a] h2{padding:.5em;background:#fff;border-left:5px solid #59fcff}.content .article-content .body-content[data-v-749ae37a] h3{padding:.5em;background:#fff;border-left:5px solid #fcff59}.content .article-content .body-content[data-v-749ae37a] h4{padding:.5em;background:#fff;border-left:5px solid #fc59ff}.content .article-content .body-content[data-v-749ae37a] pre{background-color:rgba(50,50,50,.1);margin-right:20px;margin-left:20px;margin-bottom:20px;padding:20px;border-radius:5px;line-height:normal;overflow:auto}',""]),n.exports=e},271:function(n,e,t){"use strict";t.r(e);t(70),t(71);var summary=t(192),o={validate:function(n){var e=n.params;return summary.sourceFileArray.includes("./blog/".concat(e.date,"-").concat(e.slug,".md"))},asyncData:function(n){var e=n.params;return Object.assign({},t(251)("./".concat(e.date,"-").concat(e.slug,".json")),{params:e})},head:function(){var title="".concat(this.title," - aizugeekdojo.github.io"),n="https://aizugeekdojo.github.io/blog/".concat(this.params.date,"/").concat(this.params.slug,"/");return{title:title,meta:[{hid:"og:url",property:"og:url",content:n},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:this.params.description},{hid:"keywords",property:"keywords",content:this.params.keywords},{hid:"description",property:"description",content:this.params.description}],link:[{rel:"canonical",href:n}]}},data:function(){return{breadcrumbs:[{name:"BLOG",path:"/blog"}]}},created:function(){this.breadcrumbs.push({name:this.params.date,path:"/blog/".concat(this.params.date)},{name:this.params.slug,path:"/blog/".concat(this.params.date,"/").concat(this.params.slug)}),this.$store.commit("change_page",this.breadcrumbs)}},r=(t(257),t(2)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"top"},[t("div",{staticClass:"content"},[t("div",{staticClass:"article-content"},[t("div",{staticClass:"top-content"},[t("h2",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),t("div",{staticClass:"post-meta"},[t("div",{staticClass:"post-meta-date"},[t("time",[n._v(n._s(n.params.date))])])])]),n._v(" "),t("div",{staticClass:"body-content",domProps:{innerHTML:n._s(n.bodyHtml)}})])])])}),[],!1,null,"749ae37a",null);e.default=component.exports}}]);