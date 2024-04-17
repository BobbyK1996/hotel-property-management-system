# React Hotel Property Management System

This is a Hotel PMS for a small, boutique Bed & Breakfast with several cabins.

## The general requirements are:

- They need a custom-built application to manage everything about the hotel, including bookings, cabins and guests.
- This will be used as an internal application and will be used to check in guests as they arrive
- We will need to build the API, as there is currently nothing.
- Further down the road, a customer-facing website will also be needed, where customers can book stays using the same API.

## A more detailed account of the requirements are as follows:

### Authentication

- Users of the app are hotel employees. They need to be logged into the application to perform tasks.
- New users can only be signed up within applications, meaning there will be no client side registering.
- Users should be able to upload an avatar and edit their name and password

### Cabins

- App needs a table view with all cabins, showing cabin photo, name, capacity, price, current discount, etc.
- Users should be able to update or delete cabins, as well as create new ones with supplementary media.

### Bookings

- App needs a table view will all bookings, showing arrival and departure dates, status and paid amount, as well as cabin and guest data.
- Booking status can be "unconfirmed", "checked in" or "checked out". We should be able to filter a table to guests based in this.
- Booking data also includes: no. of guests, no. of nights, guest notes, if breakfast is included and how much was paid.

### Check in/out

- Users should be able to delete, check in or check out a booking when guests arrive
- Booking may not have been paid yet on guest arrival so, on check in, users need to accept payment outside of the app and then log it inside of the application.
- Guests will be able to add the option of breakfast at check-in

### Guest features

- Guest data should contain a full name, email, national ID, nationality and a country flag. Of course, several of these would not be used in a real-world setting, but these fields can be changed after initial set up.

### Dashboard

- Initial page of the app should be a dashboard, displaying important information dating back the last 7, 30 and/or 90 days. This dashboard will include:
  - A list of guests checking in and out on the day. Tasks for these guests should performable on the dashboard.
  - Statistics regarding recent bookings, sales, check-ins and occupancy rate.
  - Charts showing daily hotel sales, separated by total sales and extras. Current planned extras include breakfast, but can be expanded.
  - Charts showing statistics regarding stay duration.

### User settings

- Users will be able to define application-wide settings, such as breakfast price, min and max nights, max guests, etc.
- App will include a dark mode, because we're civilised people.
