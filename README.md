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
![Screenshot_2025-07-04-13-30-51-92_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/7d0e00f7-6044-4f8b-9f5a-a909c30b270e)

![Screenshot_2025-07-04-13-29-56-83_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/53d00e72-fc0a-45bf-a88a-722741aeac80)

![Screenshot_2025-07-04-13-30-38-31_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/95ab1dbf-e84e-4078-b704-efedc8db1df0)

![Screenshot_2025-07-04-13-30-42-35_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/a67b93f1-93f6-49bd-9d69-e6e31c23101a)

![Screenshot_2025-07-04-13-30-45-97_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/4ca07d2c-c056-4c25-ae48-265c31d8aa70)

Partner
![Screenshot_2025-07-04-13-29-50-56_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/d87d25f4-0a69-462e-8f62-99f7d8f6f85c)

![Screenshot_2025-07-04-13-29-56-83_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/a57b6fc6-5fcf-42cd-9f58-31bf16c47585)

![Screenshot_2025-07-04-13-30-00-78_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/5fd48b53-7a1f-4995-b850-7cf96f76717a)

![Screenshot_2025-07-04-13-30-04-46_f73b71075b1de7323614b647fe394240](https://github.com/user-attachments/assets/753d9233-023d-448e-ac47-a92be5ef6e51)







