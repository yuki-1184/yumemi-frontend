## Yumemi-Frontend

# このレポジトリについて

ゆめみ株式会社が公開している　”都道県別の総人口推移グラフを表示する SPA(Single Page Application)を構築せよ”　という課題を元に作成しました。React, JavaScriptReact, JavaScript を用いて作られています。

作成したページについては以下のリンクに公開しています。（使用には、RESAS API KEY が必要です。）
Link: https://yuki-1184.github.io/yumemi-frontend/

# 機能

- ログイン機能
  API キーを持っている人だけが、使用できるようログインページを追加しました。API キーを持っていない人用に、RESAS API キー取得ページへのリンクをログイン画面に表示しています。

- グラフに表示する年代の指定
  　デフォルトでは 1960~2045 年（5 年毎）のデータが表示されるようになっていたため、使
  　い勝手も考え表示したい年代を指定できるような機能を追加しました。

# 使用している技術

- JavaScript
- React
- Highcharts
- ESLing 　（リンター）
- Prettier を用いたフォーマット
