console.log('hi');

const CELLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var Cell = React.createClass({
  propTypes: {
    cell: React.PropTypes.number.isRequired,
  },

  getInitialState: function(){
    return {
      cell: '.'
    };
  },

  updateCell: function(){
    this.setState({
      cell: 'x'
    });
  },

  render: function() {
    return (
      <li className="gameboard__cell" onClick={this.updateCell}>{this.state.cell}</li>
    );
  }
});

function Scoreboard(props){
  return (
    <ul  className="gameboard">
      {props.cells.map(cell => {
        return (
          <Cell cell={cell} key={cell}/>
        );
      })}
    </ul>
  );
}

Scoreboard.propTypes = {
  cells: React.PropTypes.array.isRequired
};

function Header(props){
  return (
    <h1 className="game__title">{props.title}</h1>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

function Application(props){
  return (
    <div className="game">
      <Header title={props.title} />
      <Scoreboard cells={props.cells}/>
      <button className="game__reset">Reset</button>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string.isRequired,
  cells: React.PropTypes.array.isRequired
};

ReactDOM.render(<Application title="Tic Tac Toe" cells={CELLS}/>, document.getElementById('container'));
