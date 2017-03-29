console.log('hi');

function Application(){
  return (
    <div className="game">
      <h1 className="game__title">Tic Tac Toe</h1>
      <ul  className="gameboard">
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
        <li className="gameboard__cell">x</li>
      </ul>
      <button className="game__reset">Reset</button>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
