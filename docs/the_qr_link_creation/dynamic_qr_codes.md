# Dynamic QR codes

The section [The QR Link Creation](the_qr_link_creation.md) explains the steps to create a QR code.  Before start creating a QR code, you need to decide what kind of QR code you want to create: an static QR code or a dynamic one.

![image](https://user-images.githubusercontent.com/54523080/207507368-66693e6e-6e40-4b9b-abee-da78ecb02d60.png) 

This section explain some details about the dynamic QR codes.

## Features of Dynamic QR codes

- Dynamic QR codes have a short URL embedded in the code, which can redirect the user to the destination target URL. 

- The target URL can be changed after the QR code has been generated, while the short URL embedded in the code remains the same. So, after editing the short URL, a Dynamic QR Code can lead the user to a different URL destination and consequently to different content or a different function.

- Since the short URL associated to the dynamic QR code never change, the QR code remains invariable, even when you change the target URL. That means you can use the same QR code to lead the user to a different content. So you can save materials in those cases the QR codes are already printed, you just need to edit the QR code and reuse the printed materials. 

- The dynamic QR code is generated from a short URL, so the QR code is less dense than an static QR code and consequently easier to read.

- Most of the types of Dynamic QR codes allows to implicitly create, together with a Short URL, a microsite, in other words, a mobile-friendly landing page to show the information according to the type you choose. The information shown in the microsite can be easily updated. An there's more, there are some analytics & track associated to the microsite, that way you can get statistics about the access to your microsite, such as how many visits have taken place, which devices have been used to access the Short URL, from which locations, etc. So, we prefer to call this kinds of QR codes as QR Links. A QR Link encapsulates not only the QR code but also a Short Link and a microsite with the statistics related to its use.

![image](https://user-images.githubusercontent.com/54523080/207641348-74e25ea1-1014-43a2-99be-a6dce1e0c02d.png)

## Types of  QR Links

A QR Link contains a Short URL embeded. The Short URL may lead the user to a webpage, a payment link or to different kinds of microsites, each of them with an specific purpose. 

The table below shows the types of QR Links you can create by using The QR Link.

| QR Link Type    | Purpose                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Short URL       | Open a webpage                                                                                                                                                                                                     |
| Donation        | Lead the user to a microsite that requests for a contribution. The user select how much to donate and after pressing the Donate button he/she will be redirected to a checkout page.                               |
| vCard Plus      | Lead the user to a microsite where the contact information is shown. The user can add a contact to his/her device but some information in the microsite is not available to be added as a cellphone contact field. |
| Business        | Lead the user to a microsite where a business information is shown.                                                                                                                                                |
| Social Networks | Lead the user to a microsite where your social links are shown.                                                                                                                                                    |
| Link-in-Bio     | Lead the user to a microsite that shows your social links as well as additional customized links to your website, your blog, your youtube channel, etc.                                                            |
| Coupon          | Lead the user to a microsite where a sales promotion is shown. The coupon code can be used to get a discount when buying in an online or a physical store.                                                         |
| PDF file        | Lead the user to a microsite where a PDF file is shown.                                                                                                                                                            |
| Audio File      | Lead the user to a microsite where an audio file is shown.                                                                                                                                                         |
| Gallery         | Lead the user to a microsite where one or more image files are shown.                                                                                                                                              |
| Video file      | Lead the user to a microsite where one or more video files are shown.                                                                                                                                              |
| Pet Tag Id      | Lead the user to a microsite where information about a pet is shown.                                                                                                                                               |
| Fund Me*        | Lead the user to a microsite that requests for a contribution to a fundrising campaign with a description and a predefined goal.                                                                                   |
| Send Me Money*  | Opea a payment link that lead the user to a checkout page.                                                                                                                                                         |

\*  Coming soon. Still on development.

The content of the QR code depends on the type of QR you want to create. To know what information you need to specify for every type of QR code, you should read below.

#### Short URL

![image](https://user-images.githubusercontent.com/54523080/208015677-3df3d8dd-9f51-4613-8d7d-33b89dd241d4.png)

After selecting the type Short URL you need to enter a value for every field:

- QR name: the name you want to use to identify the QR code in the QR codes list.

- Website: the website URL

Both values are required.

The icon below the Next button let you know you're creating a Dynamic QR code.

![image](https://user-images.githubusercontent.com/54523080/208016317-0737b351-93e7-49e3-8202-be69c64b5148.png)

#### vCard Plus

![image](https://user-images.githubusercontent.com/54523080/208206923-8bc5de5c-ddb6-4767-98fb-6b98c8e961d4.png)

After selecting the type vCard Plus you need to enter a value for every field related to the contact. You should notice all the info will be shown in a microsite.

- The Content section let you enter all the data to be  shown in the microsite.

- The Design section allow to customize the microsite appearance

- The section Social Information allows to specify the links to social networks (not available in an Static QR code of type VCard)

The QR name and the First name are required.

A preview in the right side shows in real time not only the information shown in the microsite but also the microsite appearance.

![image](https://user-images.githubusercontent.com/54523080/208207924-5df7d9b8-073e-461d-bcd3-ed8062442472.png)

The design section allows you to customize the microsite theme, i.e., its primary and secondary colors, as well as to upload a background image and a main image. The picture below shows the design section. You can check the location of both pictures in the example of a microsite that is shown next.

![image](https://user-images.githubusercontent.com/54523080/208208133-7506d468-9ec4-47ef-88ec-952c30e6e502.png)

When you upload an image, for example, the banner image, you are able to adjust the image to be used by zooming in and out and draging the image inside the visible area in order to select the section to be cropped and set as image background. To cancel press close, to crop the image and set is as background image press Done.

![image](https://user-images.githubusercontent.com/54523080/208208401-834d6577-a169-4e87-a0b7-7cedd22d77b5.png)

After uploading the background and main images, some buttons are shown in order to facilitate the images management:

- The preview button allows you to view the image

- The remove button can be used to delete the current image

![image](https://user-images.githubusercontent.com/54523080/208209904-3c0e2fcd-d0da-45c1-85a1-3eaab4497e9b.png)

 In the case of the main image, an additional button is shown:

- This button allows you to select a shape for the main image.
  
  ![image](https://user-images.githubusercontent.com/54523080/208210518-0b7a252d-1cc3-4285-88b4-c73526486832.png)

The Background section let you choose between a single color or a gradient. In the case of the gradient you can choose the colors and the gradient direction.

![image](https://user-images.githubusercontent.com/54523080/208210746-1ef7b58c-7adc-4568-92b1-35171e5d1f01.png)

After customizing the microsite theme and images, you can go back to the Content section to continue entering the vCard Plus information.

![image](https://user-images.githubusercontent.com/54523080/208211316-6a826570-304a-421d-9f2f-e5a30f123519.png)

Since a QR of type VCard Plus leads the user to a microsite where the contact information is shown, it allows to specify  some etra information if we compare it with the Static QR of type VCard, for example the social network links.

By clicking every social network you want to add to the contact information, you will be able to enter the contact username on each one. The social network component has the same behavior on every type of QR that contains social network information.

![image](https://user-images.githubusercontent.com/54523080/208212336-7558abc8-877f-4a3b-a5d9-8151bb814456.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code. The share button allows you to share the microsite URL. The Share button is present in every microsite regardless its type.

![image](https://user-images.githubusercontent.com/54523080/208213065-753d71ca-3915-41f3-bfc0-f50a39af97ba.png)

#### Business

![image](https://user-images.githubusercontent.com/54523080/208317455-1f22f856-bf3d-44ca-924a-c8a1f8af497a.png)

After selecting the type Business you need to enter a value for every field related to the business. You should notice all the info will be shown in a microsite.

The QR name and the Company name are required.

![image](https://user-images.githubusercontent.com/54523080/208317567-d029698a-0d68-4b09-9e78-e6584d586f27.png)

The Action button section allows to customize an optional button to be included in the microsite, so you need to enter the button text and the URL associated to the button.

![image](https://user-images.githubusercontent.com/54523080/208317632-765c9a17-a8ad-4eaf-b798-2d5c90ef857d.png)

The Opening time allows to set the service time for every weekday

![image](https://user-images.githubusercontent.com/54523080/208317956-562d4b7c-916f-4a23-affa-7ef6a3c222ac.png)

The Business Easiness section allows to set the business available facilities 

![image](https://user-images.githubusercontent.com/54523080/208317990-2c5f5791-fedf-4088-a246-e9d55e57e57f.png)

The Social Information section allows to specify the links to social networks as explained in the section related to the QR Link of type vCard Plus.

![image](https://user-images.githubusercontent.com/54523080/208318040-8eeaacc3-0931-4c04-86c7-2f22f9acd981.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208318418-aa2d1a82-7a0b-469c-b2bb-15365e81dd1e.png)

#### Donation

![image](https://user-images.githubusercontent.com/54523080/208319049-33b70968-8cd7-4046-b339-068ab609aa49.png)

After selecting the type Donation you need to enter the information related to the donation. You should notice the donation info will be shown in a microsite.

The QR name, the name of the person who gets the donation, the message and the donation price are required. The button text is optional, you can leave it blank and it will take the default value: Donate. The website URL for giving thanks is also optional, in case of specifying a URL, the supporter will be redirected to that URL after confirming the donation but can leave it blank and the user will be redirected to a default thank you page.

![image](https://user-images.githubusercontent.com/54523080/208319077-3ae7c9c3-7c24-4ce9-af4c-e091405acb38.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.  The default value for the quantity of coffees to be donated is 1, but the user can change it. In the case of the sample this value was set to 2. Since the coffee price  was set to \$ 3.00, the donation will be $ 6.00.  

![image](https://user-images.githubusercontent.com/54523080/208319860-f833bdf8-dfa7-4664-a921-27aa2fd36a19.png)

When a user press the button Donate, he/she will be redirected to a checkout page like the one below.

![image](https://user-images.githubusercontent.com/54523080/208320103-03a6968f-fddc-41dc-979f-0d92824c56b2.png)

After completing the checkout process the supporter will me redirected to a thank you page like the one below. In that page the user can type a message and send it to the owner of the Donation Link.

![image](https://user-images.githubusercontent.com/54523080/208320295-38774d97-26bf-49ff-b5cf-0c0b5a4f3333.png)

#### Social Networks

![image](https://user-images.githubusercontent.com/54523080/208321766-ecfc7437-2b91-4ecf-b319-de9fbae25d1c.png)

After selecting the type Social Networks you need to enter the value related to the social network you want to add, usually a username. You should notice all the info will be shown in a microsite.

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

The QR name and at least one social network are required.

![image](https://user-images.githubusercontent.com/54523080/208322202-87b75d16-1294-4f22-a376-70da3e78f6aa.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![03 Social networks](https://user-images.githubusercontent.com/54523080/202066210-143533ce-9a5b-400c-b146-38379aa98c91.png)

#### Link-in-Bio

![image](https://user-images.githubusercontent.com/54523080/208322233-1e04e10d-05e2-4f58-aa27-ca4eb6062328.png)

After selecting the type Links you need to enter the values related to the social network links you want to add, usually a username, as well as one or more customized links for sharing your personal URLs such as you blog, your personal website, etc. You should notice all the info will be shown in a microsite.

Title: Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

The QR name, the title and at least one customized link are required.

The buttons Add and Remove allow to add a new link and remove an existing link.

![image](https://user-images.githubusercontent.com/54523080/208322595-299cb477-7c93-4c46-b615-1aed82cad7dc.png)

You can drag and drop any link by using the icon corresponding to the specific link you want to move. That way you can rearrange the links order.

![image](https://user-images.githubusercontent.com/54523080/208322670-7a312983-b3d9-405e-b769-f617e3ab2da1.png)

The Social Information section allows to specify the links to social networks as explained in the section related to the QR Link of type vCard Plus.

![image](https://user-images.githubusercontent.com/54523080/208322833-300e6dd9-398e-4d34-9566-5a3343de7b11.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208323172-67b43450-5441-46bb-b77a-be9717ba97ad.png) 

#### Pet Tag Id

![image](https://user-images.githubusercontent.com/54523080/208591889-418ab0b2-0f4b-476c-a0c9-b64533f1df3d.png)

After selecting the type Pet Tag Id you need to enter the values related to the pet. You should notice all the info will be shown in a microsite.

The Presentation section allows to set the pet's main info and the Contact section let you set information about its owner or carer. Keep in mind you will be able to print the QR code and place it on its collar, so anyone can scan the QR code and get information on how to return it to its home in case of getting lost.

The section More info is basically for adding the pet address.

The QR name and the pet name are required.

![image](https://user-images.githubusercontent.com/54523080/208598933-4c8a0d8e-147e-4d3a-91ba-2b77f1826a42.png)

The section More Details allows to add one or more customized details, so you need to add pairs Label+Text for every detail you want to add as shown below. The Headline is optional.

![image](https://user-images.githubusercontent.com/54523080/208602551-3462e1b5-e235-497d-af92-46e200ba61fa.png)

The section Links allows to add one or more links to web content. You need to add pairs Label+URL for every link you want to add as shown below. The Headline is optional.

![image](https://user-images.githubusercontent.com/54523080/208605741-d14e4a02-72a9-4807-8d19-63c90aead61c.png)

The Social Information section allows to specify the links to social networks as explained in the section related to the QR Link of type vCard Plus.

![image](https://user-images.githubusercontent.com/54523080/208606422-c6ea3389-1f20-4154-a3b2-3580317c8dcf.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208609257-d8a2b987-35a1-43a5-bc6a-b9f61ce4185b.png)

#### Coupon

![image](https://user-images.githubusercontent.com/54523080/208323310-aedcc4fe-53f1-4cab-87ce-0fdad596846f.png)

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

![image](https://user-images.githubusercontent.com/54523080/208323344-f1cae078-e7c4-472e-8f1b-333912504b84.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208323422-078155a8-5108-439d-b5f8-2f1303dc2feb.png)

#### PDF file

![image](https://user-images.githubusercontent.com/54523080/208323445-48474a92-52fb-46fd-a7c8-65535ec17451.png)

After selecting the type PDF file you need to enter the info related to the PDF file. You should notice the pdf file will be shown in a microsite.

The QR name and the pdf file are required. You can upload 1 PDF file of size 200 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/208323505-460555e2-f631-4e4d-820d-2d85ad3b210c.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208323634-8aa57c9c-2d7d-4109-99a6-2a9e66e75c6f.png)

#### Audio file

![image](https://user-images.githubusercontent.com/54523080/208323724-91bfe923-5f52-4935-83bd-83df44879f57.png)

After selecting the type Audio file you need to enter the info related to the Audio file. You should notice the audio file will be shown in a microsite.

The QR name and the audio file are required. You can upload 1 audio file of size 30 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/208323752-5978fcd4-ddc5-4012-8319-3a9ccf5736a3.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code.

![image](https://user-images.githubusercontent.com/54523080/208323814-23ee878c-a48b-4a50-b5b1-9d171762ab67.png)

#### Gallery

![image](https://user-images.githubusercontent.com/54523080/208323889-c0250235-e23f-4a0f-a4bc-5667f18663d1.png)

After selecting the type Gallery  you need to enter the info related to the Image files. You should notice the image files will be shown in a microsite.

The QR name and at least one image file are required. You can upload up to 25 files of size 20 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional): Allows to set a description to be shown in the microsite

![](C:\Users\joe\AppData\Roaming\marktext\images\2022-12-18-18-03-44-image.png)

The image below shows an example of the microsite where the user is redirected after scanning the QR code. When you tap on an image, a mobile-friendly image viewer let you watch the images in detail, move easily from image to another, download an image, etc.

![image](https://user-images.githubusercontent.com/54523080/208324128-b3bccacf-1732-4c60-842a-001f6266d0ba.png)

#### Video file

![image](https://user-images.githubusercontent.com/54523080/208324240-596ee2e0-fccf-4e7b-9b07-370a184dab00.png)

After selecting the type Video file you need to enter the info related to the video files. You should notice the video files will be shown in a microsite.

The QR name and at least one video file are required. You can upload up to 4 files of size 300 MB

Title (optional): Allows to set a title to be shown in the microsite

Description (optional):  Allows to set a description to be shown in the microsite

![image](https://user-images.githubusercontent.com/54523080/208324344-d9727a73-6ce9-461d-aa19-ff7a330138a8.png)

The image below shows two examples of the microsite where the user is redirected after scanning the QR code. The first one shows only one video. The other one contains three videos.

![image](https://user-images.githubusercontent.com/54523080/208324540-5b81c521-f0aa-4a71-a396-f321c8dbd7d3.png)
