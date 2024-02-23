# DiscordJS - STB Uptime

## Instalasi

Gunakan perintah pada debian/armbian untuk menginstall DiscordJS STB Uptime

1. Install NodeJS

```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | bash - &&\
apt-get install -y nodejs
```

2. Install PM2

```bash
npm i -g pm2
```

3. Download source code

```bash
git clone https://github.com/dhikaid/stb-discordjs-uptime.git
```

4. Masuk kedalam folder

```bash
cd stb-discordjs-uptime
```

5. Ubah env.example menjadi .env

```bash
cp env.example .env
```

6. Masukan bot token ([lihat token bot disini](https://discord.com/developers/applications)) ke .env

```bash
nano .env
```

## Usage

```bash
npm i
pm2 --start index.js --name "DiscordUptime"
pm2 startup
pm2 save
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
