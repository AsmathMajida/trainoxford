package com.oxfordacademy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc01_Oxford_Academy_register,@tc02_Oxford_Academy_valid_login,@tc03_Oxford_Academy_buybooks,@tc04_Oxford_Academy_Search_journal,@tc05_Oxford_Academy_Link_count"},
		glue = {"com.oxfordacademy.stepsdefinition"},
		monochrome = true
		)

public class OxfordAcademyRunner 
{

}
