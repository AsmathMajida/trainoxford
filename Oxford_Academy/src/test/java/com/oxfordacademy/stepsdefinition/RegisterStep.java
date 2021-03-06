package com.oxfordacademy.stepsdefinition;

import com.oxfordacademy.pageobject.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class RegisterStep 
{
	//creating object for RegisterPage
	RegisterPage validreg=new RegisterPage();
	Excel ec=new Excel();
	
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
	   validreg.registerDetails(ec.excel_emailid(1), ec.excel_password(1));
	}

	@Then("^close the browser$")
	public void close_browser() throws Throwable 
	{
           validreg.screenshot("src/test/resources/Screenshot/register.png");
	}

}
