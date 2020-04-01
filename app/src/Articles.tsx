import React from 'react';
import './styles/Article.css';
import { Article, State } from './interfaces/Interfaces'

class Articles extends React.Component<{}, State> {
  state: State = {
    articles: [],
  };
  UNSAFE_componentWillMount(): void {
    this.fetchArticles();
  }
  fetchArticles(): void {
    fetch('http://localhost:3001/articles')
      .then(response => response.json())
      .then(json => {
        this.setState({ articles: json });
      });
  }
  putArticles(article: Article): void {
    let matched = false;
    if (article.otherLike) matched = true;
    fetch('http://localhost:3001/articles/' + article.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: article.id,
        title: article.title,
        content: article.content,
        like: true,
        otherLike: article.otherLike,
        matched: matched,
      }),
    }).then(() => {
      this.fetchArticles();
    });
  }
  isDisabled(article: Article): boolean {
    if (article.matched) {
      return true;
    } else {
      return article.like ? true : false;
    }
  }
  genMessage(article: Article): string {
    if (article.matched) {
      return 'カップル成立済';
    } else {
      return article.like ? 'いいかも済' : 'いいかもを送る';
    }
  }
  render(): React.ReactNode {
    if (this.state.articles.length > 0) {
      return (
        <div className='article-content'>
          {this.state.articles.map(article => {
            return (
              <div className='article' key={article.id}>
                <div className='column'>{article.id}</div>
                <div className='column'>{article.title}</div>
                <div className='column'>{article.content}</div>
                <div className='column'>{article.otherLike ? '好き' : '嫌い'}</div>
                <div className='column'>
                  <button
                    disabled={article.matched ? true : false}
                    className={this.isDisabled(article) ? 'like-button-disabled' : 'like-button'}
                    onClick={(): void => this.putArticles(article)}
                  >
                    {this.genMessage(article)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>ロード中</div>;
    }
  }
}

export default Articles;
