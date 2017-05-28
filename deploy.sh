#!/bin/bash
echo "Verifier App Dev Deploy"
sudo rm -rf /var/www/html/front/verifier-app
sudo mv $BUILD_SOURCESDIRECTORY/build /var/www/html/front/verifier-app
