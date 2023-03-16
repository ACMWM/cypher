# This script only works when you'ved pulled the `cypher` git directory
# up on a CS lab machine directly and now you're just moving this
# cypher directory into the DEPLOY directory

#!/bin/sh
set -e
DEPLOY="/home/cypher"

# Preferably separate commits but this ensures changes are pushed
git commit -a || true
git pull
git push

rsync -rcvz --delete --exclude='.git*' --exclude='.zfs' \
	--exclude='deploy.sh' --exclude='README.md' --exclude='CNAME' \
	./ "$DEPLOY/"
