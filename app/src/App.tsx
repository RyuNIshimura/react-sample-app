import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // 全体をHashRouterでWrap
      <HashRouter>
        <div>
          <header>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          {/* ルーティングがわかりやすいようにdivを追加 */}
          <div>
            {/* Switchで囲んで、Routeで設定したcomponentが呼ばれるように設定 */}
            <Switch>
              {/* exactにしてrootにアクセスされたときはだけ「Top!」と表示されるように設定 */}
              <Route exact path="/" component={() => <>Top!</>} />
              {/* exactではないので、「detail/hoge」でも以下のcomponentは呼ばれる */}
              <Route path="/detail/" component={() => <>Detail!</>} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;