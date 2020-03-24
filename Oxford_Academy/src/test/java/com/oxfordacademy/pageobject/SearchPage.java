package com.oxfordacademy.pageobject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class SearchPage
{
WebDriver driver;
	
public void launchBrowser(String browser) //Launch url
{
	try
	{
		if(browser.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		else if(browser.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("Internet Explore"))
		{
			System.setProperty("webdriver.ie.driver","src\\test\\resources\\Driver\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}
	catch(WebDriverException e)
	{
		System.out.println("Browser could not be launched");
	}
	
}
	public void homepage()
	{
		driver.get("https://academic.oup.com/journals");//Launching the website
		System.out.println(driver.getTitle());
	}
	// To search the journal
	public void searchJournal()
	{
		driver.findElement(By.xpath("//*[@id=\"MicrositeSearchTerm\"]")).sendKeys("comics");
		driver.findElement(By.xpath("//*[@id=\"MicrositeSearchTerm\"]")).sendKeys(Keys.ENTER);
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).sendKeys(Keys.ENTER);
	}
	public void getTitle()//getting the value and printing in the output
	{
		System.out.println(driver.findElement(By.xpath("//*[@id=\"ContentColumn\"]/div[13]/h4/a")).getText());
	}
	public void quit()
	{
		driver.close();//closing the website
	}
}
