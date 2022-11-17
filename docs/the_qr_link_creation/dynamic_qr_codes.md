# Dynamic QR codes

The section [The QR Link Creation](the_qr_link_creation.md) explains the steps to create a QR code.  Before start creating a QR code, you need to decide what kind of QR code you want to create: an static QR code or a dynamic one.

![image](https://user-images.githubusercontent.com/54523080/202253533-3e3e8415-ae9a-474e-aa59-a7e9f77290b7.png) 

This section explain some details about the dynamic QR codes.

## Features of Dynamic QR codes

- Dynamic QR codes have a short URL embedded in the code, which can redirect the user to the destination target URL. 

- The target URL can be changed after the QR code has been generated, while the short URL embedded in the code remains the same. So, after editing the short URL, a Dynamic QR Code can lead the user to a different URL destination and consequently to different content or a different function.

- Since the short URL associated to the dynamic QR code never change, the QR code remains invariable, even when you change the target URL. That means you can use the same QR code to lead the user to a different content. So you can save materials in those cases the QR codes are already printed, you just need to edit the QR code and reuse the printed materials. 

- The dynamic QR code is generated from a short URL, so the QR code is less dense than an static QR code and consequently easier to read.

- Some types of QR code lead the user to a microsite with specific information according to the type of QR code. The information shown in the microsite can be modified anytime you need.

## Types of Dynamic QR codes

A QR code contains information such as an URL or an string of characters. Depending on the structure of that information, the QR code may lead the user to open a webpage in a browser, to send an SMS or a whatsapp message, etc. 

The table below shows the types of Dynamic QR codes you can create by using The QR Link.

| QR code Type    | Purpose                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Website         | Open a webpage                                                                                                                                                                                                     |
| Donation        | Lead the user to a microsite that requests for a contribution. The user select how much to donate and after pressing the Donate button he/she will be redirected to a checkout page.                               |
| VCard Plus      | Lead the user to a microsite where the contact information is shown. The user can add a contact to his/her device but some information in the microsite is not available to be added as a cellphone contact field. |
| Business        | Lead the user to a microsite where a business information is shown.                                                                                                                                                |
| Social Networks | Lead the user to a microsite where your social links are shown.                                                                                                                                                    |
| Link-in-Bio     | Lead the user to a microsite that shows your social links as well as additional customized links to your website, your blog, your youtube channel, etc.                                                            |
| Coupon          | Lead the user to a microsite where a sales promotion is shown. The coupon code can be used to get a discount when buying in an online or a physical store.                                                         |
| PDF file        | Lead the user to a microsite where a PDF file is shown.                                                                                                                                                            |
| Audio File      | Lead the user to a microsite where an audio file is shown.                                                                                                                                                         |
| Gallery         | Lead the user to a microsite where one or more image files are shown.                                                                                                                                              |
| Video file      | Lead the user to a microsite where one or more video files are shown.                                                                                                                                              |
| Facebook        | Share an URL in Facebook                                                                                                                                                                                           |
| Whatsapp        | Send a whatsapp message                                                                                                                                                                                            |
| Twitter         | Share a tweet in Twitter                                                                                                                                                                                           |

The content of the QR code depends on the type of QR you want to create. To know what information you need to specify for every type of QR code, you should read below.

#### Website

![image](https://user-images.githubusercontent.com/54523080/202310402-3e3603ac-c020-4ada-994c-cf1276cb194c.png)

After selecting the type Website you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Website: the website URL

Both values are required.

The icon below the logout button let you know you're creating a dynamic QR code.

![image](https://user-images.githubusercontent.com/54523080/195449115-4536c546-888e-44fb-9823-21e0797e52b5.png)

#### Vcard Plus

![image](https://user-images.githubusercontent.com/54523080/202310465-0406aacd-7ec5-420b-85f2-0f62dbf668ff.png)

After selecting the type VCard Plus you need to enter a value for every field related to the contact. You should notice all the info will be shown in a microsite.

- The Design section allow to customize the microsite appearance

- The section Social Information allows to specify the links to social networks (not available in an Static QR code of type VCard)

The QR name and the First name are required.

The design section allows you to customize the microsite theme, i.e., its primary and secondary colors, as well as to upload a background image and a main image. The picture below shows the design section. You can check the location of both pictures in the example of a microsite that is shown next.

![image](https://user-images.githubusercontent.com/54523080/199366682-04f98098-03d0-413c-a46d-3a31b9a208c6.png)

After uploading the background and main images some buttons are shown in order to facilitate the images management:

- The preview button allows you to view the image

- The remove button can be used to delete the current image

![image](https://user-images.githubusercontent.com/54523080/199384289-d233b5d6-14a5-4984-a85c-dd32f307b92a.png)

 In the case of the main image, an additional button is shown:

- This button allows you to select a shape for the main image.
  
  ![image](https://user-images.githubusercontent.com/54523080/199387149-da297266-0f2d-499e-979b-9d25e680bb37.png)

Since a QR of type VCard Plus leads the user to a microsite where the contact information is shown, it allows to specify  some etra information if we compare it with the Static QR of type VCard, for example the social network links.

By clicking every social network you want to add to the contact information, you will be able to enter the contact username on each one. The social network component has the same behavior on every type of QR that contains social network information.

![image](https://user-images.githubusercontent.com/54523080/199388852-37a57bb4-6e9e-49db-96dc-6a3d16e5d5af.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code. The share button allows you to share the microsite URL. The Share button is present in every microsite regardless its type.

![01 Vcard Plus](https://user-images.githubusercontent.com/54523080/202066112-785c4674-692b-49ba-bc94-bb0b8d40a56d.png)

#### Business

![image](https://user-images.githubusercontent.com/54523080/202310540-c3e55322-7fcd-479e-a2ac-742c58641fd5.png)

After selecting the type Business you need to enter a value for every field related to the business. You should notice all the info will be shown in a microsite.

The QR name and the Company name are required.

![image](https://user-images.githubusercontent.com/54523080/199402478-3d41c548-b46b-4728-9955-32286aaa2d9f.png)

The Option button section allows to cutomize an optional button to be included in the microsite, so you need to enter the button text and the URL associated to the button.

![image](https://user-images.githubusercontent.com/54523080/195452990-8794eda1-05cd-40b7-81ce-ab540116cdc7.png)

The Opening time allows to set the service time for every weekday

![image](https://user-images.githubusercontent.com/54523080/195453332-30aad0b7-316d-46c9-8e18-a7f53474b268.png)

The Business Easiness section allows to set the business available facilities 

![image](https://user-images.githubusercontent.com/54523080/195453651-10aa4986-f2af-42e1-894e-29e41208b0f6.png)

The Social Information section allows to specify the links to social networks

![image](https://user-images.githubusercontent.com/54523080/195453790-b1a82d24-48f5-487e-baf3-c1c8fbcecaf5.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code.

![02 Business](https://user-images.githubusercontent.com/54523080/202066121-fd15bcef-aad4-4dce-95a8-0b1e80e03a0f.png)

#### Donation

![image](https://user-images.githubusercontent.com/54523080/202315732-d235bc93-df60-432d-8648-9691517f7f2c.png)

After selecting the type Donation you need to enter the information related to the donation. You should notice the donation info will be shown in a microsite.

The QR name, the name of the person who gets the donation, the message and the donation price are required. The button text is optional, you can leave it blank and it will take the default value: Donate. The website URL for giving thanks is also optional, in case of specifying a URL, the supporter will be redirected to that URL after confirming the donation but can leave it blank and the user will be redirected to a default thank you page.

![image](https://user-images.githubusercontent.com/54523080/201196281-078211b8-0b64-4dc7-b43e-09749e990731.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code and an example of the default thank you page.

![10 Donation](https://user-images.githubusercontent.com/54523080/202066283-b5900938-b014-4cfa-8228-49e5dfee6fda.png)

#### Social Networks

![image](https://user-images.githubusercontent.com/54523080/202310628-34d3a7c6-51cf-4fb4-a6f8-62784aa441ab.png)

After selecting the type Social Networks you need to enter the value related to the social network you want to add, usually a username. You should notice all the info will be shown in a microsite.

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

The QR name and at least one social network are required.

![image](https://user-images.githubusercontent.com/54523080/199408848-13f29104-8968-4dec-9fe5-e64c71f3ea32.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![03 Social networks](https://user-images.githubusercontent.com/54523080/202066210-143533ce-9a5b-400c-b146-38379aa98c91.png)

#### Link-in-Bio

![image](https://user-images.githubusercontent.com/54523080/202315621-0c5cd486-01eb-4ec9-bcb6-25d74efad1af.png)

After selecting the type Links you need to enter the value related to the social network links you want to add, usually a username, as well as one or more customized links for sharing your personal URLs such as you blog, your personal website, etc. You should notice all the info will be shown in a microsite.

Title: Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

The QR name, the title and at least one customized link are required.



![image](https://user-images.githubusercontent.com/54523080/199410866-feac0063-b883-4398-be6d-6b6320d144c6.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code.

![04 Links](https://user-images.githubusercontent.com/54523080/202066237-06066e7a-a431-464b-b4bf-0c650a3dc4e9.png)

#### Coupon

![image](https://user-images.githubusercontent.com/54523080/202315685-43b61421-e054-4faa-a0fb-e387d4360cee.png)

After selecting the type Coupon you need to enter a value for every field related to the promotion. You should notice all the info will be shown in a microsite.

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Company: the company name

- Title: the promotion title

- Description: the promotion description

- Badge: The discount

- Button Text: The text you want to appear in the button that links the online store

- Link: The URL to the online store

- Coupon code: The code to be used for getting a discount

- Terms and conditions: The promotion conditions

- Address: the address of a physical store if it exists.

The QR name, Title, Button Text, Link, and Coupon code are required.

![image](https://user-images.githubusercontent.com/54523080/199412146-8a09987a-ac99-43a4-b69c-bcfca4b853bd.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![05 Coupon](https://user-images.githubusercontent.com/54523080/202066246-bbcbb774-bee6-4d8a-b6be-cf8b9c27c6b5.png)

#### PDF file

![image](https://user-images.githubusercontent.com/54523080/202315964-da55b735-e39f-4869-86cb-36f30add626b.png)

After selecting the type PDF file you need to enter the info related to the PDF file. You should notice the pdf file will be shown in a microsite.

The QR name and the pdf file are required. You can upload 1 PDF file of size 200 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/199413948-7137cedf-8293-4fe9-9383-c3a3ae1b3cf0.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![09 PDF](https://user-images.githubusercontent.com/54523080/202066271-1f3ac5fc-bf9a-4807-b174-6f5fdd40734c.png)

#### Audio file

![image](https://user-images.githubusercontent.com/54523080/202316012-1a04817e-0e70-46b1-bbd2-96aad5d403ab.png)

After selecting the type Audio file you need to enter the info related to the Audio file. You should notice the audio file will be shown in a microsite.

The QR name and the audio file are required. You can upload 1 audio file of size 30 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/199418854-1ece8b5c-84ab-46c8-8989-3c0798d0f417.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![06 Audio](https://user-images.githubusercontent.com/54523080/202066252-d5bcd5cf-0374-4985-ae56-959beb9d5a11.png)

#### Gallery

![image](https://user-images.githubusercontent.com/54523080/202316258-eee70661-7385-41c9-8705-0e64224d96e2.png)

After selecting the type Gallery  you need to enter the info related to the Image files. You should notice the image files will be shown in a microsite.

The QR name and at least one image file are required. You can upload up to 25 files of size 20 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/199419683-fd211a0d-4a06-4aa9-b3f6-d2a9c04950ba.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![08 Gallery](https://user-images.githubusercontent.com/54523080/202066267-c89e0a94-fc24-48f9-b2c1-f4cdf2b968f2.png)

#### Video file

![image](https://user-images.githubusercontent.com/54523080/202316359-47036b4d-fa9f-40ae-921d-a0e0fd97b07f.png)

After selecting the type Video file you need to enter the info related to the video files. You should notice the video files will be shown in a microsite.

The QR name and at least one video file are required. You can upload up to 4 files of size 300 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional):  Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/199423871-df4999c7-2b9e-4a0f-861d-5996eb8f4a39.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code. The first one shows only one video. The other one contains three videos.

![07 Video](https://user-images.githubusercontent.com/54523080/202066265-8b58b622-16fa-444e-b35f-7c1f9d5c294a.png)

#### Twitter

![image](https://user-images.githubusercontent.com/54523080/202315792-4c457390-0ce4-43d6-9282-37250598ad18.png)

After selecting the type Twitter you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Text: the tweet content.
- Mention: a username to be targeted in your tweet (without the @ symbol)
- Hashtags: a comma separated list of hashtags to be included in the tweet (without the # symbol)
- URL: an URL to be shared in the tweet

All the elements are grouped in the tweet in the order: Text, URL, Hashtags, Mention. The max tweet size is 280 characters.

The QR name field is required. It's also mandatory to enter a value for at least one field from the list: Text, Mention, Hashtag or URL.

![image](https://user-images.githubusercontent.com/54523080/195456721-b03938d4-7ea9-4e44-a4c9-889406feb87d.png)

#### Whatsapp

![image](https://user-images.githubusercontent.com/54523080/202315853-d910f4b3-ed06-4f94-816e-1b758d8d30da.png)

After selecting the type Whatsapp you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- The cellphone number registered in whatsapp, including the contry code, for example +1.
- Message: The whatsapp message (may include emojis)

The three values are required.

![image](https://user-images.githubusercontent.com/54523080/195456821-07e59c17-2c90-49b1-8a10-f80d0e444132.png)

#### Facebook

![image](https://user-images.githubusercontent.com/54523080/202315889-d4f2ed5d-7dfa-4235-9c1c-df2d5e39313a.png)

After selecting the type Facebook you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.
- Post: A URL you want to share in facebook.

Both values are required.

![image](https://user-images.githubusercontent.com/54523080/195456862-42c3b357-32ba-401d-9674-7ad0e1e5b1ea.png)
