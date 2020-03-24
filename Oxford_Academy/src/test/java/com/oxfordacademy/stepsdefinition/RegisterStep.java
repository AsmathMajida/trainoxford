package com.oxfordacademy.stepsdefinition;

import com.oxfordacademy.pageobject.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class RegisterStep {
	RegisterPage validreg=new RegisterPage();

	@Given("^Launch the Chrome browser$")
	public void launch_Chrome_browser() throws Throwable
	{
      validreg.launchBrowser("chrome");
	}

	@Then("^open the Oxford Academy website$")
	public void open_Oxford_Academy_website() throws Throwable
	{
       validreg.oxfordHomepage();
	}
	
	@Then("^register the details$")
	public void register_the_valid_details() throws Throwable 
	{
	   validreg.registerDetails();
	}

	@Then("^close the browser$")
	public void close_browser() throws Throwable 
	{
       validreg.exit();
	}

}
