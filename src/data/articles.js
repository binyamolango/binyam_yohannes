import React from 'react';

function article1() {
  return {
    date: '23 Oct 2023',
    title: 'Self Awareness in choosing a Career path',
    description:
      'When it comes to choosing a career path, it is essential to have self-awareness. Understanding oneself, including one’s strengths, interests, and values, can greatly contribute to making a well-informed decision.',
    keywords: [
      'self awareness',
      'career path',
      'Binyam Yohannes',
      'Binyam Olango',
    ],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .randImage {
        align-self: center;
        outline: 2px solid red;
      }
    `,
    body: (
      <>
        <div className="article-content">
          <div className="paragraph">Content of article 1</div>
        </div>
      </>
    ),
    link: 'https://medium.com/@olangobinyam/self-awareness-in-choosing-a-career-path-b69d6e0da82c',
  };
}

function article2() {
  return {
    date: '11 Oct 2023',
    title: 'Have you ever got stuck on a project that doesn’t have clear milestones?',
    description:
      'On my React Capstone Project, I was tasked with creating a mobile app that uses an external API to obtain data. The specifications for earlier projects that I built were a little more detailed.',
    style: '',
    keywords: [
      'Stuck on a project',
      'React Capstone project',
      'Binyam Yohannes',
      'Binyam Olango',
    ],
    body: (
      <>
        <h1>Content of article 2</h1>
      </>
    ),
    link: 'https://medium.com/@olangobinyam/have-you-ever-got-stuck-on-a-project-that-doesnt-have-clear-milestones-250fb06fa468',
  };
}

const myArticles = [article1, article2];

export default myArticles;
