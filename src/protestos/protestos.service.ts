import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
/*import { executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";


// eslint-disable-next-line @typescript-eslint/no-var-requires
const StealthPlugin = require("puppeteer-extra-plugin-stealth");*/
import puppeteer from 'puppeteer';
import * as UserAgent from "user-agents";


@Injectable()
export class ProtestosService {
  urlFormulario = "https://protestosp.com.br/consulta-de-protesto";

  constructor(private readonly httpService: HttpService) {
  }

  /*async getProtestosByCompany(cnpj: string) {
    const url = "https://protestosp.com.br/consulta-de-protesto";

    const userAgent = new UserAgent();

    const browser = await puppeteer.use(StealthPlugin).launch({
      headless: false,
      executablePath: executablePath(),
      slowMo: 40
      /!*defaultViewport: null,
      ignoreDefaultArgs: ['--enable-automation'],
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--proxy-server=socks5://127.0.0.1:9050',
        '--disable-blink-features',
        '--disable-blink-features=AutomationControlled'
      ],*!/
    });

    const page = await browser.newPage();

    //Randomize viewport size
    // await page.setViewport({
    //   width: 1420 + Math.floor(Math.random() * 100),
    //   height: 1000 + Math.floor(Math.random() * 100),
    //   deviceScaleFactor: 1,
    //   hasTouch: false,
    //   isLandscape: false,
    //   isMobile: false,
    // });

    await page.setUserAgent(userAgent.random().toString());
    await page.setJavaScriptEnabled(true);
    await page.setDefaultNavigationTimeout(0);


    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 0
    });

    const firstCookie = await page.waitForSelector(
      "button[data-cookiefirst-action=\"accept\"]"
    );
    if (firstCookie) {
      await page.click("button[data-cookiefirst-action=\"accept\"]");
    }
    //recapchaV2

    //const documentNro = await page.type('#input_cpf_cnpj', this.formatCNPJ('02290277000393'));
    //const searchBtn = await page.$x("//button[@class='bt-consultar ml-2']");

    //recapchaV3
    await page.waitForSelector("#frmConsulta #g-recaptcha-response");
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      grecaptcha
        .execute("6LedIn4UAAAAAFfCJvLiDr8PCH_jgRRLqQmCU41Q", {
          action: "homepage"
        })
        .then(function(token) {
          console.log(token, 0);
          document.querySelector(
            "#frmConsulta #g-recaptcha-response"
          ).innerHTML = token;
        });
    });

    const element = await page.$("#AbrangenciaNacional");
    const isCheckBoxChecked = await (
      await element.getProperty("checked")
    ).jsonValue();
    if (!isCheckBoxChecked) {
      await element.click();
    }

    const documentType = await page.select("#TipoDocumento", "2");
    const documentNro = await page.type("#Documento", this.formatCNPJ(cnpj));
    //const documentNro = await page.type('#Documento', '12.456.606/0001-15');
    const searchBtn = await page.$x(
      "//input[@class='btn-padrao blue borderEffect2 mt-3 hoverEffect wider3']"
    );

    //const searchBtn = await page.$x("//div[@class='recaptcha-checkbox-border']");
    await Promise.all([
      page.waitForNavigation(),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      searchBtn[0].click()
      //page.click('.recaptcha-checkbox-border')
    ]);

    const pageUrl = await page.url();

    const detailsBtnF = await page.$x(
      "//input[@class='btn-detalhes-icon hoverEffect']"
    );
    let dataProtestos = [];
    let results = [];
    const lastPageNumber = 3;

    if (pageUrl === "https://protestosp.com.br/consulta-de-protesto/Positivo") {
      for(let i=0; i<lastPageNumber;i++) {
        results = results.concat(await this.extractedEvaluateCall(page));
        if (i != lastPageNumber - 1) {

          // no next button on last page
          await page.click('document.querySelector(\'#resultadoConsulta > div.paginacao > ul > li:nth-child(6) > a\')');
        }
      }
    }

    // console.log("dataProtestos-" + cnpj, dataProtestos.length);

    await browser.close();

    return dataProtestos;
  }*/

  /*formatCNPJ(cnpj: string): string {
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }*/

  /*async getProtestosByCompany2(cnpj: string): Promise<any[]> {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: executablePath(),
      slowMo: 35,
      dumpio: true
    });
    const page = await browser.newPage();
    //Randomize viewport size
    await page.setViewport({
      width: 1420 + Math.floor(Math.random() * 100),
      height: 1000 + Math.floor(Math.random() * 100),
      deviceScaleFactor: 1,
      hasTouch: false,
      isLandscape: false,
      isMobile: false
    });
    // eslint-disable-next-line prefer-const
    let elemento = null;
    await page.setUserAgent(UserAgent.random().toString());
    await page.setJavaScriptEnabled(true);
    await page.setDefaultNavigationTimeout(0);

    await page.goto(this.urlFormulario, {
      waitUntil: "domcontentloaded",
      timeout: 0
    });

    const firstCookie = await page.waitForSelector(
      "button[data-cookiefirst-action=\"accept\"]"
    );
    if (firstCookie) {
      await page.click("button[data-cookiefirst-action=\"accept\"]");
    }

    //recapchaV3
    await page.waitForSelector("#frmConsulta #g-recaptcha-response");
    await page.evaluate(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      grecaptcha
        .execute("6LedIn4UAAAAAFfCJvLiDr8PCH_jgRRLqQmCU41Q", {
          action: "homepage"
        })
        .then(function(token) {
          console.log(token, 0);
          document.querySelector(
            "#frmConsulta #g-recaptcha-response"
          ).innerHTML = token;
        });
    });

    // COnsultar
    await page.waitForSelector(
      "#frmConsulta > input[type=button][value=\"CONSULTAR\"]"
    );
    await page.waitForSelector("#AbrangenciaNacional");
    await page.click("#AbrangenciaNacional");

    await page.waitForSelector("#TipoDocumento");
    await page.select("#TipoDocumento", "2");

    await page.waitForSelector("#Documento");
    await page.type("#Documento", cnpj);

    await page.waitForSelector("input[type=button][value=\"CONSULTAR\"]");
    await page.click("input[type=button][value=\"CONSULTAR\"]");

    await page.waitForNavigation({
      waitUntil: "load"
    });

    const pageUrl = await page.url();
    let dataProtestos = null;
    let dataProtestos2 = null;
    if (
      pageUrl === "https://protestosp.com.br/consulta-de-protesto/Negativo" ||
      pageUrl === "https://protestosp.com.br/consulta-de-protesto/Positivo"
    ) {
      console.log("entro");
      //document.querySelector('.paginacao ul li:nth-child(6)')
      const resultadoTablaSelector = ".table-retorno-consulta";
      await page.waitForSelector(resultadoTablaSelector); console.log("entro a evaluate");
      const result = await page.evaluate(() => {
        console.log("entro a evaluate2");
        const tableProtestos = document.querySelector(
          ".table-retorno-consulta"
        );
        //const rowsTableProtestos = Array.from(document.querySelectorAll('table[class="table source-son table-retorno-consulta trc-01"] > tbody > tr '));
        const rowsTableProtestos = Array.from(
          tableProtestos.querySelectorAll("tbody > tr")
        );

        const objectData = [];
        const objectData2 = [];
        rowsTableProtestos.map((row, index) => {
          const columns = row.querySelectorAll("td");
          const object = {};
          const protestosList = {};
          const { textContent: state } = columns[0];
          const { textContent: comarca } = columns[1];
          const { textContent: cartorio } = columns[2];
          const { textContent: protestos } = columns[3];
          object["state"] = state;
          object["comarca"] = comarca;
          object["cartorio"] = cartorio;
          object["protestos"] = protestos;

          // detailsBtn[index].click(); //no click

          const cartorioDirection = document.querySelector("#endcartorio");
          //const { textContent: direction } = cartorioDirection;

          object["direction"] = cartorioDirection;

          objectData.push(object);
          console.log("objectData", objectData);


        });
      });


    }
    console.log("dataProtestos-" + cnpj, dataProtestos2);


    await browser.close();
    return new Promise((resolve) => {
      resolve(dataProtestos);
    });
  }*/

  /*async extractedEvaluateCall(page) {

    let dataProtestos = null;
    dataProtestos = await page.evaluate(() => {
      const tableProtestos = document.querySelector(
        ".table-retorno-consulta"
      );
      //const rowsTableProtestos = Array.from(document.querySelectorAll('table[class="table source-son table-retorno-consulta trc-01"] > tbody > tr '));
      const rowsTableProtestos = Array.from(
        tableProtestos.querySelectorAll("tbody > tr")
      );

      const objectData = [];
      rowsTableProtestos.map(async (row, index) => {
        const columns = row.querySelectorAll("td");
        const object = {};
        const protestosList = {};
        const { textContent: state } = columns[0];
        const { textContent: comarca } = columns[1];
        const { textContent: cartorio } = columns[2];
        const { textContent: protestos } = columns[3];
        object["state"] = state;
        object["comarca"] = comarca;
        object["cartorio"] = cartorio;
        object["protestos"] = protestos;

        objectData.push(object);
      });
      return objectData;
    });
    return dataProtestos;
  }*/

 /* async testWithGoogle(param = '') {
    const browser = await puppeteer.use(StealthPlugin).launch({
      headless: false,
      executablePath: executablePath(),
      slowMo: 40,
      dumpio: true
      /!*defaultViewport: null,
      ignoreDefaultArgs: ['--enable-automation'],
      args: [
        '--no-sandbox',
        '--disable-gpu',
        '--proxy-server=socks5://127.0.0.1:9050',
        '--disable-blink-features',
        '--disable-blink-features=AutomationControlled'
      ],*!/
    });
    const page = await browser.newPage();

    await page.goto('https://www.mercadolivre.com.br');

    await page.click('button[data-testid="action:understood-button"');

    // Type into search box.
    await page.waitForSelector('#cb1-edit');// first wait
    await page.type('#cb1-edit', 'moto g200');
    await page.click('.nav-search-btn');

    const resultsSelector = '.ui-search-result__content-wrapper.shops__result-content-wrapper';
    await page.waitForSelector(resultsSelector);

    let nextPageBUtton = await page.$('.andes-pagination__button--next');
    let allLinks = [];
    let contador = 0;
    while (nextPageBUtton !== null) {
      // await page.click('.andes-pagination__button--next');
      const [response] = await Promise.all([
        page.waitForNavigation(),
        page.click('.andes-pagination__button--next')
      ]);

      console.log(response)
      console.log('\n------------\n contador:', contador);
      const links = await page.evaluate(async resultsSelector => {

        return [...document.querySelectorAll(resultsSelector)].map(anchor => {
          // @ts-ignore
          const title = anchor.querySelector('.ui-search-item__title.shops__item-title').innerText;
          // @ts-ignore
          const precio = anchor.querySelector('.price-tag-fraction').innerText;
          // @ts-ignore
          //const cents = anchor.querySelector('.ui-search-result__content-columns.shops__content-columns > .price-tag-cents').innerText;
          return {title, precio};
        });
      }, resultsSelector);

      // Print all the files.

      allLinks = [...allLinks, ...links];

      nextPageBUtton = await page.$('.andes-pagination__button--next');
      contador++
    }
    console.log(allLinks.length)
    console.log(allLinks[0])
    console.log(allLinks[allLinks.length-1])
    return allLinks
    // Extract the results from the page.
    /!*const links = await page.evaluate(async resultsSelector => {

      return [...document.querySelectorAll(resultsSelector)].map(anchor => {
        // @ts-ignore
        const title = anchor.querySelector('.ui-search-item__title.shops__item-title').innerText;
        // @ts-ignore
        const reales = anchor.querySelector('.price-tag-fraction').innerText;
        // @ts-ignore
        //const cents = anchor.querySelector('.ui-search-result__content-columns.shops__content-columns > .price-tag-cents').innerText;
        return `${title} - ${reales}`;
      });
    }, resultsSelector);

    // Print all the files.
    console.log(links.join('\n'));*!/
  }*/

  async extractFromGoogle(page, resultsSelector) {
    const content = await page.evaluate(resultsSelector => {
      return [...document.querySelectorAll(resultsSelector)].map(anchor => {
        const title = anchor.textContent.split('|')[0].trim();
        // @ts-ignore
        return `${title} - ${anchor.href}`;
      });
    }, resultsSelector);

    return content;
  }

  async protestosByCnpj(cnpj = '') {
    try {
      const url = 'https://protestosp.com.br/consulta-de-protesto';

      // -------------------UserAgent--------------------
      const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36';
      //Randomize User agent or Set a valid one
      const userAgent = UserAgent.random().toString();
      const UA = userAgent || USER_AGENT;
      //--------------------------------------------
      const browser = await puppeteer.launch({
        headless: false,
        slowMo: 35,
        defaultViewport: null
        // userDataDir: '/tmp'
      });

      const page = await browser.newPage();
      //-------------------------------------------*Viewport*/
      //Randomize viewport size
      await page.setViewport({
        width: 1420 + Math.floor(Math.random() * 100),
        height: 1000 + Math.floor(Math.random() * 100),
        deviceScaleFactor: 1,
        hasTouch: false,
        isLandscape: false,
        isMobile: false
      });
      await page.setUserAgent(UA);
      await page.setJavaScriptEnabled(true);
      await page.setDefaultNavigationTimeout(0);
      //------------------------------------------------------
      await page.goto(url, {
        waitUntil: "load"
      });
      //----------------------------------------
      // Cookies
      const cookieIsVisible = await page.$('button[data-cookiefirst-action=\"accept\"]') !== null;
      if(cookieIsVisible)
        await page.click('button[data-cookiefirst-action=\"accept\"]');
      //--------------------------------------------------------------------------
      //recapchaV3
      await page.waitForSelector("#frmConsulta #g-recaptcha-response");
      await page.evaluate(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        grecaptcha
          .execute("6LedIn4UAAAAAFfCJvLiDr8PCH_jgRRLqQmCU41Q", {
            action: "homepage"
          })
          .then(function(token) {
            console.log(token, 0);
            document.querySelector(
              "#frmConsulta #g-recaptcha-response"
            ).innerHTML = token;
          });
      });
      //--------------------------------------------------------------------------
      // Selects
      await page.waitForSelector("#AbrangenciaNacional");
      await page.click("#AbrangenciaNacional");

      await page.waitForSelector("#TipoDocumento");
      const option = (this.testCPF(cnpj)) ? '1' : '2';
      await page.select("#TipoDocumento", option );

      // // Type into search box.
      await page.waitForSelector("#Documento");// first wait
      await page.type("#Documento", cnpj);
      const [response] = await Promise.all([
        page.waitForNavigation({
          waitUntil: "load"
        }),
        page.click("input[type=button][value=\"CONSULTAR\"]")
      ]);
      // await page.click('.nav-search-btn');
      // //--------------------------------------------------------------------------
      // // Get each element
      const singleItemSelector = '.table.source-son.table-retorno-consulta.trc-01 > tbody > tr';
      const listItemHandles = await page.$$(singleItemSelector);
      //----------------------------------------------------------------
      let listOfData = [];
      let isNextPageIsDisabled = false;
      while (!isNextPageIsDisabled) {
        await page.waitForSelector(singleItemSelector)
        for (const singleItemHandle of listItemHandles) {
          //Estado	Comarca	Cartório	Protestos
          let state = null;
          let registry = null;
          let protest = null;
          try {
            state = await page.evaluate(el => el.querySelectorAll('.thEstado')[0].textContent, singleItemHandle);
          } catch (error) {
            console.log('Catched: ', error.message)
          }
          try {
            registry = await page.evaluate(el => el.querySelector('.thCartorio').textContent, singleItemHandle);
          } catch (error) {
            console.log('Catched: ', error.message)
          }
          try {
            protest = await page.evaluate(el => el.querySelectorAll('.thEstado')[2].textContent, singleItemHandle);
          } catch (error) {
            console.log('Catched: ', error.message)
          }
          if (protest !== null) {
            listOfData = [...listOfData, { state, registry, protest }];
          }
        }

        // click next
        await page.waitForSelector('.paginacao', { visible: true});
        const nextPageIsDisabled = await page.$('.paginacao > ul li:nth-last-child(2).disabled') !== null;
        isNextPageIsDisabled = nextPageIsDisabled;
        if(!nextPageIsDisabled){
          await page.click('.paginacao > ul li:nth-last-child(2)')
        }
      }
      console.log(listOfData.length)
      //------------End Seccion Obtener elementos---------------------------------------------------

      const nextPageIsDisabled = await page.$('.paginacao > ul li:nth-last-child(2)') !== null;
      console.log(nextPageIsDisabled)

      // await browser.close();
      return listOfData;
    }
    catch (error) {
      console.log(error.message)
      return []
    }
  }

  testCPF(strCPF): boolean {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }
}
