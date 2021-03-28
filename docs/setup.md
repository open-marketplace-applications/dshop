# Setup a node

Install nodejs
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Setup DB (mongodb)
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl daemon-reload
sudo systemctl start mongod
sudo systemctl status mongod
```

Get and Build Code
```bash
git clone https://github.com/open-marketplace-applications/dshop
npm install
npm run build
```

sudo nano /lib/systemd/system/dshop.service

dshop.service
```bash
[Unit]
Description=DShop
Wants=network-online.target
After=network-online.target

[Service]
LimitNOFILE=4096
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=shimmer
PrivateDevices=yes
PrivateTmp=yes
ProtectSystem=full
ProtectHome=yes

User=DShop
Group=DShop
WorkingDirectory=/var/local/dshop
TimeoutSec=1200
Restart=always
ExecStart=npm start

[Install]
WantedBy=multi-user.target
Alias=dshop.service
```

Control Service
```bash
sudo systemctl daemon-reload
sudo systemctl enable dshop
sudo systemctl start dshop
sudo systemctl status dshop
```