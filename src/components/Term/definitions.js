export default {
  referencePageTitles: {
    "/docs/get-started/": "はじめてのWeb開発",
    "/docs/html/": "HTML",
    "/docs/javascript/": "JavaScriptことはじめ",
    "/docs/expressions/": "値と式と演算子",
    "/docs/expressions/#いろいろな演算子": "いろいろな演算子",
    "/docs/variables/": "変数",
    "/docs/boolean/": "論理値と論理演算子",
    "/docs/if-statement/": "条件分岐",
    "/docs/functions/": "関数",
    "/docs/functions/#モジュール化": "モジュール化",
    "/docs/css/": "CSS",
    "/docs/object/": "オブジェクト",
    "/docs/dom/": "DOM",
    "/docs/events/": "イベント",
    "/docs/project/": "プロジェクト",
    "/docs/deploy/": "作ったウェブアプリを公開する",
  },
  terms: {
    fileExtension: {
      name: "拡張子",
      definition:
        "ファイル名のピリオド以降の部分。ファイルの種類を識別するために用いられる場合がある。Windows では標準では表示されないので、表示する設定にしておくと良い。",
      referencePage: "/docs/html/",
    },
    fork: {
      name: "フォーク",
      definition:
        "GitHub において、他人が公開しているリポジトリを複製すること。この操作により、元のリポジトリに対して影響を与えることなくソースコードを変更できる。",
      referencePage: "/docs/get-started/",
    },
    git: {
      name: "Git",
      definition: "分散型バージョン管理システムのひとつ。",
      referencePage: "/docs/get-started/",
    },
    github: {
      name: "GitHub",
      definition:
        "Git を用いて、プログラムの保存、共有、公開などができる、開発者のための総合プラットフォーム。",
      referencePage: "/docs/get-started/",
    },
    gitpod: {
      name: "Gitpod",
      definition:
        "GitHub 等に保存されているプログラムをブラウザ上で編集するためのサービス。",
      referencePage: "/docs/get-started/",
    },
    repository: {
      name: "リポジトリ",
      definition: "ソースコードやそれに付随する情報のまとまり。",
      referencePage: "/docs/get-started/",
    },
    html: {
      name: "HTML",
      definition: "ウェブページの構造を表すためのマークアップ言語。",
      referencePage: "/docs/html/",
    },
    htmlNest: {
      name: "ネスト (HTML)",
      definition: "HTML要素の中に他の要素を入れること。",
      referencePage: "/docs/html/",
    },
    javascript: {
      name: "JavaScript",
      definition:
        "ウェブサイトに動きを与えるために生まれたスクリプト言語。現在は機能が拡張され、ウェブサイト以外にも応用されるようになった。",
      referencePage: "/docs/javascript/",
    },
    startTag: {
      name: "開始タグ",
      definition:
        "要素の先頭を表す。 <div>内容</div> ならば <div> が開始タグ。属性をつけることができる。",
      referencePage: "/docs/html/",
    },
    tag: {
      name: "タグ",
      definition:
        "< から > までで囲まれた領域。<a> を「aタグ」のように読んでいる。",
      referencePage: "/docs/html/",
    },
    attribute: {
      name: "属性",
      definition: "HTML要素の特徴を指定する値。開始タグの中に含まれる。",
      referencePage: "/docs/html/",
    },
    element: {
      name: "HTML 要素",
      definition: "HTMLの開始タグから終了タグまでの領域。",
      referencePage: "/docs/html/",
    },
    endTag: {
      name: "終了タグ",
      definition:
        "要素の終端を表す。 <div>内容</div> ならば </div> が終了タグ。",
      referencePage: "/docs/html/",
    },
    css: {
      name: "CSS",
      definition:
        "ウェブサイトの見た目をカスタマイズするための言語。 HTML 要素 の style 属性は CSS を用いて記述する。",
      referencePage: "/docs/css/",
    },
    styleAttribute: {
      name: "style 属性",
      definition:
        "表示可能な多くの HTML 要素に対して設定できる、見た目をカスタマイズするための属性。",
      referencePage: "/docs/css/",
    },
    cssProperty: {
      name: "プロパティ (CSS)",
      definition:
        "CSS により設定できる見た目の種類。例えば color は文字色、font-size は文字の大きさ。",
      referencePage: "/docs/css/",
    },
    javascriptStatement: {
      name: "文",
      definition:
        "JavaScriptにおいて、セミコロンによって区切られた命令の単位。ただしセミコロンは省略可能。",
      referencePage: "/docs/javascript/",
    },
    javascriptValue: {
      name: "値 (JavaScript)",
      definition:
        "JavaScript上で扱われる単一のデータ。数値や文字列、論理値、オブジェクトなど。",
      referencePage: "/docs/expressions/",
    },
    javascriptString: {
      name: "文字列 (JavaScript)",
      definition:
        "JavaScriptにおける値の一種。ダブルクォーテーションで囲んでプログラム上に直接記述できる。",
      referencePage: "/docs/expressions/",
    },
    javascriptNumber: {
      name: "数値 (JavaScript)",
      definition: "JavaScriptにおける値の一種。プログラム中に直接記述できる。",
      referencePage: "/docs/expressions/",
    },
    javascriptOperator: {
      name: "演算子 (JavaScript)",
      definition:
        "JavaScript において、主に値に対して作用し、別の値を得るための記号。",
      referencePage: "/docs/expressions/",
    },
    javascriptExpression: {
      name: "式 (JavaScript)",
      definition: "JavaScript において、計算・処理されて値を生成するまとまり。",
      referencePage: "/docs/expressions/",
    },
    javascriptEvaluation: {
      name: "評価 (JavaScript)",
      definition: "JavaScriptの実行エンジンが式から値を生成する動作。",
      referencePage: "/docs/expressions/",
    },
    javascriptStringConcatenation: {
      name: "文字列の結合",
      definition:
        "文字列に加算演算子を使うと、一個目の文字列の後ろに二個目の文字列が追加される。",
      referencePage: "/docs/expressions/#いろいろな演算子",
    },
    javascriptVariable: {
      name: "変数",
      definition: "JavaScriptで値を一時的に保存しておくための入れ物。",
      referencePage: "/docs/variables/",
    },
    javascriptDeclaration: {
      name: "宣言 (JavaScript)",
      definition: "JavaScriptで変数を使用するために必要な記述。",
      referencePage: "/docs/variables/",
    },
    javascriptAssignment: {
      name: "代入 (JavaScript)",
      definition:
        "変数に値を設定する操作。それまで入っていた値は消えてしまう。",
      referencePage: "/docs/variables/",
    },
    camelCase: {
      name: "キャメルケース",
      definition:
        "複数の単語にわたるフレーズを、2語目以降の先頭の文字を大文字にして結合する命名規則。例: camelCase",
      referencePage: "/docs/variables/",
    },
    snakeCase: {
      name: "スネークケース",
      definition:
        "複数の単語にわたるフレーズを、アンダーバー (_) によって結合する命名規則。例: snake_case",
      referencePage: "/docs/variables/",
    },
    pascalCase: {
      name: "パスカルケース",
      definition:
        "複数の単語にわたるフレーズを、それぞれの単語の先頭の文字を大文字にして結合する命名規則。例: PascalCase",
      referencePage: "/docs/variables/",
    },
    javascriptBoolean: {
      name: "論理値 (JavaScript)",
      definition:
        "JavaScriptにおける値の一種で、真偽を表すもの。true または false の2種類しかない。",
      referencePage: "/docs/boolean/",
    },
    javascriptIfStatement: {
      name: "if文",
      definition:
        "与えられた真偽値が真である場合のみ{}ブロックの中の処理を実行する制御構造。",
      referencePage: "/docs/if-statement/",
    },
    javascriptControlFlow: {
      name: "制御構造 (JavaScript)",
      definition:
        "JavaScriptにおいて、通常上から下に実行される文の実行順序を変化させるための言語構造。",
      referencePage: "/docs/if-statement/",
    },
    javascriptFunction: {
      name: "関数 (JavaScript)",
      definition: "引数や返り値を持つ文のまとまり。",
      referencePage: "/docs/functions/",
    },
    javascriptParameter: {
      name: "引数 (JavaScript)",
      definition: "JavaScriptの関数に対し、呼び出し時に与えることのできる値。",
      referencePage: "/docs/functions/",
    },
    javascriptPass: {
      name: "～ (値) を ～ (関数) に渡す",
      definition: "JavaScriptの関数に値を引数として設定して実行すること。",
      referencePage: "/docs/functions/",
    },
    javascriptReturnValue: {
      name: "戻り値 (JavaScript)",
      definition: "JavaScriptの関数呼び出し式の評価結果となる値。",
      referencePage: "/docs/functions/",
    },
    javascriptReturn: {
      name: "～ (値) を返す (JavaScript)",
      definition:
        "関数の実行が終了し、式の評価結果の値が確定すること。return 文により実現できる。",
      referencePage: "/docs/functions/",
    },
    javascriptScope: {
      name: "スコープ (JavaScript)",
      definition: "変数が有効な範囲。",
      referencePage: "/docs/functions/",
    },
    javascriptModularization: {
      name: "モジュール化",
      definition:
        "ひとまとまりの煩雑なものや操作を一つにまとめて、コードを複数のブロックに分解すること。",
      referencePage: "/docs/functions/#モジュール化",
    },
    javascriptObject: {
      name: "オブジェクト (JavaScript)",
      definition:
        "JavaScriptにおける値の一種。内部にプロパティを複数格納できる。プリミティブではない値。",
      referencePage: "/docs/object/",
    },
    javascriptPrimitive: {
      name: "プリミティブ (JavaScript)",
      definition:
        "JavaScriptにおける値の種類。感覚的には「それ以上分解できない値」",
      referencePage: "/docs/object/",
    },
    javascriptProperty: {
      name: "プロパティ (JavaScript)",
      definition:
        "JavaScriptのオブジェクトがその内部に持っている値。オブジェクトの属性(情報)。",
      referencePage: "/docs/object/",
    },
    dom: {
      name: "DOM",
      definition:
        "HTML 構造を JavaScript のオブジェクトとして扱うための枠組み。",
      referencePage: "/docs/dom/",
    },
    events: {
      name: "イベント",
      definition:
        "ボタンのクリック、フォームへの入力、ページの読み込みなど、Webページ上で発生するあらゆるアクションの総称。",
      referencePage: "/docs/events/",
    },
    eventHandler: {
      name: "イベントハンドラ",
      definition:
        "イベント発生時の処理を行う仕組み。onclick 関数、onload 関数など、on キーワードにイベント名をつけた名称になっている。",
      referencePage: "/docs/events/",
    },
  },
};
