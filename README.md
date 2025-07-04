# -EpiCircle-Scrap-Pickup-React-Native-Project

# ♻️ EpiCircle Scrap Pickup – React Native Project

This project is part of the EpiCircle React Native Internship Assessment. It consists of **two apps**:

1. **Customer App** – Used by customers to schedule scrap pickups and manage orders.
2. **Partner App** – Used by partners to accept pickups, add scrap item details, and mark pickups as completed.

---

## 📱 Tech Stack

- [x] React Native with **Expo**
- [x] React Navigation (Stack Navigator)
- [x] **Context API** for local state management
- [x] AsyncStorage (for simulating login persistence)
- [x] DateTime Picker
- [x] No backend (mock integration using state)

---

## 🧍‍♂️ Customer App Features

- 📱 **Login + OTP** (mock OTP: `123456`)
- 📦 **Schedule Pickup** (date, time, address, map link)
- 📋 **Order History** (view all pickups)
- ✅ **Approve Pickup** (after partner completes it)

---

## 👷 Partner App Features

- 📱 **Login + OTP**
- 📋 **View Pending Pickups**
- ✅ **Accept Pickup**
- ➕ **Add Scrap Items** (type, weight, notes)
- 📨 **Submit Pickup** (moves to "Pending for Approval" status)

---

## 📂 Folder Structure
📦 EpiCircle-ReactNative
┣ 📁 CustomerApp
┃ ┣ 📁 screens/
┃ ┣ 📁 context/
┃ ┗ App.js
┣ 📁 PartnerApp
┃ ┣ 📁 screens/
┃ ┣ 📁 context/
┃ ┗ App.js

   
cd CustomerApp # or PartnerApp
npm install
npm start
Scan QR code with Expo Go app on your phone.

🔐 Mock Login Info
Phone: Any 10-digit number (e.g., 9876543210)

OTP: 123456

📸 Screenshots
Customer
![Screenshot_2025-07-04-13-42-12-75_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/e5d0904e-5d08-4d86-8d20-ff55332724a6)

![Screenshot_2025-07-04-13-42-28-36_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/d8ab7181-46b3-4a09-8394-a26c1b81a6cf)

![Screenshot_2025-07-04-13-42-33-81_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/8065cc41-b90d-4d3d-8e07-8270995e7090)

![Screenshot_2025-07-04-13-42-40-38_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/90b8c47e-24a5-4e9b-856c-5266c1bd35c6)

![Screenshot_2025-07-04-13-43-53-28_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/91773c28-cced-47b8-817b-e63853db4867)

Partner
![Screenshot_2025-07-04-13-44-09-09_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/94518814-9989-4ed3-a918-9546381e0fe4)

![Screenshot_2025-07-04-13-44-26-04_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/8dc1f8e9-ba55-4f73-84d6-a5fd56184e84)

![Screenshot_2025-07-04-13-44-29-22_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/53f69ce4-efff-4dc4-a1fa-5b98d022f15c)

![Screenshot_2025-07-04-13-44-33-95_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/19955375-9204-40fd-84d4-be20b1df78b9)





