import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class ChemQuizTest {
    private static WebDriver driver;

    @BeforeClass
    public static void setUpSelenium() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Wes McMillen\\Documents\\2019C\\SoftwareQA\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void SO4Na1111() {
        driver.get("http://localhost:4200/molarity");

        Select bases = new Select(driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/select[1]")));
        bases.selectByVisibleText("SO4");

        WebElement baseVol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[1]"));
        baseVol.sendKeys("1");


        WebElement baseMol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[2]"));
        baseMol.sendKeys("1");

        Select acids = new Select(driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/select[2]")));
        acids.selectByVisibleText("Na");

        WebElement acidVol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[3]"));
        acidVol.sendKeys("1");

        WebElement acidMol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[4]"));
        acidMol.sendKeys("1");

        WebElement calculate  = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/button"));
        calculate.click();

        WebElement textGetter = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]"));
        String text = textGetter.getText();
        text = text.substring(60);
        Assert.assertEquals("NaOH is the limiting reactant giving 0.0005 moles, 0.018015 grams of water, and 0.07101900000000001 grams of salt.",text);
    }

    @Test
    public void PO4Mg202222233211() {
        driver.get("http://localhost:4200/molarity");

        Select bases = new Select(driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/select[1]")));
        bases.selectByVisibleText("PO4");

        WebElement baseVol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[1]"));
        baseVol.sendKeys("202.2");


        WebElement baseMol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[2]"));
        baseMol.sendKeys("2.22");

        Select acids = new Select(driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/select[2]")));
        acids.selectByVisibleText("Mg");

        WebElement acidVol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[3]"));
        acidVol.sendKeys("233.3");

        WebElement acidMol = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/input[4]"));
        acidMol.sendKeys("2.11");

        WebElement calculate  = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]/form/button"));
        calculate.click();

        WebElement textGetter = driver.findElement(By.xpath("/html/body/app-root/app-molarity/div[2]"));
        String text = textGetter.getText();
        text = text.substring(60);
        Assert.assertEquals("Ca(OH)2 is the limiting reactant giving 0.0046841999999999995 moles, 0.16877172599999998 grams of water, and 1.3766208011999996 grams of salt.",text);
    }

}
