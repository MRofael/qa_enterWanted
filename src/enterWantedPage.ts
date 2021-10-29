import { By, WebDriver } from "selenium-webdriver";

export class EnterWantedPage {
    driver: WebDriver
    url: string

    hdrInput: By = By.css('input[name="hdrInput"]')
    submit: By = By.id('saveBtn')
    results: By = By.css('tr')

    constructor(param1, param2) {
        this.driver = param1
        this.url = param2
    }

    async navigate() {
        return await this.driver.get(this.url)
    }

    async setInput(elementBy: By, term: string) {
        let input = this.driver.findElement(elementBy)
        return await input.sendKeys(term)
    }

    async click(elementBy: By) {
        let clickedElement = this.driver.findElement(elementBy)
        return await clickedElement.click()
    }

    async getText(elementBy: By) {
        let text = this.driver.findElement(elementBy)
        return await text.getText()
    }
}