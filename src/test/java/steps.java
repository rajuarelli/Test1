
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class steps {
private Scenario scenario;

@Before
public void beforetest(Scenario scenario){
    this.scenario=scenario;
}
    @Given("user open URL")
public void hello(){
System.out.println("This is first statement");
scenario.write("This is first statement");
        }


    @Given("enter username and password")
            public void second(){
        System.out.println("This is second method");
        scenario.write("This is second statement");
    }

    @Then("he should be able to login")
    public void third(){
System.out.println("This is third one");
scenario.write("This is 3rd statement");
    }



}
