## Jmeter  压力测试报告

- ##### Jmeter 介绍：

  Apache JMeTM可用于测试静态和动态资源、Web动态应用程序的性能。
  它可以用来模拟服务器、服务器组、网络或对象上的重载，以测试其强度或分析不同负载类型下的整体性能。
  Apache JMIT的特征包括：
  能够加载和性能测试许多不同的应用程序/服务器/协议类型：
  WEB-HTTP，HTTPS（Java，NoDEJS，PHP，ASP.NET，……）
  SOAP/REST WebServices
  文件传输协议
  数据库通过JDBC
  LDAP
  基于JMS的消息中间件（MOM）
  邮件-SMTP（s）、POP3（s）和IMAP（s）
  本机命令或shell脚本
  传输控制协议
  Java对象
  全功能测试IDE，允许快速测试计划记录（来自浏览器或本地应用程序）、构建和调试。
  命令行模式（非GUI /无头模式）从任何Java兼容OS（Linux、Windows、Mac OSX、……）加载测试。
  一个完整的、现成的动态HTML报告
  通过从最流行的响应格式、HTML、JSON、XML或任何文本格式提取数据的能力之间的简单关联
  完整的可移植性和100%的Java纯度。
  完整的多线程框架允许通过多线程同时进行采样，并通过单独的线程组同时对不同函数进行采样。
  缓存和离线分析/重放测试结果。
  高度可扩展核心：
  可插拔采样器允许无限的测试能力。
  Scriptable Samplers（JRS223兼容的语言，如Groovy和BeNeS壳）
  可以用可插拔计时器选择几个负载统计。
  数据分析和可视化插件允许很大的可扩展性和个性化。
  函数可用于向测试提供动态输入或提供数据操作。
  通过Maven、Graddle和詹金斯第三方开放源码库轻松实现连续集成

- ##### 被测对象，接口：

  project : CrowdSourcing 

  branch : cancan

  interface : searchProject

  url : /api/project/all/

- ##### 压力测试配置文件

  <?xml version="1.0" encoding="UTF-8"?>
  <jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">
    <hashTree>
      <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">
        <stringProp name="TestPlan.comments"></stringProp>
        <boolProp name="TestPlan.functional_mode">false</boolProp>
        <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>
        <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
        <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
          <collectionProp name="Arguments.arguments"/>
        </elementProp>
        <stringProp name="TestPlan.user_define_classpath"></stringProp>
      </TestPlan>
      <hashTree>
        <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">
          <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
          <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">
            <boolProp name="LoopController.continue_forever">false</boolProp>
            <stringProp name="LoopController.loops">1</stringProp>
          </elementProp>
          <stringProp name="ThreadGroup.num_threads">5000</stringProp>
          <stringProp name="ThreadGroup.ramp_time">1</stringProp>
          <boolProp name="ThreadGroup.scheduler">false</boolProp>
          <stringProp name="ThreadGroup.duration"></stringProp>
          <stringProp name="ThreadGroup.delay"></stringProp>
        </ThreadGroup>
        <hashTree>
          <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">
            <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
              <collectionProp name="Arguments.arguments"/>
            </elementProp>
            <stringProp name="HTTPSampler.domain">localhost</stringProp>
            <stringProp name="HTTPSampler.port">30001</stringProp>
            <stringProp name="HTTPSampler.protocol"></stringProp>
            <stringProp name="HTTPSampler.contentEncoding"></stringProp>
            <stringProp name="HTTPSampler.path">/api/project/all</stringProp>
            <stringProp name="HTTPSampler.method">GET</stringProp>
            <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
            <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
            <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
            <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
            <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
            <stringProp name="HTTPSampler.connect_timeout"></stringProp>
            <stringProp name="HTTPSampler.response_timeout"></stringProp>
          </HTTPSamplerProxy>
          <hashTree/>
          <ResultCollector guiclass="ViewResultsFullVisualizer" testclass="ResultCollector" testname="View Results Tree" enabled="true">
            <boolProp name="ResultCollector.error_logging">true</boolProp>
            <objProp>
              <name>saveConfig</name>
              <value class="SampleSaveConfiguration">
                <time>true</time>
                <latency>true</latency>
                <timestamp>true</timestamp>
                <success>true</success>
                <label>true</label>
                <code>true</code>
                <message>true</message>
                <threadName>true</threadName>
                <dataType>true</dataType>
                <encoding>false</encoding>
                <assertions>true</assertions>
                <subresults>true</subresults>
                <responseData>false</responseData>
                <samplerData>false</samplerData>
                <xml>false</xml>
                <fieldNames>true</fieldNames>
                <responseHeaders>false</responseHeaders>
                <requestHeaders>false</requestHeaders>
                <responseDataOnError>false</responseDataOnError>
                <saveAssertionResultsFailureMessage>true</saveAssertionResultsFailureMessage>
                <assertionsResultsToSave>0</assertionsResultsToSave>
                <bytes>true</bytes>
                <sentBytes>true</sentBytes>
                <threadCounts>true</threadCounts>
                <idleTime>true</idleTime>
                <connectTime>true</connectTime>
              </value>
            </objProp>
            <stringProp name="filename">C:\Users\gst\Desktop\大三下\软件测试\Jmeter压力测试\5000\result.csv</stringProp>
          </ResultCollector>
          <hashTree/>
        </hashTree>
      </hashTree>
    </hashTree>
  </jmeterTestPlan>

  截图：

  - 线程组：

    ![](C:\Users\gst\Desktop\大三下\软件测试\Jmeter压力测试\截图\EUK~RJJH6IB_RV5XB37IX_B.png)

  - HTTP 请求配置：

    ![](C:\Users\gst\Desktop\大三下\软件测试\Jmeter压力测试\截图\8$GO(``NV(S22DU6E[J8U)G.png)

- 压力测试运行结果截图：

  ![](C:\Users\gst\Desktop\大三下\软件测试\Jmeter压力测试\截图\222.png)

- 压力测试bug：

  1：并发访问服务端，并服务端创建transaction请求数据库，太过频繁的访问导致transaction创建失败，无法向数据库创建请求导致访问失败。

