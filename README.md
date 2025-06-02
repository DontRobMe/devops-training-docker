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
