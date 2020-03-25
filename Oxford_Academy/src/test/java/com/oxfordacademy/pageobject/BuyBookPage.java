package com.oxfordacademy.pageobject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BuyBookPage 
{
WebDriver driver;
By alpha=By.linkText("Journals A to Z");
By d=By.xpath("//*[@id=\"cloudCMS\"]/div/div[1]/div/div/p[1]/a[4]");
By history=By.linkText("Diplomatic History");
By purchase=By.linkText("Purchase");
By issue=By.xpath("//*[@id=\"main\"]/section/div/div/div[1]/div[1]/div[2]/a");
By year=By.id("ddlSelectIssueYears");
By buy=By.xpath("//*[@id=\"collapsible-table-0\"]/tr/td[5]/a");
By remove=By.xpath("//*[@id=\"shopping_basket\"]/tbody/tr[2]/td[5]/input");
//Launching url
public void launchBrowser(String browser) 
{
	try
	{
		//Launching firefox page
		if(browser.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		//Launching chrome page
		else if(browser.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
			driver = new ChromeDriver();
		}
		//Launching Internet Explorer page
		else if(browser.equalsIgnoreCase("Internet Explore"))
		{
			System.setProperty("webdriver.ie.driver","src\\test\\resources\\Driver\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
	//maximizing the window
	driver.manage().window().maximize();
	//Adding implicit wait
	driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}
	catch(WebDriverException e)
	{
		System.out.println("Browser could not be launched");
	}
	
        }
	public void oxfordHomepage() 
	{
		//Launching the website
		driver.get("https://academic.oup.com/journals");

	}
	// selecting the journal
	public void historyClick()
	{
		driver.findElement(alpha).click();
		driver.findElement(d).click();
		driver.findElement(history).click();
	}
	//purchasing details
	public void purchase()
	{
		driver.findElement(purchase).click();
		driver.findElement(issue).click();
		driver.findElement(year).click();
		driver.findElement(year).sendKeys(Keys.DOWN);
		driver.findElement(year).sendKeys(Keys.DOWN);
		driver.findElement(year).sendKeys(Keys.ENTER);
		driver.findElement(buy).click();
		driver.findElement(remove).click();
	}
	public void close() 
	{
		//closing the website
		driver.close();
	}
}


