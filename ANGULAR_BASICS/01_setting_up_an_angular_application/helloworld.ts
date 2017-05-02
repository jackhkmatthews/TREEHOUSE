class Greeter {
  greet(name: string) {
    console.log(`Hi, ${name}`);

  }
}

const greeter = new Greeter();

greeter.greet('Jim'); //Hi, Jim
