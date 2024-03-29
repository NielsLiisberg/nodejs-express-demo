# IBM i microservice demo using node.js, Express and Db2
This microservice example are using Db2, and gives the simple starting point for building microservices fast and easy.

Here I am using the **idb-pconnector** for simplicity. However, I suggest you are looking into using the **ODBC** but that is a little more complicated to set up.  

# Setup the environment

I always use bash as my default shell. You can set that once and for all from ACS Run SQL script with: 
```
CALL QSYS2.SET_PASE_SHELL_INFO('*CURRENT', '/QOpenSys/pkgs/bin/bash');   
```

On IBM i you will need the open source in you path (and a nice prompt). So if you don't have a .profile yet, then:
```
ssh MY_IBM_I
echo 'PATH=/QOpenSys/pkgs/bin:$PATH' >> $HOME/.profile
echo 'PS1="\h-\$PWD:\n"' >> $HOME/.profile
exit 
```

For the shell you can also Click SSH Terminal in ACS or use a terminal like putty 

(or you can even use call qp2term – but I suggest that you get use to ssh)

From the terminal we need to install some open source tooling:

```
ssh MY_IBM_I
yum install git
```

This demo also requires (at least) nodejs12
```
yum install nodejs12
```
This application is in the git repo - so let's clone it:
```
mkdir /prj
cd  /prj
git -c http.sslVerify=false clone https://github.com/NielsLiisberg/nodejs-express-demo.git
```
Now it time to install the projects dependencies in the project folder:

```
cd /prj/nodejs-express-demo
npm install
```

We are ready for next step: Install  the database:

```
Open ACS
Click Run SQL script
Click file
Click open 
open IFS Stream
Enter the name: /prj/nodejs-express-demo/demo.sql
```

(or you can copy/paste  **demo.sql** file into you ACS Run SQL script editor)

Run each step in the script one-by-one. When the database is ready, jump back to your ssh session:

Now you can try the Db2 microservice 
```
node demo.js
```
http://MY_IBM_I:8899/list_users_by_view

... It's that easy
