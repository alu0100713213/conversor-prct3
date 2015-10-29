var assert = chai.assert;
var expect = chai.expect;

describe('Conversor Temperatura', function() {

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

