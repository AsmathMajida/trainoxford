package com.oxfordacademy.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","com.cucumber.listener.ExtentCucumberFormatter:reports/report.html"},
		tags = {"@tc01_Oxford_Academy_register,@tc02_Oxford_Academy_valid_login,@tc03_Oxford_Academy_buybooks,@tc04_Oxford_Academy_Search_journal,@tc05_Oxford_Academy_Link_count"},
		glue = {"com.oxfordacademy.stepsdefinition"},
		monochrome = true
		)

public class OxfordAcademyRunner 
{
	@AfterClass
	  public static void extendReport()
	  {
	      Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	      Reporter.setSystemInfo("user", System.getProperty("user.name"));
	      Reporter.setSystemInfo("os", "Windows");
	      Reporter.setTestRunnerOutput("Sample test runner output message");
}
}
