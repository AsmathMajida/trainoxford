package com.oxfordacademy.pageobject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class RegisterPage
{
	WebDriver driver;
	By register=By.className("register");
	By email=By.id("EmailAddress");
	By password=By.name("Password");
	By confirm_password=By.id("ConfirmPassword");
	By submit=By.xpath("//*[@id=\"registerBtn\"]");
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
	       //Launching the website
		public void oxfordHomepage()
		{
			driver.get("https://academic.oup.com/journals");
			System.out.println(driver.getTitle());
		}
		//Enter the details for valid registration
		public void registerDetails() throws InterruptedException
		{
			driver.findElement(register).click();
			driver.findElement(email).sendKeys("majida.maji98@gmail.com");
			Thread.sleep(3000);
			driver.findElement(password).sendKeys("Majidaa@98");
			Thread.sleep(3000);
			driver.findElement(password).sendKeys(Keys.TAB);
			driver.findElement(confirm_password).sendKeys("Majidaa@98");
			Thread.sleep(3000);
			driver.findElement(confirm_password).sendKeys(Keys.TAB);
			//Thread.sleep(3000);
			driver.findElement(confirm_password).sendKeys(Keys.TAB);
			//Thread.sleep(3000);
			//driver.findElement(submit).click();
			driver.findElement(submit).sendKeys(Keys.ENTER);
			Thread.sleep(5000);
		}
        	//closing the website
		public void exit() throws InterruptedException
		{
			Thread.sleep(5000);
			driver.close();
		}

}
