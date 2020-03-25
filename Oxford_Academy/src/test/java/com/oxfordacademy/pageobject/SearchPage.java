package com.oxfordacademy.pageobject;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class SearchPage
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
	//adding implicit wait
	driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}
	catch(WebDriverException e)
	{
		System.out.println("Browser could not be launched");
	}
	
        }
	//Launching the website
	public void homepage()
	{
		driver.get("https://academic.oup.com/journals");
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
	//getting the value and printing it in the console
	public void getTitle()
	{
		System.out.println(driver.findElement(By.xpath("//*[@id=\"ContentColumn\"]/div[13]/h4/a")).getText());
	}
	//closing the website
	//screenshot
		public void screenshot(String path) throws InterruptedException, IOException
		{
			Thread.sleep(4000);
			TakesScreenshot snap = (TakesScreenshot)driver;
			File source = snap.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(source, new File(path));
			Thread.sleep(3000);
			driver.close();
		}
}
