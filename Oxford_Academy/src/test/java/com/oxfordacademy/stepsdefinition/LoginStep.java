package com.oxfordacademy.stepsdefinition;

import org.openqa.selenium.WebDriver;

import com.oxfordacademy.pageobject.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStep {

		WebDriver driver; 
		 LoginPage validlog = new LoginPage(driver);

		@Given("^the user launch chrome$")
		public void the_user_launch_chrome() throws Throwable 
		{
			validlog.launchBrowser("chrome");
		}

		@Then("^the user opens website$")
		public void the_user_opens_website() throws Throwable 
		{
		  validlog.oxfordHomepage();
		}

		@Then("^the user login using \"([^\"]*)\" and \"([^\"]*)\" with vaild and invaild details$")
		public void the_user_login_using_and_with_vaild_and_invaild_details(String emailId, String password) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			validlog.oxfordDetails(emailId, password);
		}
		
		@Then("^the user closes the browser$")
		public void the_user_closes_the_browser() throws Throwable
		{
		   validlog.oxfordClose();
		}
	}

