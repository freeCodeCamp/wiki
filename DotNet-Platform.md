![Logo][logo]

# The .NET Platform 

**.NET platform** is a big and comprehensive collection of frameworks and libraries managed by [Microsoft](https://www.microsoft.com/net). C# is the most popular language used to develop a range of .NET applications, such as [web apps][asp], [windows aps][windowaps], [Mac and iPhone apps](https://www.xamarin.com/platform).

We will start with learning [C# programing language](C-Sharp), and will make you familiar with development environment, project structures, techniques, and best practices that you will perform as a professional developer.

First let's begin with a brief overview of the .NET platform, and get some jargons out of the way. Don't worry, you don't have to know in-depth about these at this point.

* [.NET Framework](https://msdn.microsoft.com/en-gb/library/w0x726c2(v=vs.110).aspx) : (_pronounced dot net_) provides configuration for your application to run on top of it. 
It provides all the services an app needs; for instance communication with database, networks, file systems which are commonly used to build console, desktop, web, mobile and game applications.

 * [CLR (Common Language Runtime)](https://msdn.microsoft.com/en-us/library/8bs2ecf4(v=vs.100).aspx) : is an execution environment for your application which manages its life-cycle. CLR provides services like memory management, and is:
     1. implementation of [CLI standard(Common Language Infrastructure)](http://www.ecma-international.org/publications/standards/Ecma-335.htm)
     2. designed to be platform-independent. Platform refers to the computer architecture and operating system.
     3. language independent, for instance can be used for C#, C++,[VB.NET][vbnet] and [F#][fsharp].
 
 * C-Sharp Compiler : a `csc.exe` is a compiler which transforms C# code into Microsoft Intermediate Language (MSIL), commonly referred as IL. It defines instructions which CLR can understand. CLR's job is to read these instructions and tranform them into machine-understandable instructions.
 
 * Class libraries : It contains thousands of in-built classes for your application's use, for example [`System.IO`][systemio] for reading/writing data streams, [`HttpClient`][httpclient] sends data over network, [`ASP.NET`][asp] for web applications, [`ADO.NET`][ado]for data access to relational databases (like Microsoft SQL Server and MySQL), and [Windows Communication Foundation (WCF)][wcf] for service-oriented applications which communicates over established protocols like HTTP, REST, SOAP and TCP etc.

 * The C# Programming Language (_pronounced "C-sharp"_) : 
  C# has a syntax similar to Java, C++, and Javascript.  It is:
  
    1. used to write applications, services and reusable libraries.
    2. designed to work with .NET platform.
    3. strongly typed, high level object oriented language.

* [.NET Core][core] : is Microsoft's recent endeavour to move towards open source, cross platform development delivered as [Nuget][nuget] packages. They are working with [Mono](http://www.mono-project.com/) community, which is an implementation of Microsoft .NET framework to build apps on Windows, Linux, and iOS.

* [Nuget][nuget]: is package manager for .NET applications.

* [Silverlight](https://www.microsoft.com/silverlight/) : primarily intended to focus on web browsers plug-in to provide enrich multimedia.
  
* [.NET for windows app][windowaps] : used to create Windows 8.x Store apps using C#.

### The C# programing language
Next step to learn the [C# programing language](C-Sharp).

[logo]: https://cloud.githubusercontent.com/assets/5607371/13464681/4b7ca26a-e0b8-11e5-961b-b87dbb971364.png
[asp]:http://www.asp.net/
[ado]:https://msdn.microsoft.com/en-us/library/h43ks021(v=vs.110).aspx
[wcf]:https://msdn.microsoft.com/en-us/library/ms735119(v=vs.90).aspx
[systemio]:https://msdn.microsoft.com/en-us/library/system.io(v=vs.110).aspx
[httpclient]:https://msdn.microsoft.com/en-us/library/system.net.http.httpclient(v=vs.118).aspx
[vbnet]:https://msdn.microsoft.com/en-us/library/aa903378(v=vs.71).aspx
[fsharp]:https://msdn.microsoft.com/en-us/library/dd233154.aspx
[nuget]:https://www.nuget.org/
[windowaps]:https://dev.windows.com/en-us/
[core]:https://blogs.msdn.microsoft.com/dotnet/2014/12/04/introducing-net-core/