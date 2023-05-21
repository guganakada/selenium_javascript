const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
// const ie = require('selenium-webdriver/ie');

// Teste de fluxo de compras
async function executaTestes() {
    
    // ------- Seleciona o navegador e acessa o site Palácio das Ferramentas -------
    // let driver = await new Builder().forBrowser("ie").build()
    let driver = await new Builder().forBrowser("chrome").build()
    await driver.get("https://palaciodasferramentas.com.br/")
    await driver.manage().window().setRect({ width: 1080, height: 1000 })
    
    // ------- Acessa página Entrar insere e-mail, senha de acesso e clica no botão Entrar -------
    // Dado Acessado site palácio das ferramentas
    // Quando Possui cadastro para acesso
    // E Clica no link Entrar
    // E Insere e-mail e senha  -- inserir e-mail e senha validos --
    // E Clica no botão Entrar
    // Então Loga no site e redireciona para página inicial
    await driver.findElement(By.linkText("Entrar")).click()
    driver.wait(until.titleIs("Entrar"), 10000)
    await driver.findElement(By.id("btn-cookie-allow")).click()
    await driver.findElement(By.id("email")).sendKeys("teste@teste.com")
    await driver.findElement(By.id("pass")).sendKeys("TesteXXXXX")
    await driver.findElement(By.id("send2")).click()
    
    // ------- No campo pesquisa insere "chave fenda" e clica no botão Pesquisar -------
    // Dado Estar logado no site
    // Quando Insere nome do item no campo pesquisa
    // E Clica no botão pesquisar
    // Então Apresenta resultado de pesquisa com itens relacionados
    driver.wait(until.titleIs("Palácio das Ferramentas | A Loja Referência em Ferramentas!"), 10000)
    await driver.findElement(By.id("search")).sendKeys("chave fenda")
    await driver.findElement(By.css(".actions > .search")).click()
    
    // ------- Com resultado de pesquisa, clica no item, ao acessar página do produto clica no botão Comprar -------
    // Dado Que pesquisa retornou resultados
    // Quando Clica em um dos resultados da pesquisa
    // E Acessa página do produto
    // E Clica no botão Comprar
    // Então Adiciona item ao carrinho
    await driver.findElement(By.css(".product-image-container-22835 .product-image-photo")).click()
    driver.wait(until.titleIs("Chave de Fenda Ponta Chata em Aço Cromo Vanádio 3x125 mm 1/8x5 POL 44130012 TRAMONTINA PRO"), 5000)
    await driver.findElement(By.css("#product-addtocart-button > span")).click()
    
    // ------- Acessa carrinho de compras e clica no botão Finalizar Compras -------
    // Dado Item foi inserido no carrinho de compras
    // Quando Acessa carrinho
    // E Clica no botão Finalizar Compra
    // Então Acessa página para conferir dados do destinatário
    await driver.get("https://palaciodasferramentas.com.br/checkout/cart/")
    driver.wait(until.titleIs("Carrinho de Compras"), 5000)
    await driver.findElement(By.css(".checkout > span")).click()

}

executaTestes();
