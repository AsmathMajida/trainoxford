package com.oxfordacademy.stepsdefinition;

import com.oxfordacademy.pageobject.LinkCountPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LinkCountStep
{
	//creating object for LinkCountPage
	LinkCountPage count=new LinkCountPage();
	@Given("^user launches the chrome browser$")
	public void user_launches_the_chrome_browser() throws Throwable
	{
	 count.launchBrowser("chrome");
	}

	@When("^user opens the webpage and logs in$")
	public void user_opens_the_webpage_and_logs_in() throws Throwable 
	{
	 count.oxfordHomepage();
	}

	@Then("^user counts the number of journals and prints$")
	public void user_counts_the_number_of_journals_and_prints() throws Throwable 
	{
	 count.countLink();
	}

	@Then("^closes the page$")
	public void closes_the_page() throws Throwable
	{
	 count.close();
	}

}
