function Application(){
  return (
    <div>
      <h1>Hello From React</h1>
      <p>I was rendered from the custom Application component</p>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
