# API
* Servers that are created for serving data for external use (in websites or apps) are often referred to as APIs or ‘Application Programming Interfaces’.

* APIs are accessed through **URLs**.
<br><br>

# CORS
* For security, browsers block requests from one website to another if they don’t trust each other. This is called the same-origin policy.
* For example:
  * Allowed: A page from https://example.com requests data from https://example.com/api.

  * Blocked: A page from https://example.com requests data from https://anotherdomain.com/api.

* To protect users from malicious websites trying to access sensitive data from other websites without permission.

#### How CORS Works
  1. A browser makes a request to another domain (a "cross-origin request").
  2. The server receiving the request decides whether to allow it.

  3. If allowed, the server includes the appropriate CORS headers in its response. The browser checks these headers and decides whether to allow the web page to access the response.

* To allow sharing, the server includes a special note (header) in its response, like:
  * Access-Control-Allow-Origin: https://mywebsite.com (allows just your website).

  * Access-Control-Allow-Origin: * (allows any website).
