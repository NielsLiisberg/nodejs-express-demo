# IBM i microservice demo using node.js, Express and Db2
This microservice example are using Db2, and gives the simple starting point for building microservices fast and easy:

# Setup the environment

I always use bash as my default shell. You can set that once and for all from ACS Run SQL script with: 
```
CALL QSYS2.SET_PASE_SHELL_INFO('\*CURRENT', '/QOpenSys/pkgs/bin/bash');   
```

On IBM i you will need the open source in you path (and a nice prompt). So if you don't have a .profile yet, then:
```
ssh myibmi
echo 'PATH=/QOpenSys/pkgs/bin:$PATH' >> $HOME/.profile
echo 'PS1="\h-\$PWD:\n"' >> $HOME/.profile
exit 
```

For the shell you can aslo Click SSH Terminal in ACS or use a terminal like putty 

(or you can even use call qp2term – but I suggest that you get use to ssh)

From the terminal we need to install some open source tooling:

```
ssh myibmi
yum install git
```

This demo also requires nodejs12
```
yum install nodejs12
```
You are about to test if the environment works with the folloing application. Just read it as see how easy it is:  

```

```
This application is in the git repo - so let's clone it:
```
mkdir /prj
cd  /prj
git -c http.sslVerify=false clone git://github.com/NielsLiisberg/nodejs-express-demo.git
```
Now it time to install the projects dependencies:

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
http://myibmi:8899
```

... It's that easy
