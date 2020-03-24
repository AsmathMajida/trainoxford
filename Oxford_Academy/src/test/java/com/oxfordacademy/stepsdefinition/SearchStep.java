package com.oxfordacademy.stepsdefinition;

import com.oxfordacademy.pageobject.SearchPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SearchStep {
	SearchPage see=new SearchPage();
	@Given("^The user should Launch the browser$")
	public void the_user_should_Launch_the_browser() throws Throwable 
	{
	   see.launchBrowser("chrome");
	}

	@Then("^The user should opens the Oxford Academy$")
	public void the_user_should_opens_the_Oxford_Academy() throws Throwable
	{
	    see.homepage();
	}

	@Then("^the user enters journal name in search box$")
	public void the_user_enters_journal_name_in_search_box() throws Throwable
	{
	    see.searchJournal();
	}

	@Then("^the user gets the title and prints$")
	public void the_user_gets_the_title_and_prints() throws Throwable 
	{
	    see.getTitle();
	}

	@Then("^the user should close the browser$")
	public void the_user_should_close_the_browser() throws Throwable 
	{
	    see.quit();
	}

}
