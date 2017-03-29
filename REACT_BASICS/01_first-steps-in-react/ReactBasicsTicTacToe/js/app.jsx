console.log('hi');

const CELLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cell = React.createClass({
  propTypes: {
    cell: React.PropTypes.number.isRequired,
    onCellClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <li className="gameboard__cell" onClick={this.props.onCellClick}>{this.props.cell}</li>
    );
  }
});

function Scoreboard(props){
  return (
    <ul  className="gameboard">
      {props.cells.map(cell => {
        return (
          <Cell cell={cell} key={cell} onCellClick={props.onCellClick}/>
        );
      })}
    </ul>
  );
}

Scoreboard.propTypes = {
  cells: React.PropTypes.array.isRequired
};

function TurnIndicator(props){
  return (
    props.xIsNext ? <h3>X is next</h3>:<h3>O is next</h3>
  );
}

TurnIndicator.propTypes = {
  xIsNext: React.PropTypes.bool.isRequired
};

function Header(props){
  return (
    <h1 className="game__title">{props.title}</h1>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

const Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    cells: React.PropTypes.array.isRequired
  },

  getInitialState: function(){
    return {
      title: this.props.title,
      cells: this.props.cells,
      xIsNext: this.props.xIsNext
    };
  },

  onCellClick: function(){
    console.log('clicked');
    this.setState({
      xIsNext: !this.state.xIsNext
    });
  },

  render: function(){
    return (
      <div className="game">
        <Header title={this.state.title} />
        <TurnIndicator xIsNext={this.state.xIsNext}/>
        <Scoreboard cells={this.state.cells} onCellClick={this.onCellClick}/>
        <button className="game__reset">Reset</button>
      </div>
    );
  }
});

ReactDOM.render(<Application title="Tic Tac Toe" cells={CELLS} xIsNext={true}/>, document.getElementById('container'));
