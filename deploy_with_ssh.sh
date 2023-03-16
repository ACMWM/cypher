# This deploy script is ideally used when connecting to the 
# lab machine's DEPLOY directory through SSH from your own personal laptop
# If you're on a CS lab machine or you're already logged into one through SSH
# then I recommend using `deploy_locally.sh` instead.
#!/bin/sh
set -e
DEPLOY="/home/cypher"

# Preferably separate commits but this ensures changes are pushed
git commit -a || true
git pull
git push

rsync -rcvz --delete --exclude='.git*' --exclude='.zfs' \
	--exclude='deploy.sh' --exclude='README.md' --exclude='CNAME' \
	./ "joegen@th121-23.cs.wm.edu:$DEPLOY/"
