# Web
* The Internet is an infrastructure, whereas the Web is a service built on top of the infrastructure.
<br><br>

# Internet
* It is a hardware.

* The Internet is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together.
<br><br>

# Router
* ***PROBLEM***:  If you're trying to connect, say, ten computers, you need 45 cables, with nine plugs per computer! (n*(n+1)/2).

* To solve this problem, each computer on a network is connected to a special tiny computer called a ***router***. This router has only one job: like a signaler at a railway station, it makes sure that a message sent from a given computer arrives at the right destination computer.<br> 
(now 10 computers require only 10 wires(each computer to 1 router) to connect to each other).
<br><br>

# Internet Service Provider (ISP)
* An ISP is a company that manages some special routers that are all linked together and can also access other ISPs' routers.

* So the message from our network is carried through the network of ISP networks to the destination network.
<br><br>

# IP address
* If you want to send a message to a computer, you have to specify which one. Thus any computer linked to a network has a unique address that identifies it, called an "IP address" (where IP stands for Internet Protocol).

* It's an address made of a series of four numbers separated by dots, for example: 192.0.2.172.
<br><br>

# Domain name
* To make things easier, we can alias an IP address with a human-readable name called a domain name. For example (at the time of writing; IP addresses can change) google.com is the domain name used on top of the IP address 142.250.190.78.
<br><br>

# Intranets and Extranets
* ***Intranets*** are private networks that are restricted to members of a particular organization.

* They are commonly used to provide a portal for members to securely access shared resources, collaborate and communicate.
<br><br>

* ***Extranets*** are very similar to Intranets, except they open all or part of a private network to allow sharing and collaboration with other organizations.
* They are typically used to safely and securely share information with clients and stakeholders who work closely with a business.
<br><br>

# web page
* A document which can be displayed in a web browser such as Firefox, Google Chrome, Opera, Microsoft Edge, or Apple Safari. These are also often called just "pages."

* made up of ***HTML***.
<br><br>

# website
* A collection of ***linked*** web pages which are grouped together and usually connected together in various ways. Often called a "website" or a "site."
<br><br>

# web server
* A computer that hosts a website on the Internet.
* "Hosting" means that all the web pages and their supporting files are available on that computer.

* Don't confuse websites and web servers. For example, if you hear someone say, "My website is not responding", it actually means that the web server is not responding and therefore the website is not available.
<br><br>

# search engine
* A web service that helps you find other web pages, such as Google, Bing, Yahoo, or DuckDuckGo. Search engines are normally accessed through a web browser.

* A search engine is a special kind of website that helps users find web pages from other websites.
<br><br>
Many beginners on the web confuse search engines and browsers. Let's make it clear: A browser is a piece of software that retrieves and displays web pages; a search engine is a website that helps people find web pages from other websites. The confusion arises because, the first time someone launches a browser, the browser displays a search engine's homepage. This makes sense, because, obviously, the first thing you want to do with a browser is to find a web page to display. Don't confuse the infrastructure (e.g., the browser) with the service (e.g., the search engine).
<br><br>

# Clients and servers
* Computers connected to the internet are called clients and servers.

* client sends ***request***.
* server sends ***response***.
* Clients are the typical ***web user's internet-connected devices*** and ***web-accessing software*** available on those devices (usually a web browser like Firefox or Chrome).
* Servers are computers that store webpages, sites, or apps. When a client device wants to access a webpage, ***a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser***.
<br><br>

# TCP/IP
* Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet.
<br><br>

# DNS
* Domain Name System is like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's IP address before it can retrieve the website.
<br><br>

# HTTP
* Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other.
<br><br>

# So what happens, exactly?
When you type a web address into your browser:

* The browser goes to the DNS server, and finds the real address of the server that the website lives on.
* The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client.
* This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
* If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets.

* The browser assembles the small chunks into a complete web page and displays it to you.
<br><br>

# Order in which component files are parsed
* The browser parses the HTML file first, and that leads to the browser recognizing any `<link>`-element references to external CSS stylesheets and any `<script>`-element references to scripts.

* As the browser parses the HTML, it sends requests back to the server for any CSS files it has found from `<link>` elements, and any JavaScript files it has found from `<script>` elements, and from those, then parses the CSS and JavaScript.
* The browser generates an in-memory DOM tree from the parsed HTML, generates an in-memory CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript.
* As the browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted to the screen, and the user sees the page content and can begin to interact with it.
<br><br>

# Packets
* Basically, when data is sent across the web, it is sent in thousands of small chunks.
* Benefits of data is sent in small packets.
    * They are sometimes dropped or corrupted, and it's easier to replace small chunks when this happens.
    * Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time.

<br><br>

# Structure of domain names
* A domain name has a simple structure made of several parts (it might be one part only, two, three…), separated by dots and read from ***right to left***:<br>
ex. develope.mozilla.org<br>
***label1.label2.tdl***<br>

### TLD (Top-Level Domain).
* TLDs tell users the general purpose of the service behind the domain name.

* The most generic TLDs (.com, .org, .net)
* Local TLDs such as .us, .fr, or .se can require the service to be provided in a given language or hosted in a certain country.
* TLDs containing .gov are only allowed to be used by government departments.
* The .edu TLD is only for use by educational and academic institutions.
* TLDs can contain special as well as latin characters. A TLD's maximum length is ***63 characters***, although most are around 2–3.
### Label (or component)

* The labels are what follow the TLD. A label is a case-insensitive character sequence anywhere from one to sixty-three characters in length, containing only the letters A through Z, digits 0 through 9, and the '-' character (which may not be the first or last character in the label). a, 97, and hello-strange-person-16-how-are-you are all examples of valid labels.

The label located right before the TLD is also called a Secondary Level Domain (SLD).

A domain name can have many labels (or components). It is not mandatory nor necessary to have 3 labels to form a domain name. For instance, informatics.ed.ac.uk is a valid domain name.
* For any domain you control (e.g. mozilla.org), you can create "subdomains" with different content located at each, like developer.mozilla.org, support.mozilla.org, or bugzilla.mozilla.org.

# Domain name
* You cannot buy a domain name.
* Instead, you pay for the right to use a domain name for one or more years. You can renew your right, and your renewal has priority over other people's applications. But you never own the domain name.