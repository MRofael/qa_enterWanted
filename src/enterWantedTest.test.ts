import { Builder, Capabilities } from "selenium-webdriver"
import { EnterWantedPage } from "./enterWantedPage"

const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new EnterWantedPage(driver, 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')

//Test Case URL in Jira: https://dmutah.atlassian.net/browse/MR5DL-32
test("Testing valid Header Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hdrInput, "0123456789")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).not.toContain('The "Header" field should be between 9 and 19 characters long.')
})

//Test Case URL in Jira: https://dmutah.atlassian.net/browse/MR5DL-33
test("Testing invalid Header Input", async () => {
    await myTest.navigate()
    await myTest.setInput(myTest.hdrInput, "01234")
    await myTest.click(myTest.submit)
    let response = await myTest.getText(myTest.results)
    expect(response).toContain('The "Header" field should be between 9 and 19 characters long.')
    await myTest.driver.quit()
})