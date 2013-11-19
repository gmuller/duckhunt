duckhunt
========

A Simple Screen Shot Utility. 

Duck Hunt is a node.js mashup of several technologies to take screen shots of web pages on demand. 

It currently consists of a single POST method, rendePDF, that accepts only two arguments:

* `url` -  The URL to screenshot
* `timeout` - how long to wait for the page to render

It responds with a binary file, the rendered PDF.

Duck Hunt is equipped with a [Vagrant](http://docs.vagrantup.com/v2/) file. Install Vagrant and Virtualbox via the instructions in their documentation, then run the following in the repository root:

```shell
vagrant up
vagrant ssh
cd /vagrant
node server.js
```

accessing http://localhost:3000 should return the standard index. http://localhost:3000/renderPDF can be POSTED.




