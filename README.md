udemy-read
===================

Node.js app that read courses downloaded from udemy and match the description. You need to have a udemy valid account and have bough the course before using this app.

----------


Requirements
-------------
> - **You need to have a valid udemy account and access to the course.**
> - **Need to download the udemy app for android.**
> - **You need an android device.**


Process
-------------
> - Once downloaded and installed the app in your device, you need to go into the course and download all the videos of all the chapters, so you can watch it offline.
> - Finished downloaded all the videos, you need to plug your phone into your computer so you can access the data.
> - Navigate to /Android/data/com.udemy.android/files/udemy-final-downloads/ and copy all the folders into the root of this project, inside a folder named **downloaded-videos**.
> - Login into udemy.com with your credentials and click on the "My Courses button".
> - Before you enter into the course, you need to enable the Developer tools with the tab "Network" enabled.
> - Clic into the course you downloaded with the android app.
> - Search for a api call that has the entire description of the course. The Request URL should look similar to this one: https://www.udemy.com/api-2.0/courses/528422/subscriber-curriculum-items?...
> - Copy the entire response and paste it into the file named **api-course-description-call.json**.
> - Start running the app.
> - If you followed all the steps you should have the course sorted by chapters inside the **COURSE** folder.