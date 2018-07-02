*** Settings ***
Library    Selenium2Library

*** Variables ***

*** Test Cases ***
Sign Up
    open browser    http://10.60.38.173/#/    FireFox
    click element    xpath=//a[contains(text(),'注册')]
    input text    css=input.el-input__inner    test
    input text    xpath=//input[@type='password']    123456
    input text    xpath=(//input[@type='password'])[2]    123456
    input text    xpath=//input[@type='email']    test@test.com
    click element    css=span.el-checkbox__inner
    click element    xpath=//button[@type='button']
    close browser
    
Sign In
    open browser    http://10.60.38.173/#/    FireFox
    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    close browser

Sign Out
    open browser    http://10.60.38.173/#/    FireFox
    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=智码
    mouse over    //div[@id='app']/div/div[2]/div/div/div/span
    wait until element is visible    link=退出
    click element    link=退出
    close browser

Update Profile
    open browser    http://10.60.38.173/#/    FireFox
    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']

    click element    xpath=(//button[@type='button'])[2]
    click element    css=input.el-input__inner
    input text    css=input.el-input__inner    test@test.com
    input text    xpath=(//input[@type='text'])[2]    123456789
    click element    xpath=(//button[@type='button'])[2]
    close browser

Add Exp
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=智码
    mouse over    //div[@id='app']/div/div[2]/div/div/div/span
    go to    http://10.60.38.173/#/center

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li
    click element    css=button.el-button.el-button--text
    click element    css=input.el-input__inner
    input text    css=input.el-input__inner    test
    click element    xpath=//div[@id='app']/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/form/div[2]/div/div/div/span/span/i
    click element    xpath=//div[4]/div/div/ul/li
    click element    css=textarea.el-textarea__inner
    input text    css=textarea.el-textarea__inner    test_url
    click element    xpath=(//textarea[@type='textarea'])[2]
    input text    xpath=(//textarea[@type='textarea'])[2]    test
    click element    css=button.el-button.el-button--primary

    close browser

Update Exp
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=智码
    mouse over    //div[@id='app']/div/div[2]/div/div/div/span
    go to    http://10.60.38.173/#/center

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li

    Execute Javascript    document.getElementsByClassName('el-icon-edit')[0].click()

    wait until element is enabled    css=input.el-input__inner
    input text    css=input.el-input__inner    new_test
    click element    xpath=//div[@id='app']/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/form/div[2]/div/div/div/span/span/i
    click element    xpath=//div[4]/div/div/ul/li
    input text    css=textarea.el-textarea__inner    new_test_url
    click element    xpath=(//textarea[@type='textarea'])[2]
    input text    xpath=(//textarea[@type='textarea'])[2]    new_test
    click element    xpath=(//button[@type='button'])[4]

    close browser

Delete Exp
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=智码
    mouse over    //div[@id='app']/div/div[2]/div/div/div/span
    go to    http://10.60.38.173/#/center

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li

    Execute Javascript    document.getElementsByClassName('el-icon-delete')[0].click()

    close browser

View Project
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=项目

    wait until element is visible    css=button.el-button.el-button--primary
    click element    css=button.el-button.el-button--primary

    wait until element is visible    //div[@id='app']/div/div/div[3]/div/div[3]/div[3]/div[3]/table/tbody/tr/td/div
    click element    //div[@id='app']/div/div/div[3]/div/div[3]/div[3]/div[3]/table/tbody/tr/td/div
    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/li[2]/ul/li
    click element    css=div.worker_content
    click element    css=div.worker_theme
    click element    css=div.worker_content
    
    close browser

Join Project
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    link=项目

    wait until element is visible    xpath=(//a[contains(text(),'项目')])[2]
    click element    xpath=(//a[contains(text(),'项目')])[2]
    click element    xpath=(//button[@type='button'])[2]
    click element    xpath=//button[@type='button']
    
    close browser

View My Project
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]

    close browser
    
Create Requirement
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    //div[@id='app']/div/div[2]/div/div/span/span

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]
    click element    css=button.el-button.el-button--text
    input text    css=input.el-input__inner    test
    click element    xpath=//div[@id='app']/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/form/div[2]/div/div/div/span/span/i
    click element    xpath=//div[4]/div/div/ul/li/span
    click element    xpath=//input[@id='']
    wait until element is visible    //tr[5]/td/div/span
    click element    //tr[5]/td/div/span
    click element    xpath=(//input[@id=''])[2]
    wait until element is visible    //div[5]/div/div/div[2]/table/tbody/tr[5]/td/div/span
    click element    //div[5]/div/div/div[2]/table/tbody/tr[5]/td/div/span
    click element    css=span.el-switch__core
    click element    css=span.el-switch__button
    click element    css=span.el-switch__button
    click element    css=textarea.el-textarea__inner
    input text    css=textarea.el-textarea__inner    test
    click element    css=button.el-button.el-button--primary
    
    close browser

Update Requirement
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]

    Execute Javascript    document.getElementsByClassName('el-icon-edit')[0].click()

    click element    css=input.el-input__inner
    input text    css=input.el-input__inner    new_test
    click element    xpath=//div[@id='app']/div/div[2]/div/div[3]/div/div[2]/div/div/div[2]/form/div[2]/div/div/div/span/span/i
    click element    xpath=//div[4]/div/div/ul/li[2]
    click element    xpath=//input[@id='']
    wait until element is visible    //tr[5]/td/div/span
    click element    //tr[5]/td/div/span
    click element    xpath=(//input[@id=''])[2]
    wait until element is visible    //div[5]/div/div/div[2]/table/tbody/tr[5]/td/div/span
    click element    //div[5]/div/div/div[2]/table/tbody/tr[5]/td/div/span
    click element    css=span.el-switch__core
    click element    css=textarea.el-textarea__inner
    input text    css=textarea.el-textarea__inner    new test
    click element    css=button.el-button.el-button--primary

    close browser

Delete Requirement
    open browser    http://10.60.38.173/#/    FireFox

    click element    xpath=//a[contains(text(),'登录')]
    click element    xpath=//input[@type='text']
    input text    xpath=//input[@type='text']    test
    input text    xpath=//input[@type='password']    123456
    click element    xpath=//button[@type='button']
    wait until page contains element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]

    click element    xpath=//div[@id='app']/div/div[2]/div/div[2]/ul/div/li[2]/ul/li[3]
    Execute Javascript    document.getElementsByClassName('el-icon-delete')[0].click()

    close browser