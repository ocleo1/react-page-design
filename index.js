import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var label = [1,2,3,4,5,6,7,8,9];

    return (
      <div style={style.container}>
        <section style={style.siderBar}>
          {
            label.map((item, index) => {
              return (
                <div key={`item${index}`}>
                  {item}
                </div>
              );
            })
          }
        </section>
        <section style={style.content}>
        </section>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    height: '100%'
  },
  siderBar: {
    width: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: 1
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
