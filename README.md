$ git branch image_nginx

$ git checkout image_nginx

$ docker pull nginx

$ git add .

$ git commit -m "Étape 1 : Récupération de l'image nginx depuis Docker Hub"
$ git push origin image_nginx

$ docker images
REPOSITORY                   TAG       IMAGE ID       CREATED        SIZE
nginx                        latest    fb39280b7b9e   6 weeks ago    279MB

$ mkdir -p html
$ echo "Hello World" > html/index.html
$ cat index.html
Hello World

$ git add html/index.html
$ git commit -m "Étape 2 : Création du fichier index.html"

$ docker run -d -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html --name webserver nginx
aebcab675071af6ccde4981a6c04acc450337000412ab99839998ff215a98bee
$ git commit --allow-empty -m "Étape 3 : Lancement du container avec montage du fichier HTML"

$ docker stop webserver
$ docker rm webserver
webserver
webserver
$ git commit --allow-empty -m "Étape 4 : Suppression du container"


$ docker run -d -p 8080:80 --name webserver2 nginx
$ docker cp html/index.html webserver2:/usr/share/nginx/html/index.html
57fd7ddd4f51414ea10035cfb8204799ec9ff20b057dec960ae4b52274f34eb0
$ git commit --allow-empty -m "Étape 5 : Relance du container sans volume, utilisation de docker cp"
