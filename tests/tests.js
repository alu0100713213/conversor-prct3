var assert = sinon.assert;
var expect = chai.expect;

describe("Conversor Temperatura", function() {
  var sandbox;
  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

 var aux = document.getElementById("salida");

    it("Constructor Temperatura", function(){
      var Temp = new Temperatura("0");
      Temp.tempValue = 0;
      expect(Temp.tempValue).to.equal(0);
    });
    it("20 C to F", function(){
      var Temp = new Celsius("20");
      expect(Temp.toFahrenheit()).to.equal("68 Fahrenheit");
    });
    it("20 C to K", function(){
      var Temp = new Celsius("20");
      expect(Temp.toKelvin()).to.equal("293.15 Kelvin");
    });
    it("68 F to C", function(){
      var Temp = new Fahrenheit("68");
      expect(Temp.toCelsius()).to.equal("20 Celsius");
    });
    it("68 F to K", function(){
      var Temp = new Fahrenheit("68");
      expect(Temp.toKelvin()).to.equal("293.15 Kelvin");
    });
    it("350 K to C", function(){
      var Temp = new Kelvin("350");
      expect(Temp.toCelsius()).to.equal("76.85000000000002 Celsius");
    });
    it("350 K to F", function(){
      var Temp = new Kelvin("350");
      expect(Temp.toFahrenheit()).to.equal("170.33000000000004 Fahrenheit");
    });
  });
  describe("Logs", function() {

    it("Console.log() - Metodo toCelsius()", function() {
         var log = (new Fahrenheit(32).toCelsius());
    //     sinon.assert.notCalled(console.error);
  //       sinon.assert.calledOnce(console.log);
//         sinon.assert.calledWithExactly(console.log, "Dato convertido 0 Celsius");
       });
    it('1st example using a spy', function () {
        logger = {
            log: sinon.spy()
        };
        var greetings = moduleA.greet('James', logger);

        expect(logger.log).to.have.been.calledOnce;
        expect(logger.log).to.have.been.calledWith('Greeting: James');

        // Verify the method returns the expected result
        expect(greetings).to.equal('Hello James');

        // Reset the spy so that this test does not affect other tests.
        logger.log.reset();
      });
});
