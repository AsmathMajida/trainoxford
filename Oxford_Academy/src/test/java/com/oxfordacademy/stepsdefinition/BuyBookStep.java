package com.oxfordacademy.stepsdefinition;

import com.oxfordacademy.pageobject.BuyBookPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuyBookStep
{
	//creating object for BuyBookPage
	BuyBookPage book=new BuyBookPage();
	
	@Given("^user launches the browser$")
	public void user_launches_the_browser() throws Throwable 
	{
	  book.launchBrowser("chrome");
	}

	@When("^user launches the Oxford Academy website$")
	public void user_launches_the_Oxford_Academy_website() throws Throwable 
	{
	  book.oxfordHomepage();
	}

	@Then("^user selects Diplomatic history$")
	public void user_selects_Diplomatic_history() throws Throwable 
	{
	  book.historyClick();
	}

	@Then("^purchase book$")
	public void purchase_book() throws Throwable 
	{
	  book.purchase();
	}

	@Then("^close the page$")
	public void close_the_page() throws Throwable 
	{
	  book.close();

	}
	
}
