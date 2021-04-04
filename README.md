<p align="center">
  <br>
  <a href="https://openmarketplace.org/">
     <img
      alt="open marketplace apps"
      src="./logo.svg"
      width="150"
    />
  </a>
</p>

<h1 align="center"><a href="https://openmarketplace.org"> Open Marketplace Apps</a></h1>

<p align="center">Open marketplace apps are decentralized open source apps for smart cities and local communities.</p>

<p align="center">
  <a href="https://discord.gg/XDQQcJC" style="text-decoration:none;"><img src="https://img.shields.io/badge/Discord-9cf.svg?logo=discord" alt="Discord"></a>
</p>

<p align="center">
  <a href="#introduction">Introduction</a> ◈
  <a href="#warning">Warning</a> ◈
  <a href="#usage">Usage</a> ◈
  <a href="#planned-milestones">Planned Milestones</a> ◈  
  <a href="#roadmap">Roadmap</a> ◈
  <a href="#joining-the-discussion">Joining the discussion</a>
</p>

---

# DShop

Dezentral Shop Application

## 🎯 Introduction

This is a monorepo to create a decentralized eCommerce Shop written, for now in Javascript.

> **_Warning:_**

## This application is currently under development and is not yet ready to be used. It is currently feature incomplete and cannot be considered alpha.

## 👆 Usage

### 💫 Clone and Install

When building for the first time, ensure to install dependencies first.

```
git clone https://github.com/open-marketplace-applications/dshop
cd dshop
npm install
```

### 🌱 Development

```
npm run dev
```

### 🚀 Production

```
npm run build
npm start
```

---

## 💬 Joining the discussion

If you want to get involved in discussions about this application, or you're looking for support, go to the #anna channel on [our Discord](https://discord.gg/XDQQcJC).


### environment variables

Example Env File
```bash
MAX_PAYMENT_TIME=4320
JWT_SECRET = "TESTTEST42"
MONGO_URL="mongodb://localhost:27017/dshop-store"
PAYPAL_MODE='sandbox'
PAYPAL_CLIENT_ID=''
PAYPAL_CLIENT_SECRET=''
PORT=4000
MAX_AMOUNT=500
NODE_ENV=dev
WEBHOOK_URL=""
SENDGRID_USERNAME=""
SENDGRID_PASSWORD=""
debug=full
SH_PASSWORD="your-hardcore-stronghold-password"

```
