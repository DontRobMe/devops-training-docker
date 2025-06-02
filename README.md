1. deja installer

2. fait

3. a
    - $ git branch image_nginx
    - $ git checkout image_nginx
    - $ docker pull nginx
    - $ git add .
    - $ git commit -m "Étape 3.a : Récupération de l'image nginx depuis Docker Hub"
    - $ git push origin image_nginx

3. b
    - $ docker images
    - REPOSITORY                   TAG       IMAGE ID       CREATED        SIZE
    - nginx                        latest    fb39280b7b9e   6 weeks ago    279MB

3. c
    - $ mkdir -p html
    - $ echo "Hello World" > html/index.html
    - $ cat index.html
    - Hello World
    - $ git add html/index.html
    - $ git commit -m "Étape 3.b.c : Création du fichier index.html"

3. d
    - $ docker run -d -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html --name webserver nginx
    - aebcab675071af6ccde4981a6c04acc450337000412ab99839998ff215a98bee
    - $ git commit --allow-empty -m "Étape 3.d : Lancement du container avec montage du fichier HTML"

3. e
    - $ docker stop webserver
    - $ docker rm webserver
    - webserver
    - webserver
    - $ git commit --allow-empty -m "Étape 3.e : Suppression du container"

3. f
    - $ docker run -d -p 8080:80 --name webserver2 nginx
    - $ docker cp html/index.html webserver2:/usr/share/nginx/html/index.html
    - 57fd7ddd4f51414ea10035cfb8204799ec9ff20b057dec960ae4b52274f34eb0
    - $ git commit --allow-empty -m "Étape 3.f : Relance du container sans volume, utilisation de docker cp"

4. a
    - $ touch Dockerfile
    - $ nano Dockerfile
    - FROM nginx:latest
    - COPY ./html/index.html /usr/share/nginx/html/index.html
    - $ git add Dockerfile
    - $ git commit -m "Étape 4.a : Ajout du Dockerfile pour builder une image nginx personnalisée"

4. b
    - $ docker build -t custom-nginx .
    - #0 building with "desktop-linux" instance using docker driver

    - #1 [internal] load build definition from Dockerfile
    - #1 transferring dockerfile: 111B 0.0s done
    - #1 DONE 0.1s

    - #2 [internal] load metadata for docker.io/library/nginx:latest
    - #2 DONE 0.1s

    - #3 [internal] load .dockerignore
    - #3 transferring context: 2B done
    - #3 DONE 0.1s

    - #4 [internal] load build context
    - #4 transferring context: 82B done
    - #4 DONE 0.1s

    - #5 [1/2] FROM docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
    - #5 resolve docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
    - #5 ...

    - #6 [auth] library/nginx:pull token for registry-1.docker.io
    - #6 DONE 0.0s

    - #5 [1/2] FROM docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0
    - #5 resolve docker.io/library/nginx:latest@sha256:fb39280b7b9eba5727c884a3c7810002e69e8f961cc373b89c92f14961d903a0 1.0s done
    - #5 DONE 1.2s

    - #7 [2/2] COPY ./html/index.html /usr/share/nginx/html/index.html
    - #7 DONE 0.1s

    - #8 exporting to image
    - #8 exporting layers
    - #8 exporting layers 0.2s done
    - #8 exporting manifest sha256:e89a80f2372464b94fef6f7e309a980681991f2b1dd397cba62782a0e3c9ec51 0.0s done
    - #8 exporting config sha256:3dafdedfabf505ab27433853d9db722228351d6d1768569c1dcd3ae39ab81007 0.0s done
    - #8 exporting attestation manifest sha256:45f4f0654ef0f046ef501bc1b98147a390056542e40886de2d80aa4a39984ce0 0.1s done
    - #8 exporting manifest list sha256:ffc0b57c9599be49365cd2ee917c9b68094e703647fd08512f1b7ea25efee631
    - #8 exporting manifest list sha256:ffc0b57c9599be49365cd2ee917c9b68094e703647fd08512f1b7ea25efee631 0.0s done
    - #8 naming to docker.io/library/custom-nginx:latest 0.0s done
    - #8 unpacking to docker.io/library/custom-nginx:latest 0.0s done
    - #8 DONE 0.4s

    - View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/fo6w2zelehaogakwintkmgbre

    - $ docker run -d -p 8080:80 --name custom-server custom-nginx
    - b09ff1232947c6db5e7b9708c601fe5f6d53c07537318ef3dc7dbd9575659ed3

4. C


5. a
    - $ docker pull mysql
    - docker pull phpmyadmin/phpmyadmin
    - Using default tag: latest
    - latest: Pulling from library/mysql
    - 7488ffd7127f: Pulling fs layer
    - d23320eed97a: Pulling fs layer
    - 8a50ff4ab30c: Pulling fs layer
    - 7074f55c9a02: Pulling fs layer
    - 4bd1fb59dd90: Pulling fs layer
    - 9845df06f911: Pulling fs layer
    - 72ac912b8a2e: Pulling fs layer
    - 5056ce4ab875: Pulling fs layer
    - b097427f1ebe: Pulling fs layer
    - b288ccce2510: Pulling fs layer
    - 7488ffd7127f: Download complete
    - 4bd1fb59dd90: Download complete
    - 5056ce4ab875: Download complete
    - 72ac912b8a2e: Download complete
    - b097427f1ebe: Download complete
    - d23320eed97a: Download complete
    - 7074f55c9a02: Download complete
    - 9845df06f911: Download complete
    - b288ccce2510: Download complete
    - 9845df06f911: Pull complete
    - 4bd1fb59dd90: Pull complete
    - d23320eed97a: Pull complete
    - 72ac912b8a2e: Pull complete
    - b097427f1ebe: Pull complete
    - 7074f55c9a02: Pull complete
    - 7488ffd7127f: Pull complete
    - b288ccce2510: Pull complete
    - 8a50ff4ab30c: Download complete
    - 5056ce4ab875: Pull complete
    - 8a50ff4ab30c: Pull complete
    - Digest: sha256:04768cb63395f56140b4e92cad7c8d9f48dfa181075316e955da75aadca8a7cd
    - Status: Downloaded newer image for mysql:latest
    - docker.io/library/mysql:latest
    - Using default tag: latest
    - latest: Pulling from phpmyadmin/phpmyadmin
    - 2ee0fe041682: Pulling fs layer
    - 3a28acedadf8: Pulling fs layer
    - b3207e60ff9a: Pulling fs layer
    - 11d17388a3b8: Pulling fs layer
    - 0814cbbf72a2: Pulling fs layer
    - ad5f2fca9132: Pulling fs layer
    - 88324ccb20a1: Pulling fs layer
    - 3ef8d0774deb: Pulling fs layer
    - 2ab7ef40feaf: Pulling fs layer
    - 673faad72ba8: Pulling fs layer
    - 9df2a6231627: Pulling fs layer
    - a5c74661bb9e: Pulling fs layer
    - af302e5c37e9: Pulling fs layer
    - 1cf5cbfd971f: Pulling fs layer
    - 4f4fb700ef54: Pulling fs layer
    - 7755344c0dda: Pulling fs layer
    - e92d8472eb26: Pulling fs layer
    - b0f9dd503cef: Pulling fs layer
    - 71a74ed03dab: Pulling fs layer
    - d18c9f420b35: Pulling fs layer
    - 4f4fb700ef54: Already exists
    - 3a28acedadf8: Download complete
    - 2ee0fe041682: Download complete
    - b3207e60ff9a: Download complete
    - 2ab7ef40feaf: Download complete
    - b0f9dd503cef: Download complete
    - 7755344c0dda: Download complete
    - d18c9f420b35: Download complete
    - ad5f2fca9132: Download complete
    - 1cf5cbfd971f: Download complete
    - 71a74ed03dab: Download complete
    - 673faad72ba8: Download complete
    - 11d17388a3b8: Download complete
    - 9df2a6231627: Download complete
    - e92d8472eb26: Download complete
    - a5c74661bb9e: Download complete
    - 0814cbbf72a2: Download complete
    - 88324ccb20a1: Download complete
    - af302e5c37e9: Download complete
    - af302e5c37e9: Pull complete
    - 71a74ed03dab: Pull complete
    - 3ef8d0774deb: Download complete
    - 11d17388a3b8: Pull complete
    - 3ef8d0774deb: Pull complete
    - 0814cbbf72a2: Pull complete
    - 3a28acedadf8: Pull complete
    - 2ab7ef40feaf: Pull complete
    - ad5f2fca9132: Pull complete
    - 88324ccb20a1: Pull complete
    - b3207e60ff9a: Pull complete
    - d18c9f420b35: Pull complete
    - 673faad72ba8: Pull complete
    - 9df2a6231627: Pull complete
    - 4f4fb700ef54: Pull complete
    - 1cf5cbfd971f: Pull complete
    - a5c74661bb9e: Pull complete
    - e92d8472eb26: Pull complete
    - 2ee0fe041682: Pull complete
    - b0f9dd503cef: Pull complete
    - 7755344c0dda: Pull complete
    - Digest: sha256:95e01f723b5e55fabf16d0473f1df2354c4c6352b35902b51d6a6245e074aee4
    - Status: Downloaded newer image for phpmyadmin/phpmyadmin:latest
    - docker.io/phpmyadmin/phpmyadmin:latest
    - $ git commit --allow-empty -m "Étape 5.a : Pull des images mysql et phpmyadmin depuis Docker Hub"

5. b
    - $ docker network create mynet
    - f5decd14bf66926131ba3c94834ac4b31a6b40285f931111ec7da1846d62ba83
    - $ git commit --allow-empty -m "Étape 5.b : Création du réseau Docker mynet"

Lancer le conteneur MySQL
    - $ docker run -d \
    - $ --name mysql-server \
    - $ --network mynet \
    - $ -e MYSQL_ROOT_PASSWORD=rootpass \
    - $ -e MYSQL_DATABASE=testdb \
    - $ -e MYSQL_USER=testuser \
    - $ -e MYSQL_PASSWORD=testpass \
    - $ mysql 
    - 5ef5dd7b498c770223f9a221e0a087b999fe5b1823e1ba11ba13ef82a6a9e459

Lancer le conteneur phpMyAdmin
    - $ docker run -d \
    - $ --name myadmin \
    - $ --network mynet \
    - $ -e PMA_HOST=mysql-server \
    - $ -p 8081:80 \
    - $ phpmyadmin/phpmyadmin 
    - 791fcf835009966f81074e832bb2aef187c500c084a97f3e51a87f64878d1225
      
![img_1.png](NewTablePhpMyAdmin.png)
    
    - $ git commit --allow-empty -m "Étape 10 : Lancement de MySQL et phpMyAdmin via Docker avec réseau personnalisé"

6. a

