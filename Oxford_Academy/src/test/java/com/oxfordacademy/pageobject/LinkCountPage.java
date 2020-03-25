package com.oxfordacademy.pageobject;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class LinkCountPage 
{
	WebDriver driver;
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
	public void oxfordHomepage() throws InterruptedException 
	{
		//Launching the website
		driver.get("https://academic.oup.com/journals");
	        //Adding wait time
		Thread.sleep(5000);
		
	}
	//to count the number of links
	public void countLink()
	{
		List<WebElement> links = driver.findElements(By.tagName("a"));
		int linkCount=links.size();
		//Printing LinkCount
		System.out.println("The total number of links="+linkCount);
	}
	//Closing the website
	public void close()
	{
		driver.close();
	}
}
