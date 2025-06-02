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

$ touch Dockerfile
$ nano Dockerfile
FROM nginx:latest
COPY ./html/index.html /usr/share/nginx/html/index.html
$ git add Dockerfile
$ git commit -m "Étape 6 : Ajout du Dockerfile pour builder une image nginx personnalisée"

$ docker build -t custom-nginx .
#0 building with "desktop-linux" instance using docker driver

#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 111B 0.0s done
#1 DONE 0.1s

#2 [internal] load metadata for docker.io/library/nginx:latest
#2 DONE 0.1s

#3 [internal] load .dockerignore
#3 transferring context: 2B done
#3 DONE 0.1s

#4 [internal] load build context
#4 transferring context: 82B done
#4 DONE 0.1s

#5 [1/2] FROM docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
#5 resolve docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
#5 ...

#6 [auth] library/nginx:pull token for registry-1.docker.io
#6 DONE 0.0s

#5 [1/2] FROM docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
#5 resolve docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0 1.0s done
#5 DONE 1.2s

#7 [2/2] COPY ./html/index.html /usr/share/nginx/html/index.html
#7 DONE 0.1s

#8 exporting to image
#8 exporting layers
#8 exporting layers 0.2s done
#8 exporting manifest sha256:e89a80f2372464b94fef6f7e309a980681991f2b1dd397cba62782a0e3c9ec51 0.0s done
#8 exporting config sha256:3dafdedfabf505ab27433853d9db722228351d6d1768569c1dcd3ae39ab81007 0.0s done
#8 exporting attestation manifest sha256:45f4f0654ef0f046ef501bc1b98147a390056542e40886de2d80aa4a39984ce0 0.1s done
#8 exporting manifest list sha256:ffc0b57c9599be49365cd2ee917c9b68094e703647fd08512f1b7ea25efee631
#8 exporting manifest list sha256:ffc0b57c9599be49365cd2ee917c9b68094e703647fd08512f1b7ea25efee631 0.0s done
#8 naming to docker.io/library/custom-nginx:latest 0.0s done
#8 unpacking to docker.io/library/custom-nginx:latest 0.0s done
#8 DONE 0.4s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/fo6w2zelehaogakwintkmgbre

$ docker run -d -p 8080:80 --name custom-server custom-nginx
b09ff1232947c6db5e7b9708c601fe5f6d53c07537318ef3dc7dbd9575659ed3
