# mySQL

* Log into MySQL using the following command: `sudo mysql`.

<br/>

## Start/Stop mySQL server
* sudo /etc/init.d/mysql start
* sudo /etc/init.d/mysql stop

or

* sudo systemctl start mysql
* sudo systemctl stop mysql

<br/>

## Check status
* sudo systemctl status mysql

<br/>

## Log into mysql using root user
* mysql -u root -p

<br/>

# Connecting a Node.js app to MySQL, there are two main approaches to manage database connections:

## 1. Single Connection (Per Request)
Create a new connection, use it, then close it after you're done.

## 2. Connection Pool
Create a pool of connections when the app starts. When a query is run, it reuses a connection from the pool

<br/>

## Sequelize

* Requires `mysql2` library installed.

* An ***Object-Relation Mapping*** Library.

* Maps sql queries into javascript object so you need not to directly work with queries instead work with javascript objects.

