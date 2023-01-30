# How to create a QR Link

[The QR Link](https://www.theqr.link/) is a feature of [Ebanux Marketplace](https://www.ebanux.com/) that facilitates the design of QR code which can be used for multiple purposes. It is available at https://app.theqr.link/

![image](https://user-images.githubusercontent.com/54523080/207484860-7f5fcac1-0bc5-4b42-bc9e-01e512290360.png)

Although you can start creating static QR codes without sign in or even without register for an account, it's better if you sign in before creating a QR code. To see the benefits of getting authenticated you should read the section [Registration](registration.md). To sign in press the Login button at the top right.

![image](https://user-images.githubusercontent.com/54523080/207485380-5d182e3d-4d98-4f90-a047-17de11a2713e.png)

## How to create a QR code

Generating a QR code with The QR Link is very easy, you just need to follow three simple steps:

**1- Choose the type of QR Code**

Select from URL, Plain Text, vCard, SMS, Email, Twitter, WiFi and more.

**2- Enter the data according to the type of QR**

Enter all the info which is needed to generate de QR code. The data varies depending on the type of your QR type.

**3- Customize your QR Code** 

Design your QR code with custom shapes, colors and frames.

### Create the QR code

When an authenticated user access The QR Link, the admin view is shown. To create a QR code you need to press the button Create QR.

![image](https://user-images.githubusercontent.com/54523080/207499608-b68a6515-8fdb-40c9-b71c-86979a4a3d74.png)

First of all, you must make a choice of creating a Dynamic QR code or an Static QR code.

![image](https://user-images.githubusercontent.com/54523080/207507368-66693e6e-6e40-4b9b-abee-da78ecb02d60.png)

When you generate a QR code, it's better if you use a **Dynamic QR code** instead of a static one. The Dynamic QR code is associated to a **Short Link** which provides three advantages: 

- a code less dense 

- the same code can be used to link different URLs

- most of the Dynamic QR codes allows to create a microsite

***A code less dense***

When you need to link a long URL the QR code might become dense. So, it's better if you use a short link instead and, as a result, you can generate a less dense code.

For example let's suppose we create a Dynamic QR code and, as a result, a short URL https://qrco.sh/a4Y7bO for the static URL https://docs.cenit.io/docs/basic_integration is created. If we also create a Static QR code for the static URL https://docs.cenit.io/docs/basic_integration,  we can compare both solutions. The image below shows the difference between the QR codes. As you can see, the Dynamic QR code with the short URL is simpler than the Static QR with the static URL which is longer than the short link. A less dense code is easier to read so you should choose to create Dynamic codes instead of Static ones.

![image](https://user-images.githubusercontent.com/54523080/183731130-2758cb15-d4e4-42e0-ad3e-10b8ec3ec730.png)

***The same code can be used to link different URLs***

Since a **Dynamic QR code** can be edited, a dynamic URL can be defined, so the same short link can be initially linked to a target URL and you may change the target URL later. For example let's suppose we create a Dynamic QR code, then a short URL is associated to it: https://a-qr.link/zDexu6 for the target URL https://docs.cenit.io/docs/basic_integration. Later we can edit the QR code and change the target URL associated to it from https://docs.cenit.io/docs/basic_integration to https://docs.cenit.io/docs/intro. That means the same short link https://a-qr.link/zDexu6 and consequently, the Dynamic QR code, now is linked to https://docs.cenit.io/docs/intro.

If we create the QR for the short link, no matter what target URL the short link is associated to, the QR code will lead you to one URL or another depending on the current target URL. The picture below explains this example. At first the QR code leads you to the webpage https://docs.cenit.io/docs/basic_integration, but after editing the Dynamic QR code  and changing the target URL associated to the short link, the same QR code will lead you to the webpage https://docs.cenit.io/docs/intro. This feature is useful when you want to reuse a code you have already shared or printed.

![image](https://user-images.githubusercontent.com/54523080/207508642-d5eb6be0-9b75-427e-ba56-016a364c3232.png)

**Most of the Dynamic QR codes allows to create a microsite**

- Most of the types of Dynamic QR codes allows to implicitly create, together with a Short URL, a microsite, in other words, a mobile-friendly landing page to show the information according to the type you choose. The information shown in the microsite can be easily updated. An there's more, there are some analytics & track associated to the microsite, that way you can get statistics about the access to your microsite, such as how many visits have taken place, which devices have been used to access the Short URL, from which locations, etc. So, we prefer to call this kinds of QR codes as QR Links. A QR Link encapsulates not only the QR code but also a Short Link and a microsite with the statistics related to its use.

![image](https://user-images.githubusercontent.com/54523080/207641348-74e25ea1-1014-43a2-99be-a6dce1e0c02d.png)

### Steps to create a QR code

No matter the type of QR code you want to create, the UI guide you through three steps:

![image](https://user-images.githubusercontent.com/54523080/207509420-cd2c1b29-fa43-4d81-b16f-0d82ca59fabd.png)

1- Select the QR type

2- Enter the QR content

3- Design the QR code

The buttons Back and Next allow you to navigate between the different steps.

![image](https://user-images.githubusercontent.com/54523080/207510352-e6451997-98cd-4949-a15a-b87227b92719.png)

The next sections explain how to create the QR code. 

### Select the QR type

At first you need to select the type of QR code you want to create, for example a QR code that links a website. Then click Next.

![image](https://user-images.githubusercontent.com/54523080/207757685-5b862d41-06cd-4c43-8ee2-47d707e3bdbf.png)

### Enter the QR content

Then you will need to enter the QR Name, which can be useful for managing your QR codes in the Admin view and some information according to the type of QR you want to create. For example, in the case of QR for linking to a website URL you just need to enter the QR name and the URL. You can find the explanation about the data to be defined for every type of QR code in the section [How to create different types of QR codes](#how-to-create-different-types-of-qr-codes)

![image](https://user-images.githubusercontent.com/54523080/207758123-ed830667-7080-4da6-a06b-6df66e4f6412.png)

After entering the QR content, you need to customize it. You should review the QR data before pressing the button Next. The customization is similar regardless the type of QR code and you can learn how to do that in the next section.

### Customize your QR Code

After pressing the Next button, the QR Designer view is shown. 

![image](https://user-images.githubusercontent.com/54523080/207758373-be63b75e-b6cd-4c03-9e58-4a4a100e49d4.png)

The body section allows you to customize the shape and color of the four elements related to the code: the code itself, the corners, the corner dots and the background. The location of this four elements is shown in the image below. The preview area, at the right, shows the design in real time, so every change in a property will be updated automatically in the preview.

![designer_elements](https://user-images.githubusercontent.com/54523080/207769946-44df1587-c16b-412c-af37-8b84943d8648.png)

The picture below shows the values we set in the QR code used as an example.

![image](https://user-images.githubusercontent.com/54523080/207770530-dd7ba40e-4b33-46b5-81a1-29975b99d1c5.png)

The picture above shows the three corners in the same color and the three corner dots in the same color. However, you can enable different colors for every corner or/and different colors for every corner dot by turning true the switch button Distinct color. The picture below shows the process of setting different colors for the corners. For setting different colors to the corners dot, the process is similar, you just need to turn true the switch button Distinc colors associated to the corner dots. Setting different colors for every corner and corner dot could be used to gain the user attention, but you should use the feature carefully to avoid a lack of uniformity in the design.

![image](https://user-images.githubusercontent.com/54523080/207771497-5b50a4ee-a7b6-478a-a4b5-81fe03d2aa72.png)

The example of code shows a background with solid color in white, but you can also set a bakground image by changing the bakground type to image, as shown below.  You should use the background image feature carefully because the image could introduce noises in the code and turn it unreadable. You also should be advised that there is a limit of 50 KB for the background image.

![image](https://user-images.githubusercontent.com/54523080/207772348-0a1f8969-0644-4590-8f3c-f80671bffd27.png)

After selecting image as background type, you need to press the button Pick Image in order to upload an image.

![image](https://user-images.githubusercontent.com/54523080/207772573-09477e97-1c23-4e94-a078-bd5e523deaab.png)

After uploading the image, it appears automatically in the preview as shown below

![image](https://user-images.githubusercontent.com/54523080/207772982-7c806f94-36f3-4068-9009-5f389a7eb148.png)

You can customize the background image appearance by presssing the button Setttings.

![image](https://user-images.githubusercontent.com/54523080/207773747-4544f15c-b8cb-4dbb-80d7-f04feda35297.png)

When you press the button Settings, the Background Settings view is shown. It allows to customize some properties:

- Opacity: The image opacity, a bigger value cause a less transparent image

- QR Size: Allows to reduce the size of the QR code.

- Image Size: Allows to change the image size

- X position: Let you move the image horizontally

- Y position: Let you move the image vertically

- Background Color: allows to set a color for the background, just like you can do in the Body view when you don't use a background image.

![image](https://user-images.githubusercontent.com/54523080/207774220-8e679366-51dd-4114-b810-8164927c18d9.png)

The picture below shows how the image looks like after changing some of these properties. The back button let you return to the Body view.

![image](https://user-images.githubusercontent.com/54523080/207776422-0a1b61c9-8fda-4b8e-86c3-6d4ac3e48fec.png)

The frames section allows you to decide the type of frame surrounding the code. The picture below shows a code with no frame.

![image](https://user-images.githubusercontent.com/54523080/207776651-c6b4a0cd-f245-4cf2-b0a1-9969ae107ecb.png)

The picture below show the result of selecting a simple frame.

![image](https://user-images.githubusercontent.com/54523080/207776892-4ced63ad-80a9-4e58-aa27-724e65e3e4f5.png)

Some types of frame contains both a frame and a call to action text, like the one in the picture below

![image](https://user-images.githubusercontent.com/54523080/207777073-08c2d611-e862-44eb-b8b0-c2b8c7cb98eb.png)

And you can select other types of frames with a more creative design, as shown below. Since it's a design related to the add to cart action, we are not using it in the further examples.

![image](https://user-images.githubusercontent.com/54523080/207777308-7657f909-bb28-4b7f-9590-1d007e72dc0a.png)

When you select a type of frame, you can also customize the color for both the frame and the text. The text can be also edited, we set "SCAN ME" in the case of the example below. The "Text up" switch button allows to choose between placing the text above or below the code.

![image](https://user-images.githubusercontent.com/54523080/207778160-8599afde-9c4f-4145-9678-b5fe42b3da3c.png)

The logo section allows to select the logo to be set in the center of the code. The default option is No Logo.

![image](https://user-images.githubusercontent.com/54523080/207778226-8cc5318a-8fe0-45fd-ad8f-a51bd450739a.png)

The picture below shows a design where a predefined logo has been selected.

![image](https://user-images.githubusercontent.com/54523080/207778350-c8ab76e5-231f-4f54-b902-f18fdfa2ab66.png)

However you can select a customized image by pressing the Upload button. In the example below the Cenit IO logo has been selected. You should be advised that there is a limit of 30 KB for the logo image.

![image](https://user-images.githubusercontent.com/54523080/207778480-ed6ecb5e-68e8-4a5a-bfe2-cd0da1d3125d.png)

### Checking for Readability

When designing a QR code it's important to test the code to check its behavior in two ways:

- Its content is correct, so when you scan it you get the result as expected.

- It is easy to read by different devices and apps.

The best way of checking the code's readability is to use different scan devices and apps and try to read it with every device and app. However, it's better if we let you now the probability of your code to be readable or not. So, anytime in the designing process, you can press the button Check for Readability  as shown below.

![image](https://user-images.githubusercontent.com/54523080/207778639-e7100511-5ed0-4c95-af0b-c9f3b39482db.png)

After pressing the button, a flash notification announces whether the code is probably readable or not. In the case of the example the notification lets you know the code has a high chance to be readable as you can see in the picture below.

![image](https://user-images.githubusercontent.com/54523080/207778798-f609ef5e-bd65-4413-be27-f09038b9112f.png)

If we change the background color and press the button Check Readability again, the notification alerts that there is a low chance to read that code well, as you can see in the picture below. So, you should take care about the contrast between the code and the background.

![image](https://user-images.githubusercontent.com/54523080/207778955-f84501f9-ae95-45e5-8479-26d054f765bb.png)

The design in the picture above looks like unpleasant and most of all, it's probably unreadable. So if we change the background color to white and check for readability again, we will see the high probability notification again, as shown below.

![image](https://user-images.githubusercontent.com/54523080/207779088-246e8a28-68f3-439a-baa4-0e4c80fecd8f.png)

### Download and Share it

After completing the customization you can press the Download button to export the QR code to be shared later. When you are working as an authenticated user, you can save the QR code and export it later. When you didn't sign in before designing your QR code, you need to export it or you lose your design when you finish.

![image](https://user-images.githubusercontent.com/54523080/207779255-4737c954-e237-4d5f-9165-8cfa6e525457.png)

If you select PNG the code can be download as an image that can be shared by sending  it as an email attachment or in a chat conversation, etc.

![image](https://user-images.githubusercontent.com/54523080/207779485-4fe4b964-a0e3-487c-8a63-480b4515eb15.png)

You should use the SVG type if you want to embed the code in a webpage.

![image](https://user-images.githubusercontent.com/54523080/207779693-f3036d6c-4db0-4c56-88d9-d7c427d2a600.png)

If you want to print the code for sharing a hard copy between customers or if you need to atach a printed code to a product to be sold, shipped or mailed, you probably prefer to use the option Print.

![image](https://user-images.githubusercontent.com/54523080/207779860-6312fa57-42bd-4f81-94b6-490cf46e6131.png)

After pressing the Print button you can customize the pdf as shown below

![image](https://user-images.githubusercontent.com/54523080/207780161-d39395d0-866e-409e-bc99-68c7392aabab.png)

After pressing the Download PDF button the pdf file is saved.

![image](https://user-images.githubusercontent.com/54523080/207780409-5eb497de-5d2b-42de-a990-0e370189aad9.png)

Finally, if you are working as an authenticated user, you can save your QR code, no mater if it is an Static or a Dynamic one, by pressing the button Save.

![image](https://user-images.githubusercontent.com/54523080/207780673-5318409f-8cc1-4989-9178-e8e435c9726b.png)

After saving the QR code, you can see its details in the admin view: its create and update dates, its type, which is web in the case of the example and a tag that lets you know if it's statis or dynamic.

![image](https://user-images.githubusercontent.com/54523080/207781082-d21f906a-958d-4546-8027-96dd8c1ca54c.png)

### How to create different types of QR codes

The section [Select the QR type](#select-the-qr-type) explains that the first step for creating a QR code is to select the type of QR code you want to generate. Depending on the type of QR code you must enter different information related to the code. The Static QR code for a website URL was explained before. If you want to know the details about creating other types of QR codes you should read the sections [Static QR codes](static_qr_codes.md) and [Dynamic QR codes](dynamic_qr_codes.md)
