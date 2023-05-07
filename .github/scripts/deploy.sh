#! /bin/bash

set -eux

git config git-ftp.url ${FTP_URL}
git config git-ftp.user ${FTP_USER}
git config git-ftp.syncroot "."

git ftp catchup -vv --key ${PRIVATE_KEY_PATH}
git ftp push -a --key ${PRIVATE_KEY_PATH}
