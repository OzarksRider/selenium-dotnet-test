using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Linq;
using System.Collections.Generic;

namespace test
{
    [TestClass]
    public class DbeGoalsSiteTests
    {

        static private WebDriver driver;
        static private string baseUrl = "https://dbegoals.azdot.gov/";

        [ClassInitialize]
        public static void Setup(TestContext context)
        {
            var options = new ChromeOptions();
            //options.AddArgument("headless");

            driver = new ChromeDriver(options);
        }

        [ClassCleanup]
        public static void Teardown()
        {
            //driver.Dispose();
        }


        [TestMethod]
        public void SmokeTest_Nonexisting_Website()
        {
            //Navigate to nonexisting website
            Assert.ThrowsException<OpenQA.Selenium.WebDriverException>(() => driver.Navigate().GoToUrl("https://asdlfkj123452as.com/"));                
        }


        [TestMethod]
        public void DbeGoalsExternal_Check_Missing_Page()
        {
            //Navigate to website
            driver.Navigate().GoToUrl($"{baseUrl}non-existing-page");
            Assert.AreEqual(driver.Title, "The resource cannot be found.");
        }


        [TestMethod]
        [TestCategory("Integration Test")]
        [TestCategory("Geocoder - Integration Test")]
        [TestCategory("Geocoder - Services")]
        public void DbeGoalsExternal_Smoke_Test_HomePage()
        {
            //Navigate to website
            driver.Navigate().GoToUrl(baseUrl);
 
            string title = driver.Title;
            
            System.Collections.ObjectModel.ReadOnlyCollection<IWebElement> images = driver.FindElements(By.TagName("img"));
            bool missingImages = false;
            foreach(IWebElement img in images) 
            {
                if (!(bool)driver.ExecuteScript("return arguments[0].complete", img)) 
                {
                    missingImages = true;
                    break;
                }
            }

            IWebElement email = driver.FindElement(By.Name("Email"));
            email.Submit();
            
            email.SendKeys("invalid_email");
            email.Submit();
            //The Email field is not a valid e-mail address.

            // verify that there are no missing images
            Assert.AreEqual(title, "DBE Goals");
            Assert.IsFalse(missingImages);            
            //Assert.ThrowsException<OpenQA.Selenium.NoSuchElementException>(() => driver.FindElement(By.Name("Bilbo")));

        }

/*
        [TestMethod]
        public void TestGetStarted()
        {
            //Navigate to website
            driver.Navigate().GoToUrl("https://dotnet.microsoft.com/");
            
            //Click the Get Started button
            driver.FindElement(By.LinkText("Get Started")).Click();

            // Get Started section is a multi-step wizard
            // The following sections will find the visible next step button until there's no next step button left
            IWebElement nextLink = null;
            do
            {
                nextLink?.Click();
                nextLink = driver.FindElements(By.CssSelector(".step:not([style='display:none;']):not([style='display: none;']) .step-select")).FirstOrDefault();
            } while (nextLink != null);

            // on the last step, grab the title of the step wich should be equal to "Next steps"
            var lastStepTitle = driver.FindElement(By.CssSelector(".step:not([style='display:none;']):not([style='display: none;']) h2")).Text;

            // verify the title is the expected value "Next steps"
            Assert.AreEqual(lastStepTitle, "Next steps");
        }
*/

    }
}