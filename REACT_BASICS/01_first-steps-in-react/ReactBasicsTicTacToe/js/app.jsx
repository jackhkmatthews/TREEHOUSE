const CELLS = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

const Cell = React.createClass({
  propTypes: {
    cell: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    onCellClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <li className="gameboard__cell" onClick={()=>this.props.onCellClick(this.props.index)}>{this.props.cell}</li>
    );
  }
});

function Scoreboard(props){
  return (
    <ul  className="gameboard">
      {props.cells.map((cell, index) => {
        return (
          <Cell cell={cell} key={index} index={index} onCellClick={props.onCellClick}/>
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

  onReset: function(){
    this.setState({
      cells: ['.', '.', '.', '.', '.', '.', '.', '.', '.']
    });
  },

  onCellClick: function(index){
    if (this.state.xIsNext) {
      this.state.cells[index] = 'X';
    } else {
      this.state.cells[index] = 'O';
    }
    this.state.xIsNext = !this.state.xIsNext;
    this.setState(this.state);
  },

  render: function(){
    return (
      <div className="game">
        <Header title={this.state.title} />
        <TurnIndicator xIsNext={this.state.xIsNext}/>
        <Scoreboard
          cells={this.state.cells}
          onCellClick={(index) => this.onCellClick(index)}/>
        <button className="game__reset" onClick={this.onReset}>Reset</button>
      </div>
    );
  }
});

ReactDOM.render(<Application title="Tic Tac Toe" cells={CELLS} xIsNext={true}/>, document.getElementById('container'));
